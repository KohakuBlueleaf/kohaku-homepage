/* eslint-disable import/extensions */
/* eslint-disable import/no-unresolved */
/* eslint-disable react/prop-types */
import { Tags } from "astro-boilerplate-components";

import { Publication } from "@/components/Publication";

function PublicationList(props) {
  return (
    <div className="flex flex-col gap-6">
      {props.pubs.map((pub) => (
        <Publication
          key={pub.name}
          name={pub.name}
          description={pub.description}
          link={pub.link}
          category={pub.category.map((tag) => (
            <Tags key={tag.name} color={tag.color}>
              {tag.name}
            </Tags>
          ))}
        />
      ))}
    </div>
  );
}

export default PublicationList;
