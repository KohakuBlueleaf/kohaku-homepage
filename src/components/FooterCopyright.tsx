type IFooterCopyrightProps = {
  site_name: string;
};

const FooterCopyright = (props: IFooterCopyrightProps) => (
  <div className="border-t border-gray-600 pt-5">
    <div className="text-sm text-gray-200">
      © Copyright {new Date().getFullYear()} by {props.site_name}. <br></br>
      All media on this site, including text, images, and videos, is licensed
      under{' '}
      <a
        className="text-cyan-500"
        href="https://creativecommons.org/licenses/by-nc-nd/4.0/"
      >
        CC BY-NC-ND 4.0
      </a>
    </div>
  </div>
);

export { FooterCopyright };
