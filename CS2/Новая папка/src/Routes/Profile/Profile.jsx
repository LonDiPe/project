import s from "./Profile.module.css"
import { Header } from "../../Components/Header/Header"
import { Footer } from "../../Components/Footer/Footer"
import { useSelector } from "react-redux";
import { Skins } from "../../components/Skins/Skins"; 

export function Profile() {
    let loggedInUser = useSelector((state) => state.profile.loggedInUser);
    let paidItems = loggedInUser ? loggedInUser.paidItems : [];

    return (
        <>
            <Header />
            <section className={s.profile}>
                <h2>Ваши скины</h2>
                <div className={s.skins}>
                    {paidItems.length > 0 ? (
                        <Skins skins={paidItems} /> 
                    ) : (
                        <p>У вас еще нет купленных скинов.</p>
                    )}
                </div>
            </section>
            <Footer />
        </>
    );
}
