/* eslint-disable import/extensions */
/* eslint-disable import/no-unresolved */
/* eslint-disable react/prop-types */
import { Section } from "astro-boilerplate-components";

import { GradientText } from "@/components/GradientText";
import PublicationList from "./PublicationList";

const PublicationListSection = (props) => (
  <Section
    title={
      <>
        <div className="flex items-baseline justify-between">
          <div>
            Recent <GradientText>Publications</GradientText>
          </div>

          <div className="text-sm">
            <a href="/pubs/">View all Publications →</a>
          </div>
        </div>
      </>
    }
  >
    <PublicationList pubs={props.pubs} />
  </Section>
);

export default PublicationListSection;
