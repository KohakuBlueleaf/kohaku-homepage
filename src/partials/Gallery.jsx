import { useState } from "react";
/* eslint-disable react/prop-types */
// eslint-disable-next-line import/extensions
import { Image } from "@/components/Image";

const Gallery = (props) => {
  const [expandedIndex, setExpandedIndex] = useState(null);

  const handleExpand = (index) => {
    setExpandedIndex((prevIndex) => (prevIndex === index ? null : index));
  };
  const style = `
  .grid {
    grid-auto-flow: dense;
  }

  .expanded-item {
    grid-row: auto / span 2;  /* Start at auto, span at least 2 rows */
    height: auto;
    min-height: 20rem;  /* This is equivalent to 2 rows (2 * 10rem) */
  }

  .expanded-image-container {
    position: relative;
    padding-bottom: 100%;  /* This creates a 1:1 aspect ratio container */
  }

  .expanded-image-container img {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    object-fit: contain;
  }
  `;
  return (
    <div>
      <style>{style}</style>
      <div className="grid grid-cols-[repeat(auto-fit,minmax(10rem,1fr))] auto-rows-[10rem] gap-4 transition-all duration-300 ease-in-out">
        {props.imgUrls.map((imgUrl, index) => (
          <Image
            key={imgUrl.src}
            img={imgUrl.img}
            onExpand={() => handleExpand(index)}
            isExpanded={expandedIndex === index}
          />
        ))}
      </div>
    </div>
  );
};

export default Gallery;
