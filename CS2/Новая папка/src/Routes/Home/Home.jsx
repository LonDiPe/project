import s from "./Home.module.css"
import { Header } from "../../components/Header/Header.jsx"
import { Footer } from "../../components/Footer/Footer.jsx"
import { Link } from "react-router-dom"
import mainImage from "../../assets/mainImage.png"
export function Home() {
    return (
        <>
            <Header />
            <main className={s.main}>
                <div className={s.textBlock}>
                    <h1>О нас</h1>
                    <p className={s.text}>Купите и продайте скины CS2 <br /> быстро, выгодно и за реальные <br /> деньги</p>
                    <div className={s.links}>
                        <Link to={'/store'} className={s.link1}>Купить скины</Link>
                        <Link to={'/store'} className={s.link2}>Продать скины</Link>
                    </div>
                </div>
                <img className={s.mainImage} src={mainImage} alt="" />
            </main>
            <Footer/>
        </>
    )
};

