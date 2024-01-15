import {
  Logo,
  NavbarTwoColumns,
  NavMenu,
  NavMenuItem,
  Section,
} from 'astro-boilerplate-components';
import kohaku_icon from 'src/images/kohaku-icon.png';

const Navbar = () => (
  <Section>
    <NavbarTwoColumns>
      <a href="/">
        <Logo
          icon={<img className="mr-1 h-10 w-10" src={kohaku_icon.src} />}
          name="Kohaku is a cute dragon girl."
        />
      </a>

      <NavMenu>
        <NavMenuItem href="/projects/">Projects</NavMenuItem>
        <NavMenuItem href="/pubs/">Publications</NavMenuItem>
        <NavMenuItem href="/posts/">Blogs</NavMenuItem>
      </NavMenu>
    </NavbarTwoColumns>
  </Section>
);

export { Navbar };
