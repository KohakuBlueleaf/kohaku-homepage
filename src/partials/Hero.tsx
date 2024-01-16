import { HeroAvatar, HeroSocial, Section } from 'astro-boilerplate-components';
import kohaku from 'src/images/kohaku-bg-full.png';

import { GradientText } from '@/components/GradientText';

const css = `
#avatar{
  overflow: auto,
  position: relative,
}
#avatar-after {
  content: "";
  position: absolute;
  left: 0;
  right: 0;
  z-index: -1;

  display: block;
  background-image: url(${kohaku.src});
  background-size:cover;
  width: 100%;
  height: 100%;

  -webkit-filter: blur(25px);
  -moz-filter: blur(25px);
  -o-filter: blur(25px);
  -ms-filter: blur(25px);
  filter: blur(25px);
}
`;

const Hero = () => (
  <Section>
    <HeroAvatar
      title={
        <>
          <GradientText>Kohaku BlueLeaf</GradientText>
          <br />
          <span className="text-xl">Shih-Ying, Yeh 葉適穎</span>
        </>
      }
      description={
        <>
          &emsp; I am a junior undergraduate student in Computer Science
          Department, National Tsing Hua University in Taiwan.
          <br></br>&emsp; I am interested in improving the performance of
          Generative AI, both in terms of training a better model (LyCORIS,
          KohakuXL) and building an efficient and robust system
          (AUTOMATIC1111/stable-diffusion-webui).
          <br></br>
          <br></br>
          <span className="font-bold italic">
            AI art should be looked like AI, not like humans.
          </span>
        </>
      }
      avatar={
        <>
          <style>{css}</style>
          <div style={{ position: 'relative' }}>
            <div id="avatar">
              <div id="avatar-after"></div>
              <img
                style={{
                  width: '20rem',
                  filter: 'transparent',
                }}
                src={kohaku.src}
                alt="Avatar image"
                loading="lazy"
              />
            </div>
          </div>
        </>
      }
      socialButtons={
        <>
          <div
            style={{
              filter:
                'invert(45%) sepia(30%) saturate(2000%) hue-rotate(220deg) brightness(90%) contrast(80%);',
            }}
          >
            <div
              style={{ filter: 'invert(1) brightness(0)' }}
              className="flex flex-row"
            >
              <a className="mr-3" href="https://github.com/KohakuBlueleaf">
                <HeroSocial
                  src="/assets/images/github-icon.png"
                  alt="Github icon"
                />
              </a>
              <a className="mr-3" href="mailto:kohaku@kblueleaf.net">
                <HeroSocial src="/assets/images/email.png" alt="Email icon" />
              </a>
              <a
                className="mr-3"
                href="https://www.linkedin.com/in/適穎-葉-80797327b/"
              >
                <HeroSocial
                  src="/assets/images/linkedin-icon.png"
                  alt="Linkedin Icon"
                />
              </a>
              <a className="mr-3" href="https://twitter.com/KBlueleaf">
                <HeroSocial
                  src="/assets/images/twitter-bird.png"
                  alt="Twitter icon"
                />
              </a>
              <a className="mr-3" href="https://space.bilibili.com/507303431">
                <HeroSocial
                  src="/assets/images/bilibili-icon.png"
                  alt="Bilibili icon"
                />
              </a>
            </div>
          </div>
        </>
      }
    />
  </Section>
);

export { Hero };
