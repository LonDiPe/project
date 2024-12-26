import s from "./Header.module.css";
import Logo from "../../assets/Logo.png";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { logout } from "../../Routes/Profile/profileSlice";

export function Header() {
  let select = useSelector((state) => state.profile);
  let dispatch = useDispatch();

  let handleLogout = () => {
    dispatch(logout());
  };

  return (
    <header className={s.header}>
      <div>
        <img src={Logo} alt="Logo" />
      </div>
      <div className={s.links}>
        <Link className={s.italic} to={"/store"}>Купить скины</Link>
        <Link className={s.italic} to={"/store"}>Продать скины</Link>
        {!select.isAuth ? (
          <>
            <Link className={s.boldItalic} to={"/registration"}>Регистрация</Link>
            <Link className={s.boldItalic} to={"/LogIn"}>Войти</Link>
          </>
        ) : (
          <>
            <Link className={s.boldItalic} to={'/profile'}>{select.loggedInUser.username}</Link>
            <button onClick={handleLogout} className={s.leave}>Выйти</button>
          </>
        )}
      </div>
    </header>
  );
}
