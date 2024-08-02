
import Navbar from "./navbar-component/navbar-component";
import Footer from "./footer-component/footer-component";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Loading from "../loading-component/loading";
import { lazy, Suspense } from "react";

const Mainbody = lazy(() => import("./main-component/main-component"));
const Product = lazy(() => import("./product-component/product"));


export default function Maxview(props) {
    return (
        <Suspense fallback={<Loading />}>
            <BrowserRouter>
                <Navbar />
                <Routes>
                    <Route path="/" element={<Mainbody data={props.data} />} />
                    <Route path="/product/:id" element={<Product data={props.data} />} />
                </Routes>
                <Footer />
            </BrowserRouter>
        </Suspense>
    );
}