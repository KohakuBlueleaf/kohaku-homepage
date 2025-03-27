import type { ReactNode } from "react";

type IPublicationProps = {
  name: string;
  description: any;
  link: string;
  category: ReactNode;
};

const Publication = (props: IPublicationProps) => (
  <div className="flex flex-col items-center gap-x-8 rounded-md bg-slate-800 p-3 md:flex-row">
    <div>
      <div className="flex flex-col items-center gap-y-2 md:flex-row">
        <a className="hover:text-cyan-400" href={props.link}>
          <div className="text-xl font-semibold">{props.name}</div>
        </a>
      </div>

      <div className="mt-3 flex flex-wrap gap-2">{props.category}</div>

      <p
        className="mt-3 text-gray-400"
        dangerouslySetInnerHTML={{ __html: props.description }}
      ></p>
    </div>
  </div>
);

export { Publication };
