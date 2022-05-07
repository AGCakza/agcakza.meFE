import styles from './GearCard.module.sass'

const GearCard = ({
    src = '/img/gears/default.webp',
    alt = 'Default'
}) => (
    <div className={styles.GearCard}>
        <img src={src} alt={alt} />
    </div>
)

export default GearCard