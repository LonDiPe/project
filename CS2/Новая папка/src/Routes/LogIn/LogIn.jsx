import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { login } from "../Profile/profileSlice";
import s from "./LogIn.module.css";
import { Header } from "../../components/Header/Header.jsx";
import { Footer } from "../../components/Footer/Footer.jsx";
import { Navigate } from "react-router-dom";

export function LogIn() {
  let [credentials, setCredentials] = useState({ email: "", password: "" });
  let dispatch = useDispatch();
  let { isAuth } = useSelector((state) => state.profile);

  let handleInputChange = (e) => {
    let { name, value } = e.target;
    setCredentials((prev) => ({ ...prev, [name]: value }));
  };

  let handleFormSubmit = (e) => {
    e.preventDefault();
    dispatch(login(credentials));
  };

  if (isAuth) {
    return <Navigate to="/" />;
  }

  return (
    <>
      <Header />
      <section className={s.section}>
        <h1 className={s.title}>Вход на сайте</h1>
        <form className={s.logIn} onSubmit={handleFormSubmit}>
          <input
            name="email"
            value={credentials.email}
            onChange={handleInputChange}
            placeholder="Email"
            className={s.input}
          />
          <input
            type="password"
            name="password"
            value={credentials.password}
            onChange={handleInputChange}
            placeholder="Пароль"
            className={s.input}
          />
          <button type="submit" className={s.button}>
            Войти
          </button>
        </form>
      </section>
      <Footer />
    </>
  );
}
