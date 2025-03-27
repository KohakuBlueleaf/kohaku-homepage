/* eslint-disable react/prop-types */
import { Tags } from "astro-boilerplate-components";
import { Project } from "@/components/Project";

const ProjectList = (props) => (
  <div className="flex flex-col gap-6">
    {props.projs.map((proj) => (
      <Project
        key={proj.name}
        name={proj.name}
        description={proj.description}
        link={proj.link}
        img={proj.img}
        category={proj.category.map((tag) => (
          <Tags key={tag.name} color={tag.color}>
            {tag.name}
          </Tags>
        ))}
      />
    ))}
  </div>
);

export default ProjectList;
