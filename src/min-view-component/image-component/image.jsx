import styles from "./image.module.css";

function Image({ image, name, price, color }) {
    return (
        <div className={styles.item}>
            <img src={image} alt="Product image"></img>
            <hr></hr>
            <p className={styles.title}>{name}</p>
            <p className={styles.price}> &#x20B9;{price}</p>
            <p className={styles.color}>{color} Color</p>
            <button className={styles.buy} type="button">Buy Now</button>
        </div>

    )
}

export default Image;