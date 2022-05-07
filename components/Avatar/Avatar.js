import styles from './Avatar.module.sass'

const Avatar = ({
    img = '/img/avatar.jpeg',
    alt = 'agcakza'
}) => (
    <div className={styles.avatar}>
        <img src={img} alt={alt} />
    </div>
)

export default Avatar