import Header from "./header-component/header";
import Scroll from "./scroll-component/scroll";
import Footer from "./footer-component/footer"
import { useEffect, useState } from "react";
import style from "./main-body-component/main-body.module.css"
import styles2 from "./scroll-component/scroll.module.css"
import styles3 from "./product-component/product.module.css"
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { lazy, Suspense } from "react";
import Loading from "../loading-component/loading"

const Product = lazy(() => import("./product-component/product"))
const Main = lazy(() => import("./main-body-component/main-body"))
function Minview(props) {
    const [showscroll, setshowscroll] = useState(false)
    useEffect(() => {
        let increaseheight = document.getElementsByClassName(style.mainbody)[0]?.offsetHeight || document.getElementsByClassName(styles3.product)[0]?.offsetHeight
        window.onscroll = () => {
            if (window.scrollY > 250) {
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
        window.scrollTo({ top: 0, behavior: "smooth" });
    }
    return (
        <>
            <Header />
            <Suspense fallback={<Loading />}>
                <BrowserRouter>
                    <Routes>
                        <Route path="/" element={<Main data={props.data} />} />
                        <Route path="/product/:id" element={<Product data={props.data} />} />
                    </Routes>
                </BrowserRouter>
            </Suspense>
            {showscroll && <Scroll onclick={scroll}></Scroll>}
            <Footer></Footer>
        </>
    )
}

export default Minview;