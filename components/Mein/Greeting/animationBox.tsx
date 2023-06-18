'use client';

import Link from 'next/link';
import { ScrolBox } from './skrolBox';
import greeting from './Greeting.module.scss';
import { useEffect, useState } from 'react';
import TypewriterAnimation from './TypewriterAnimation';
import { Translate } from '.';
import { gsap } from 'gsap';

export const AnimationBox = ({ title, animTitle, subTitle }: Translate) => {
  const [animationVisible, setAnimationVisible] = useState(false);

  useEffect(() => {
    const preLoaderAnim = () => {
      const tl = gsap.timeline({
        onComplete: () => {
          setTimeout(() => {
            setAnimationVisible(true);
          }, 6000);
        },
      });

      // Додайте ваш код анімації preLoader тут

      return tl;
    };

    const tl = preLoaderAnim();
    tl.play();

    return () => {
      tl.kill(); // Зупинка анімації при розмонтуванні компонента
    };
  }, []);

  const transitionDuration = 1;
  const transitionDelay = 0.3;

  const animationStyles = {
    transform: animationVisible ? 'translateX(0)' : 'translateX(-100px)',
    opacity: animationVisible ? 1 : 0,
    transition: `transform ${transitionDuration}s, opacity ${transitionDuration}s`,
    transitionDelay: `${transitionDelay}s`,
  };

  return (
    <div className={greeting.greeting__left}>
      <div style={animationStyles}>
        <h1 style={{ display: 'inline' }} className="title">
          Front-end / Full-Stack
          <br /> <TypewriterAnimation title={title} animTitle={animTitle} />
        </h1>
      </div>
      <div style={{ ...animationStyles, transitionDelay: `${transitionDelay + 0.3}s` }}>
        <h2 className={greeting.greeting__left_subTitle}>{subTitle}</h2>
        <ul className={greeting.greeting__left__list}>
          <li style={{ ...animationStyles, transitionDelay: `${transitionDelay + 0.6}s` }}>
            <Link
              style={{ backgroundImage: `url('/github.svg')`, backgroundSize: '35px' }}
              className={greeting.greeting__left__list_link}
              href="https://github.com/den4k-pr"></Link>
          </li>
          <li style={{ ...animationStyles, transitionDelay: `${transitionDelay + 0.9}s` }}>
            <Link
              style={{ backgroundImage: `url('/telegram.svg')`, backgroundSize: '40px' }}
              className={greeting.greeting__left__list_link}
              href="https://t.me/WorkPlH"></Link>
          </li>
        </ul>
      </div>
      <div style={{ ...animationStyles, transitionDelay: `${transitionDelay + 1.2}s` }}>
        <div className={greeting.greeting__left__platforms}>
          <p className={greeting.greeting__left__platforms_text}>Tech Stack</p>
          <ScrolBox />
        </div>
      </div>
    </div>
  );
};
