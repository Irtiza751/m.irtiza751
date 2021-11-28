import React from 'react';
import Link from 'next/link';
import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';
// import Button from '../../styles/GlobalComponents/Button';
import { LeftSection } from './HeroStyles';
import appCss from '../../styles/app.module.scss';

const Hero = (props) => (
  <>
    <Section row nopadding>
      <LeftSection>
        <SectionTitle main center>
          Hi, My name is <br />
          Muhammad Irtiza.
        </SectionTitle>
        <SectionText>
          I am a software developer with robust problem-solving skills and proven experience in creating and designing software in a test-driven environment.
        </SectionText>
        {/* <Button onClick={props.handleClick}>My Resume</Button> */}
        <Link href="/Resume.pdf">
          <a className={appCss.heroBtn} target="_blank">My Resume</a>
        </Link>
      </LeftSection>
    </Section>
  </>
);

export default Hero;
