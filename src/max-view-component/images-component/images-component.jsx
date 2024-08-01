import Image from "../image-component/image-component";
import styles from "./images-component.module.css";
import React from "react";
function Images({ data }) {
    return (
        <div className={styles.items}>
            {
                data.map((item) => {
                    return (
                        <Image key={item.name} image={item.image} name={item.name} price={item.price.substring(1,)} color={item.color}></Image>)
                })
            }
        </div>
    )
}

export default Images;