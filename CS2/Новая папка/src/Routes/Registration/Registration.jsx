import s from "./Registration.module.css";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { register } from "../Profile/profileSlice";
import { Header } from "../../components/Header/Header";
import { Footer } from "../../components/Footer/Footer";
import { Navigate } from "react-router-dom";

export function Registration() {
  let [inputs, setInputs] = useState({
    username: "",
    email: "",
    password: "",
  });
  let dispatch = useDispatch();
  let isAuth = useSelector((state) => state.profile.isAuth);

  let handleWrite = (e, field) => {
    setInputs({ ...inputs, [field]: e.target.value });
  };

  let handleSubmit = (e) => {
    e.preventDefault();
    dispatch(register(inputs));
    setInputs({ username: "", email: "", password: "" });
  };

  if (isAuth) {
    return <Navigate to="/" />;
  }

  return (
    <>
      <Header />
      <section className={s.container}>
        <form className={s.form} onSubmit={handleSubmit}>
          <h1 className={s.title}>Регистрация</h1>
          <input
            type="text"
            value={inputs.username}
            onChange={(e) => handleWrite(e, "username")}
            placeholder="Никнейм"
            className={s.input}
          />
          <input
            value={inputs.email}
            onChange={(e) => handleWrite(e, "email")}
            placeholder="Email"
            className={s.input}
          />
          <input
            type="password"
            value={inputs.password}
            onChange={(e) => handleWrite(e, "password")}
            placeholder="Пароль"
            className={s.input}
          />
          <button type="submit" className={s.button}>
            Зарегистрироваться
          </button>
        </form>
      </section>
      <Footer />
    </>
  );
}