import s from "./Contacts.module.css"
import { Header } from "../../Components/Header/Header"
import { Footer } from "../../Components/Footer/Footer"

export function Contacts() {
    return (
        <>
            <Header />
            <section className={s.contacts}>
                <div className={s.contactBox}>
                    <p className={s.contactTitle}>Есть вопросы? Мы поможем!</p>
                    <p className={s.contactItem}>E-mail: <a href="mailto:support@Pegas.market.com" className={s.contactLink}>support@Pegas.market.com</a></p>
                    <p className={s.contactItem}>Telegram: <a href="https://t.me/pegas_help_bot" className={s.contactLink}>@pegas_help_bot</a></p>
                    <p className={s.contactItem}>Сотрудничество YouTube/Twitch: <a href="mailto:partnership@Pegas-market.com" className={s.contactLink}>partnership@Pegas-market.com</a></p>
                    <p className={s.contactItem}>Сотрудничество: <a href="mailto:admin@pegas-market.com" className={s.contactLink}>admin@pegas-market.com</a></p>
                </div>
            </section>
            <Footer />
        </>
    )
};
