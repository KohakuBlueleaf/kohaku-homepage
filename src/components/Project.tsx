import type { ReactNode } from "react";

type IProjectProps = {
  img: {
    src: string;
    alt: string;
  };
  name: string;
  description: string;
  link: string;
  category: ReactNode;
};

const Project = (props: IProjectProps) => {
  const altStr = props.img.alt.replace(/\s/g, "");
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
    background-size: cover;
    width: 100%;
    height: 100%;
    transition: 0.25s ease;
  }
  #blurry-edge-${altStr}:hover #blurry-edge-after-${altStr} {
    filter: blur(6px) contrast(1);
  }
  `;
  return (
    <div className="flex flex-col items-center gap-x-8 rounded-md bg-slate-800 p-3 md:flex-row">
      <div className="shrink-0">
        <a href={props.link}>
          <style>{cssBlurryEdge}</style>
          <div className="relative z-10">
            <div id={`blurry-edge-${altStr}`}>
              <div id={`blurry-edge-after-${altStr}`}></div>
              <img
                className="h-36 w-36"
                src={props.img.src}
                alt={props.img.alt}
                loading="lazy"
              />
            </div>
          </div>
        </a>
      </div>

      <div>
        <div className="flex flex-col items-center gap-y-2 md:flex-row">
          <a className="hover:text-cyan-400" href={props.link}>
            <div className="text-xl font-semibold">{props.name}</div>
          </a>

          <div className="ml-3 flex flex-wrap gap-2">{props.category}</div>
        </div>

        <p className="mt-3 text-gray-400">{props.description}</p>
      </div>
    </div>
  );
};

export { Project };
