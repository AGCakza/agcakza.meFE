import { useTranslation } from 'next-i18next'
import styles from './PageWrapper.module.sass'

const PageWrapper = ({
    children
}) => {
    const { t } = useTranslation('common')

    return (
        <div className={styles.page}>
            <div className={styles.ukraine}>
                <p>{t('ukraineLong')}</p>
                <p>{t('ukraineLong')}</p>
                <p>{t('ukraineLong')}</p>
                <p>{t('ukraineLong')}</p>
                <p>{t('ukraineLong')}</p>
                <p>{t('ukraineLong')}</p>
                <p>{t('ukraineLong')}</p>
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