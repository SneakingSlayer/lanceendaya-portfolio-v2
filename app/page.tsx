import { ProfileCard, Container } from "@/components";
import { HeroSection, FeedbacksCarousel, ProjectCard } from "@/components";

import { BASE_URL, projects } from "@/constants";

const getTopFeedbacks = async () => {
  try {
    const result = await fetch(`${BASE_URL}/api/feedbacks?top=true&limit=3`, {
      method: "GET",
      cache: "no-cache",
    });
    return await result.json();
  } catch (error) {
    return { data: [] };
  }
};

export default async function Home() {
  const topFeedbacks = await getTopFeedbacks();

  return (
    <Container pageKey="home">
      <HeroSection />
      <div className="flex flex-col md:flex-row  w-full gap-4">
        <ProfileCard />
        <div className="w-full">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {projects.slice(0, 3).map((project, i) => (
              <ProjectCard
                key={i}
                images={project.images}
                name={project.name}
                description={project.description}
                year={project.year}
                url={project.url}
                links={project.links}
              />
            ))}
            <ProjectCard isCollection={true} items={projects} />
          </div>
        </div>
      </div>
      <FeedbacksCarousel feedbacks={topFeedbacks?.data ?? []} />
    </Container>
  );
}
