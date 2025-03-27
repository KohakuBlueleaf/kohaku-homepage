import React from "react";
import { Section } from "astro-boilerplate-components";
import { GradientText } from "@/components/GradientText.tsx"; // Still assuming GradientText is React/TSX
import CareerList from "@/components/CareerList.jsx"; // Import the new JSX CareerList

const CareerListSection = (props) => (
  <Section
    title={
      <>
        <div className="flex items-baseline justify-between">
          <div>
            Recent <GradientText>Career</GradientText>
          </div>
          <div className="text-sm">
            <a href="/careers/">View Full Career Path →</a>
          </div>
        </div>
      </>
    }
  >
    {/* Render the React component. Apply client directive here. */}
    <CareerList careers={props.careers} client:load />
  </Section>
);

export default CareerListSection;
