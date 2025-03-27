import {
  Logo,
  NavbarTwoColumns,
  NavMenu,
  NavMenuItem,
  Section,
} from 'astro-boilerplate-components';
import kohaku_icon from 'src/images/kohaku-icon.webp';

const Navbar = () => (
  <Section>
    <NavbarTwoColumns>
      <a href="/">
        <Logo
          icon={
            <img
              className="mr-1"
              src={kohaku_icon.src}
              style={{ width: '3.5rem', borderRadius: '20%' }}
            />
          }
          name="Kohaku is a cute dragon girl."
        />
      </a>

      <NavMenu>
        <NavMenuItem href="/projects/">Projects</NavMenuItem>
        <NavMenuItem href="/pubs/">Publications</NavMenuItem>
        <NavMenuItem href="/careers/">Career</NavMenuItem>
        <NavMenuItem href="/posts/">Blogs</NavMenuItem>
        <NavMenuItem href="/gallery/">Gallery</NavMenuItem>
      </NavMenu>
    </NavbarTwoColumns>
  </Section>
);

export { Navbar };
