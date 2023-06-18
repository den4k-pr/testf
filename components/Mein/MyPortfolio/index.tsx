import Image from 'next/image';
import portfolio from './MyPortfolio.module.scss';

interface PortfolioTranslation {
  latestProjectTitle: string;
  latestProjectSpan: string;
}

export const MyPortfolio = ({ latestProjectTitle, latestProjectSpan }: PortfolioTranslation) => {
  return (
    <section id="portfolio" className={portfolio.portfolio}>
      <div className="container">
        <h2 className="title">
          {latestProjectTitle} <span style={{ display: 'initial' }}>{latestProjectSpan}</span>
        </h2>
        <div className={portfolio.portfolio__projects}>
          <figure className={portfolio.portfolio__projects_part}>
            <figcaption>
              <h3>Web Site</h3>
              <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ipsam, non.</p>
              <Image src="/rst.svg" alt="" width={40} height={40} />
            </figcaption>
          </figure>
          <figure className={portfolio.portfolio__projects_part}>
            <figcaption>
              <h3>title</h3>
              <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ipsam, non.</p>
              <Image src="/rst.svg" alt="" width={40} height={40} />
            </figcaption>
          </figure>
          <figure className={portfolio.portfolio__projects_part}>
            <figcaption>
              <h3>title</h3>
              <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ipsam, non.</p>
              <Image src="/rst.svg" alt="" width={40} height={40} />
            </figcaption>
          </figure>
          <figure className={portfolio.portfolio__projects_part}>
            <figcaption>
              <h3>title</h3>
              <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ipsam, non.</p>
              <Image src="/rst.svg" alt="" width={40} height={40} />
            </figcaption>
          </figure>
        </div>
      </div>
    </section>
  );
};
