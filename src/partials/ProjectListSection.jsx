/* eslint-disable import/extensions */
/* eslint-disable react/prop-types */
/* eslint-disable import/no-unresolved */
import { Section } from "astro-boilerplate-components";

import { GradientText } from "@/components/GradientText.tsx";
import ProjectList from "@/partials/ProjectList";

const ProjectListSection = (props) => (
  <Section
    title={
      <>
        <div className="flex items-baseline justify-between">
          <div>
            Recent <GradientText>Projects</GradientText>
          </div>

          <div className="text-sm">
            <a href="/projects/">View all Projects →</a>
          </div>
        </div>
      </>
    }
  >
    <ProjectList projs={props.projs}></ProjectList>
  </Section>
);

export default ProjectListSection;
