import { Link } from "react-router-dom"
import s from "./Footer.module.css"
export function Footer() {
    return (
        <footer className={s.footer}>
            <div className={s.textBlock}>
                <h2 className={s.title}>Маркет</h2>
                <Link className={s.links} to={'/store'}>Продать скины CS2</Link>
                <Link className={s.links} to={'/store'}>Купить скины CS2</Link>
            </div>
            <div className={s.textBlock}>
                <h2 className={s.title}>Помощь</h2>
                <Link className={s.links} to={'/contacts'}>Контакты</Link>
            </div>

        </footer>
    )
};

