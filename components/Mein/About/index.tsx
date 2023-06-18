import Image from 'next/image';
import about from './About.module.scss';

interface AboutTranslate {
  aboutTitle: string;
  aboutSpan: string;
  aboutSubTitle: string;
  text1: string;
  li1: string;
  li2: string;
  li3: string;
  li4: string;
  li5: string;
  text2: string;
  button: string;
}

export const AboutUs = ({
  aboutTitle,
  aboutSpan,
  aboutSubTitle,
  text1,
  li1,
  li2,
  li3,
  li4,
  li5,
  text2,
  button,
}: AboutTranslate) => {
  return (
    <section id="about" className={about.about}>
      <div className="container box">
        <div className="foto">
          <Image fill loading="lazy" src="/moon.png" alt="" />
        </div>
        <div className={about.about__right}>
          <h2 className="title">
            {aboutTitle} <span style={{ display: 'initial' }}>{aboutSpan}</span>
          </h2>
          <p className="text">{aboutSubTitle}</p>
          <article className={about.about__right_article}>
            <p className="text">{text1}</p>
            <ul>
              <li>{li1}</li>
              <li>{li2}</li>
              <li>{li3}</li>
              <li>{li4}</li>
              <li>{li5}</li>
            </ul>

            <p className="text">{text2}</p>
          </article>
          <button className="button">{button}</button>
        </div>
      </div>
    </section>
  );
};
