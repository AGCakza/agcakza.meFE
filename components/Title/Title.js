import styles from './Title.module.sass'

const Title = ({
    label = '',
    color = 'white',
    unSplit = false,
    dotColor
}) => (
    <h2 className={`${styles.title} ${styles[color]}`}>
        {unSplit ? <strong>{label}</strong> : <>
            <strong>{label.split(' ')[0]}</strong>
            {label.split(' ').length > 1 && ' '}{label.split(' ').slice(1).join(' ')
        }</>}
        <strong className={styles[dotColor]}>.</strong>
    </h2>
)

export default Title