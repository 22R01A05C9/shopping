import Header from "./header-component/header";
import Main from "./main-body-component/main-body"
import Scroll from "./scroll-component/scroll";
import Footer from "./footer-component/footer"
import { useEffect, useState } from "react";
import style from "./main-body-component/main-body.module.css"
import styles2 from "./scroll-component/scroll.module.css"
function Minview(props) {
    const [showscroll, setshowscroll] = useState(false)
    useEffect(() => {
        let increaseheight = document.getElementsByClassName(style.mainbody)[0].offsetHeight
        window.onscroll = () => {
            if (window.scrollY > 300) {
                setshowscroll(true);
                setTimeout(() => {
                    if (increaseheight < window.scrollY + 800) {
                        document.getElementsByClassName(styles2.scroll)[0].style.bottom = "60px";
                    } else {
                        document.getElementsByClassName(styles2.scroll)[0].style.bottom = "30px";
                    }
                })

            } else {
                setshowscroll(false);
            }

        }
    })
    const scroll = () => {
        window.scrollTo(0, 0);
    }
    return (
        <>
            <Header />
            <Main data={props.data} />
            {showscroll && <Scroll onclick={scroll}></Scroll>}
            <Footer></Footer>
        </>
    )
}

export default Minview;