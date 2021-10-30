import React from 'react';

import { Section, SectionDivider, SectionText, SectionTitle } from '../../styles/GlobalComponents';


const Timeline = () => {
  return (
    <Section id="about">
      <SectionTitle>About Me</SectionTitle>
      <SectionText>
        Hello! my name is Muhammad Irtiza, a software engineer based in Karachi, Pakistan. I am also a Founder &amp; CEO of ElevenFox.
      </SectionText>
      <SectionText>
        I enjoy creating things that live on the internet, whether that be websites, applications, or anything in between. My goal is to always build products that provide pixel-perfect, performant user experiences.
      </SectionText>
      <SectionText>
        I am studding Computer Science from ILMA University, I am also working an with engineering team at A2Z Creatorz as a software developer where I am working on a wide variety of interesting and meaningful projects on a daily basis.
      </SectionText>
      <SectionDivider />
    </Section>
  );
};

export default Timeline;
