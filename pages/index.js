import styles from 'styles/Home.module.sass'
import { PageWrapper, Title, Avatar, SocialButton } from 'components'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { useTranslation } from 'next-i18next';
import Head from 'next/head';

const Home = () => {

  const { t } = useTranslation('common')

  return (
    <PageWrapper>
      <Head>
        <title>Avtandil Katsadze</title>
        <link rel="shortcut icon" href="/favicon.ico" />
      </Head>
      <div className={styles.container}>
        <Avatar />
        <div className={styles.label}>
          <Title unSplit label='Developer' color='red' dotColor='red' />
          <Title unSplit label='Digitalpreneur' color='grey' dotColor='red' />
          <Title unSplit label='Stan' color='white' dotColor='red' />
        </div>
        <p>{t('hello')}</p>
        <div className={styles.socials}>
          <SocialButton src='/img/instagram.svg' link='https://instagram.com/agcakza' alt='Instagram' />
          <SocialButton src='/img/linkedin.svg' link='https://www.linkedin.com/in/agcakza/' alt='LinkedIn' />
          <SocialButton src='/img/steam.svg' link='https://steamcommunity.com/id/agcakza' alt='Steam' />
          <SocialButton src='/img/telegram.svg' link='https://t.me/agcakza' alt='Telegram' />
        </div>
      </div>
    </PageWrapper>
  )
}

export const getStaticProps = async ({ locale }) => ({
  props: {
    ...(await serverSideTranslations(locale, ['common'])),
  }
})

export default Home