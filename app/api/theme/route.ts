import { NextRequest, NextResponse } from "next/server";
import { cookies } from "next/headers";

export const POST = async (req: NextRequest) => {
  const currentMode = cookies().get("mode") ?? { name: "mode", value: "dark" };
  const newMode = currentMode.value === "dark" ? "light" : "dark";
  cookies().set("mode", newMode);
  return NextResponse.json({ mode: newMode });
};
