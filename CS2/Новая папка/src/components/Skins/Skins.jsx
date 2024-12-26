import React from "react";
import s from "./Skins.module.css";
import { Skin } from "../Skin/Skin"; 

export function Skins({ skins }) {
    return (
        <div className={s.skins}>
            {skins.map((skin) => (
                <Skin 
                    key={skin.id} 
                    img={skin.img} 
                    name={skin.name} 
                    price={skin.price} 
                    id={skin.id}
                />
            ))}
        </div>
    );
}
