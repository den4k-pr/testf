import './globals.css';
import './anim.css';
import { useLocale } from 'next-intl';
import { notFound } from 'next/navigation';
import { Footer } from '../../components/Layout/footer';
import { Header } from '../../components/Layout/header';
import { useTranslations } from 'next-intl';
import PreLoader from '../../components/Layout/Preloader';

export const metadata = {
  title: 'Front-end / Full-Stack',
  description: `Hi, I'm Denis. Experienced Full-Stack developer from Ukraine based on Nextjs/Nestjs.`,
};

export default function RootLayout({
  children,
  params,
}: {
  params: any;
  children: React.ReactNode;
}) {
  const locale = useLocale();

  // Show a 404 error if the user requests an unknown locale
  if (params.locale !== locale) {
    notFound();
  }

  const t = useTranslations('Index');

  return (
    <html lang={locale}>
      <body id="home">
        <PreLoader
          pr1={t('pr1')}
          pr2={t('pr2')}
          pr3={t('pr3')}
          pr4={t('pr4')}
          pr5={t('pr5')}
          pr6={t('pr6')}
          pr7={t('pr7')}
        />
        <Header
          locale={locale}
          home={t('home')}
          about={t('about')}
          skills={t('skills')}
          portfolio={t('portfolio')}
          contact={t('contact')}
        />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
