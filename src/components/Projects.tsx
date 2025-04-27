import { useRef } from "react";
import { DynamicGrid } from "./DynamicGrid";
import Section from "./Section";


function Projects() {
  const projectsRef = useRef<HTMLDivElement>(null);
  return (
    <Section  id="projects" ref={projectsRef}>
      <DynamicGrid/>
    </Section>
  );
}

export default Projects;
