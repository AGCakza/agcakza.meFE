import { useTranslation } from 'next-i18next'
import styles from './PageWrapper.module.sass'
import Marquee from 'react-double-marquee'

const PageWrapper = ({
    children
}) => {
    const { t } = useTranslation('common')
    const optionsMarquee = {
        "direction": "left",
        "speed": 0.04,
        "delay": 3000,
        "childMargin": 15,
        "scrollWhen": "always"
    }

    return (
        <div className={styles.page}>
            <div className={styles.ukraine}>
                <Marquee direction='left' childMargin={3} delay={0}>
                    <p>{t('ukraineLong')} {t('ukraineLong')}</p>
                </Marquee>
            </div>
            <div className={styles.header}>

            </div>
            <div className={styles.content}>
                {children}
            </div>
        </div>
    )
}

export default PageWrapper