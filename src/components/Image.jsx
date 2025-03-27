/* eslint-disable react/prop-types */

const Image = (props) => {
  const altStr = props.img.alt.replace(/\s/g, '');
  const cssBlurryEdge = `
  #blurry-edge-${altStr}{
    position: relative;
  }
  #blurry-edge-after-${altStr}{
    position: absolute;
    left: 0;
    right: 0;
    z-index: -1;

    display: block;
    background-image: url(${props.img.src});
    background-size: ${props.isExpanded ? 'contain' : 'cover'};
    background-repeat: no-repeat;
    background-position: center;
    transition: 0.25s ease;
  }
  #blurry-edge-${altStr}:hover #blurry-edge-after-${altStr} {
    filter: blur(6px) contrast(1);
    cursor: pointer;
  }  
  .gallery-item.expanded {
    z-index: 10;
  }
  .gallery-item.expanded img {
    max-height: 80vh;  /* Limit maximum height to 80% of viewport height */
  }
  `;
  return (
    <div
      className={`w-full gallery-item cursor-pointer transition-all duration-300 ease-in-out
        ${props.isExpanded ? 'col-span-2 row-span-2' : 'h-full'}`}
    >
      <style>{cssBlurryEdge}</style>
      <div
        className="w-full h-full"
        id={`blurry-edge-${altStr}`}
        onClick={props.onExpand}
      >
        <div className="w-full h-full" id={`blurry-edge-after-${altStr}`}></div>
        <img
          className={`w-full ${
            props.isExpanded
              ? 'h-full object-contain max-h-[80vh]'
              : 'h-full object-cover'
          }`}
          src={props.img.src}
          alt={altStr}
          loading="lazy"
        />
      </div>
    </div>
  );
};

export { Image };
