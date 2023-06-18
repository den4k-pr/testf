'use client'
import footer from './Lauout.module.scss'


export const Footer = () => {

    const scrollToTop = () => {
        window.scrollTo({
          top: 0,
          behavior: 'smooth',
        });
    };

    
    return(
        <footer className={footer.footer}>
            <div className="container">
                <p className={footer.footer__text}>Copyright &copy; 2023 STAR PASS | All Rights Reserved.</p>
                <button onClick={scrollToTop}></button>
            </div>
        </footer>
    )
}