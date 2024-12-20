import { HeroAvatar, HeroSocial, Section } from 'astro-boilerplate-components';
import badge from 'src/images/kohaku-badge.webp';
import kohaku from 'src/images/kohaku-bg-full.webp';

import { GradientText } from '@/components/GradientText';

const cssAvatar = `
#avatar{
  overflow: hidden;
}
#avatar-after {
  content: "";
  position: absolute;
  left: 0;
  right: 0;
  z-index: -1;

  display: block;
  background-image: url(${kohaku.src});
  background-size: cover;
  width: 100%;
  height: 100%;
  filter: blur(15px) contrast(2);
}
`;
const cssBadge = `
#badge{
  overflow: hidden;
  border-radius: 15%;
}
#badge-after {
  content: "";
  position: absolute;
  left: 0;
  right: 0;
  z-index: -1;
  border-radius: 5%;

  display: block;
  background-image: url(${badge.src});
  background-size: cover;
  width: 100%;
  height: 100%;
  filter: blur(15px) contrast(2);
}
`;
const cssDesc = `
p {
  line-height: 1.75rem !important;
}
`;

const Hero = () => (
  <Section>
    <HeroAvatar
      title={
        <>
          <div className="mb-4 flex flex-row items-center">
            <div className="mr-10">
              <style>{cssBadge}</style>
              <div className="relative">
                <div id="badge">
                  <div id="badge-after"></div>
                  <img
                    style={{ height: '8rem' }}
                    src={badge.src}
                    alt="Avatar image"
                    loading="lazy"
                  />
                </div>
              </div>
            </div>
            <div className="flex flex-col">
              <GradientText>Kohaku BlueLeaf</GradientText>
              <span className="text-xl">Shih-Ying, Yeh 　 葉適穎</span>
            </div>
          </div>
        </>
      }
      description={
        <>
          <style>{cssDesc}</style>I am a senior undergraduate student in the
          Computer Science Department at National Tsing Hua University in
          Taiwan.
          <br></br>
          <br></br> I am interested in improving the performance of Generative
          AI, focusing on training better models, building efficient and robust
          systems, and developing useful tools.
          <br></br>
          <br></br>
          I'm currently working on two projects: HakuTPU and HomeDiffusion.
          <br></br>
          HakuTPU aims to build a high-performance AI accelerator based on
          Xilinx FPGA, <br></br>while HomeDiffusion seeks to enable pretrained
          diffusion models on consumer-level hardware.
          <br></br>
          <br></br>
          <span className="font-bold italic">
            AI art should look like AI, not humans.
          </span>
        </>
      }
      avatar={
        <>
          <style>{cssAvatar}</style>
          <div className="relative mt-7">
            <div id="avatar">
              <div id="avatar-after"></div>
              <img
                style={{ width: '24rem' }}
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
                'invert(45%) sepia(30%) saturate(2000%) hue-rotate(220deg) brightness(90%) contrast(80%)',
            }}
          >
            <div
              style={{ filter: 'invert(1) brightness(0)' }}
              className="flex flex-row"
            >
              <a className="mr-3" href="https://github.com/KohakuBlueleaf">
                <HeroSocial
                  src="/assets/images/github-icon.webp"
                  alt="Github icon"
                />
              </a>
              <a className="mr-3" href="mailto:kohaku@kblueleaf.net">
                <HeroSocial src="/assets/images/email.webp" alt="Email icon" />
              </a>
              <a
                className="mr-3"
                href="https://www.linkedin.com/in/適穎-葉-80797327b/"
              >
                <HeroSocial
                  src="/assets/images/linkedin-icon.webp"
                  alt="Linkedin Icon"
                />
              </a>
              <a className="mr-3" href="https://twitter.com/KBlueleaf">
                <HeroSocial
                  src="/assets/images/twitter-bird.webp"
                  alt="Twitter icon"
                />
              </a>
              <a className="mr-3" href="https://space.bilibili.com/507303431">
                <HeroSocial
                  src="/assets/images/bilibili-icon.webp"
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
