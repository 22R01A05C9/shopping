import { useEffect } from "react"
import styles from "./header.module.css"

function Header() {
    useEffect(() => {
        document.querySelector(".fa-bars").addEventListener("click", () => {
            document.querySelector(".fa-bars").classList.add(styles.disnone)
            document.querySelector(".fa-xmark-large").classList.remove(styles.disnone)
            document.querySelector("nav").style.display = "block";
            setTimeout(() => {
                document.querySelector("nav").style.opacity = "1";
            }, 200);
        })

        document.querySelector(".fa-xmark-large").addEventListener("click", () => {
            document.querySelector("nav").classList.add(styles.fadeout)
            setTimeout(() => {
                document.querySelector("nav").classList.remove(styles.fadeout)
                document.querySelector(".fa-bars").classList.remove(styles.disnone)
                document.querySelector(".fa-xmark-large").classList.add(styles.disnone)
                document.querySelector("nav").style.display = "none";
                document.querySelector("nav").style.opacity = "0";
            }, 200)


        })
    })
    return (
        <header className={styles.minheader}>
            <div className={styles.subpart}>
                <div className={styles.head}>
                    <a href="#"><img className={styles.brandlogo} src="images/brandlogo.png" alt="Website Logo" /></a>
                    <i className="fa-solid fa-bars"></i>
                    <i className={"fa-sharp fa-solid fa-xmark-large " + styles.disnone}></i>
                </div>
                <nav className={styles.minnav} >
                    <ul>
                        <li className={styles.hoveractive}>Home</li>
                        <li>About Us</li>
                        <li>Contact Us</li>
                        <li>Track Order</li>
                    </ul>
                </nav>
            </div>
        </header>
    )
}

export default Header