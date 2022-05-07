import styles from './SocialButton.module.sass'

const SocialButton = ({
    src,
    alt,
    link
}) => (
    <a href={link} target='_blank' className={styles.social}>
        <img src={src} alt={alt} />
    </a>
)

export default SocialButton