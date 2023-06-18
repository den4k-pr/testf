'use client';

import { Link } from 'react-scroll';
import header from './Lauout.module.scss';
import { useOutside } from './BurgerMenu';
import cn from 'classnames';
import { ObjectLanguages } from './ObjectLanguages';

interface HeaderTranslate {
  locale: string;
  home: string;
  about: string;
  skills: string;
  portfolio: string;
  contact: string;
}

export const Header = ({ locale, home, about, skills, portfolio, contact }: HeaderTranslate) => {
  const { ref, isShow, setIsShow } = useOutside(false);

  const list = [
    {
      inf: 'home',
      text: home,
    },
    {
      inf: 'about',
      text: about,
    },
    {
      inf: 'skills',
      text: skills,
    },
    {
      inf: 'portfolio',
      text: portfolio,
    },
    {
      inf: 'contact',
      text: contact,
    },
  ];

  const scrollToElement = (elementId: string) => {
    const element = document.getElementById(elementId);
    if (element) {
      window.scrollTo({
        top: element.offsetTop,
        behavior: 'smooth',
      });
    }
  };

  return (
    <header className={header.header}>
      <div className="container">
        <p className={header.header__logo}>Portfolio.</p>
        <div
          onClick={() => setIsShow(!isShow)}
          className={cn(header.header__burger, isShow === true ? 'burger_active' : '')}>
          <div className="burger_line"></div>
          <div className="burger_line"></div>
          <div className="burger_line"></div>
        </div>
        <ul
          style={{ transform: isShow === true ? 'translateY(0%)' : 'translateY(-150%)' }}
          className={header.header__list}>
          {list.map((el) => (
            <li key={el.inf}>
              <Link
                className={header.header__list_link}
                to={el.inf}
                onClick={() => (scrollToElement(`${el.inf}`), setIsShow(!isShow))}
                spy={true}
                smooth={true}
                duration={1000}>
                {el.text}
              </Link>
            </li>
          ))}
        </ul>
        <ObjectLanguages locale={locale} />
      </div>
    </header>
  );
};
