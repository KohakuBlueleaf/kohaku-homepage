import type { IFrontmatter } from 'astro-boilerplate-components';
import type { ReactNode } from 'react';

type IDocumentContentProps = {
  content: IFrontmatter;
  children: ReactNode;
};

const DocumentContent = (props: IDocumentContentProps) => (
  <div className="mx-auto mt-5 max-w-[80ch]">
    <div className="prose prose-invert mt-8 prose-img:rounded-lg">
      {props.children}
    </div>
  </div>
);

export { DocumentContent };
