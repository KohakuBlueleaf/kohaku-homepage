/* eslint-disable no-alert */
import type { IFrontmatter } from 'astro-boilerplate-components';
import { Section } from 'astro-boilerplate-components';
import React, { useEffect, useState } from 'react';

import { DocumentContent } from '../components/DocumentContent';

type IDocumentPostProps = {
  frontmatter: IFrontmatter;
  html: string;
  raw: string;
};

const DocumentPost: React.FC<IDocumentPostProps> = (props) => {
  const [modifiedContent, setModifiedContent] = useState<string>(props.html);
  const [modifiedRaw, setModifiedRaw] = useState<string>(props.raw);

  useEffect(() => {
    let newContent = props.html;
    let newRaw = props.raw;
    const queryString = window.location.href.split('?')[1] || '';
    const param = new URLSearchParams(queryString);
    param.forEach((value, key) => {
      newContent = newContent.replaceAll(key, value);
      newRaw = newRaw.replaceAll(key, value);
    });
    setModifiedContent(newContent);
    setModifiedRaw(newRaw);
  }, [props.html, props.raw]);

  const handleDownload = () => {
    const blob = new Blob([modifiedRaw], { type: 'text/markdown' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `${props.frontmatter.title || 'document'}.md`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  };

  const handleCopy = () => {
    navigator.clipboard
      .writeText(modifiedRaw)
      .then(() => {
        alert('Content copied to clipboard!');
      })
      .catch((err) => {
        // eslint-disable-next-line no-console
        console.error('Failed to copy: ', err);
      });
  };

  return (
    <Section>
      <div className="mb-4 flex justify-end space-x-2">
        <button
          onClick={handleCopy}
          className="rounded bg-green-500 px-4 py-2 text-white transition-colors hover:bg-green-600"
        >
          Copy to Clipboard
        </button>
        <button
          onClick={handleDownload}
          className="rounded bg-blue-500 px-4 py-2 text-white transition-colors hover:bg-blue-600"
        >
          Download
        </button>
      </div>
      <DocumentContent content={props.frontmatter}>
        <div dangerouslySetInnerHTML={{ __html: modifiedContent }} />
      </DocumentContent>
    </Section>
  );
};

export { DocumentPost };
