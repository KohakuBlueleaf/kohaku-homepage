import { HeroAvatar, HeroSocial, Section } from 'astro-boilerplate-components';
import kohaku from 'src/images/kohaku-bg-full.png';

import { GradientText } from '@/components/GradientText';

const Hero = () => (
  <Section>
    <HeroAvatar
      title={
        <>
          <GradientText>Kohaku BlueLeaf</GradientText>
          <br />
          <span className="text-xl">Shih-Ying, Yeh</span>
        </>
      }
      description={
        <>
          An undergrad student in Taiwan. <br></br>
          Making fun stuff with Generative AI. <br></br>
          <br></br>
          <span className="font-bold italic">
            AI art should be looked like AI, not like humans.
          </span>
        </>
      }
      avatar={
        <img
          className="h-60"
          src={kohaku.src}
          alt="Avatar image"
          loading="lazy"
        />
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
