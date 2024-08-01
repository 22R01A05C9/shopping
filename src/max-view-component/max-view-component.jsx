import Mainbody from "./main-component/main-component";
import Navbar from "./navbar-component/navbar-component";
import Footer from "./footer-component/footer-component";

export default function Maxview(props) {
    return (
        <>
            <Navbar />
            <Mainbody data={props.data} />
            <Footer />
        </>
    );
}