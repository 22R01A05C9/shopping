import styles from "./navbar-component.module.css"

function Navbar() {
    return (
        <header className={styles.maxheader}>
            <div className={styles.subpart}>
                <div className={styles.head}>
                    <a href="#"><img className={styles.brandlogo} src="images/brandlogo.png" alt="Website Logo"></img></a>
                    <i className="fa-solid fa-bars"></i>
                    <i className="fa-sharp fa-solid fa-xmark-large dis-none"></i>
                </div>
                <nav>
                    <ul>
                        <li>Home</li>
                        <li>About Us</li>
                        <li>Contact Us</li>
                        <li>Track Order</li>
                    </ul>
                </nav>
            </div>
            <div className={styles.searchfield}>
                <input name="search" type="text" placeholder="Search Here"></input>
                <svg xmlns="http://www.w3.org/2000/svg" height="20px" viewBox="0 -960 960 960" width="20px" fill="#5f6368"><path d="M784-120 532-372q-30 24-69 38t-83 14q-109 0-184.5-75.5T120-580q0-109 75.5-184.5T380-840q109 0 184.5 75.5T640-580q0 44-14 83t-38 69l252 252-56 56ZM380-400q75 0 127.5-52.5T560-580q0-75-52.5-127.5T380-760q-75 0-127.5 52.5T200-580q0 75 52.5 127.5T380-400Z" /></svg>
            </div>
        </header>
    )


}

export default Navbar