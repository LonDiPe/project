import React from "react";
import s from "./Skin.module.css";
import { useDispatch, useSelector } from "react-redux";
import { addPaidItems } from '../../Routes/Profile/profileSlice';

export function Skin({ img, name, price, id }) {
  let dispatch = useDispatch();
  let isAuth = useSelector((state) => state.profile.isAuth);
  
  let handleBuyClick = () => {
    if (isAuth) {
      dispatch(addPaidItems([{ img, name, price, id }]));
    } else {
      alert("Зарегестрируйтесь или войдите в аккаунт, чтобы купить скин.");
    }
  };

  return (
    <div className={s.skin}>
        <img src={img} alt={name} className={s.itemImg} />
        <h3 className={s.itemName}>{name}</h3>
        <p className={s.itemPrice}>{price}₽</p>
        <button onClick={handleBuyClick} className={s.buyButton}>
          Купить
        </button>
    </div>
  );
}
