import styles from './styles.module.scss';

interface CardProps {
    title: string;
    description: string;
    icon: string;
    color: string;
    className: string;
}

export function Card({ color, title, description, icon, className}: CardProps) {
    return (
        <div className={`${styles.card} ${styles[className]}`} >
            <div className={`${styles.iconContainer}`} style={{ backgroundColor: color,}}>
                <img src={ `assets/${icon}`} alt="" />
            </div>

            <div className={styles.info}>
                <h4>{title}</h4>
                <p>{description}</p>
            </div>
        </div>
    )
}