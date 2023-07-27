import { NextRequest, NextResponse } from "next/server";

import { prisma } from "@/prisma";

import { NextApiResponse } from "next";

import { get, set } from "lodash";

import { badwords } from "@/constants";
import { cookies } from "next/headers";

const rateLimit = 1; // Number of allowed requests per 3 days

const rateLimiter = {};

const rateLimiterMiddleware = (ip: string) => {
  const now = Date.now();
  const windowStart = now - 259200; // 3 days
  const requestTimestamps = get(rateLimiter, ip, [])?.filter(
    (timestamp) => timestamp > windowStart
  ) as Array<string | Date | number>;
  requestTimestamps.push(now);
  set(rateLimiter, ip, requestTimestamps);
  return requestTimestamps.length <= rateLimit;
};

const isEmpty = (param: string | number) =>
  param === null || param === undefined || param === "";

const hasBadWords = (str: string): boolean => {
  let hasBadWords = false;
  for (let i = 0; i < badwords.length; i++) {
    if (str.includes(badwords[i])) {
      hasBadWords = true;
      break;
    }
  }
  return hasBadWords;
};

export const GET = async (req: NextRequest) => {
  try {
    const page = req.nextUrl.searchParams.get("page") ?? "1";
    const limit = req.nextUrl.searchParams.get("limit") ?? "30";
    const topFeedback =
      (req.nextUrl.searchParams.get("top") ?? "false") === "true";
    const feedbacks = await prisma.feedbacks.findMany({
      skip: (parseInt(page) - 1) * parseInt(limit),
      take: parseInt(limit),
      orderBy: topFeedback
        ? [{ stars: "desc" }]
        : {
            createdAt: "desc",
          },
    });
    const feedbacksCount = await prisma.feedbacks.count();
    return NextResponse.json({
      data: feedbacks,
      totalPages: Math.ceil(feedbacksCount / parseInt(limit)),
      currentPage: parseInt(page),
    });
  } catch (error) {
    return NextResponse.json({ data: error }, { status: 400 });
  }
};

export const POST = async (req: NextRequest, res: NextApiResponse) => {
  try {
    const ip =
      req.headers.get("x-real-ip") ?? req.headers.get("x-forwarded-for") ?? "";
    if (!rateLimiterMiddleware(ip)) {
      throw {
        message: "Ooppss.. You're sending too much messages.",
        status: 429,
      };
    }
    const reqBody = await req.json();

    if (
      isEmpty(reqBody?.name) ||
      isEmpty(reqBody?.message) ||
      isEmpty(reqBody?.stars)
    )
      throw { message: "All fields must be filled.", status: 400 };
    if (hasBadWords(reqBody.message))
      throw { message: "You can't say that here.", status: 400 };
    if (reqBody.message.length < 50 || reqBody.name.length < 5)
      throw { message: "Too short.", status: 400 };
    await prisma.feedbacks.create({
      data: {
        name: reqBody.name,
        message: reqBody.message,
        stars: reqBody.stars,
        ip,
      },
    });
    return NextResponse.json({ data: "Feedback posted." });
  } catch (error: any) {
    return NextResponse.json(
      { data: error?.message ?? "Error" },
      { status: error?.status ?? 400 }
    );
  }
};
