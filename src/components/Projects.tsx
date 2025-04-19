import { DynamicGrid } from "./DynamicGrid";

function Projects() {
  return (
    <section className="relative pt-20 inset-0 w-full flex flex-col justify-center h-screen">
      <h2 className="pb-8 text-apple-gradient text-4xl mx-auto">My Projects</h2>
      <DynamicGrid/>
    </section>
  );
}

export default Projects;
