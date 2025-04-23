import { DynamicGrid } from "./DynamicGrid";

function Projects() {
  return (
    <section id="projects" className="relative inset-0 w-full flex flex-col justify-center h-screen">
      <div className="absolute -top-8 inset-0 h-16 blur-lg z-10 bg-background/90 dark:to-background-dark/90 "/>
      <DynamicGrid/>
    </section>
  );
}

export default Projects;
