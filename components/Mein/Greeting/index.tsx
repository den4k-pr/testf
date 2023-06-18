import greeting from './Greeting.module.scss';
import cn from 'classnames';
import Image from 'next/image';
import { AnimationBox } from './animationBox';

export interface Translate {
  title: string;
  animTitle: string;
  subTitle: string;
}

export const Greeting = ({ title, animTitle, subTitle }: Translate) => {
  return (
    <section className={cn('container', greeting.greeting)}>
      <AnimationBox title={title} animTitle={animTitle} subTitle={subTitle} />
      <div className="foto">
        <Image fill src="/moon.png" alt="" loading="eager" />
      </div>
    </section>
  );
};
