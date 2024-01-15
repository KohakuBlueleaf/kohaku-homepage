import { Section } from 'astro-boilerplate-components';

import { FooterCopyright } from '@/components/FooterCopyright';
import { AppConfig } from '@/utils/AppConfig';

const Footer = () => (
  <Section>
    <FooterCopyright site_name={AppConfig.site_name} />
  </Section>
);

export { Footer };
