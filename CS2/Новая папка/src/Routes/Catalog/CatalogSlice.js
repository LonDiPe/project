import { createSlice, nanoid } from '@reduxjs/toolkit';
import skin1 from '../../assets/image1.png';
import skin2 from '../../assets/image2.png';
import skin3 from '../../assets/image3.png';
import skin4 from '../../assets/image4.png';
import skin5 from '../../assets/image5.png';
import skin6 from '../../assets/image6.png';
import skin7 from '../../assets/image7.png';
import skin8 from '../../assets/image8.png';
import skin9 from '../../assets/image9.png';
import skin10 from '../../assets/image10.png';
import skin11 from '../../assets/image11.png';
import skin12 from '../../assets/image12.png';
let SkinsStore = JSON.parse(localStorage.getItem("skins")) || [];

let profileSlice = createSlice({
    name: "skins",
    initialState: SkinsStore,
    reducers: {
        addSkin: (state, action) => {
            let skins = [
                {
                    id: nanoid(),
                    name: 'Butterfly Knife | Doppler Sapphire',
                    price: 200000,
                    img: skin1,
                    type: 'knife'
                },
                {
                    id: nanoid(),
                    name: 'Karambit | Doppler Ruby',
                    price: 130058,
                    img: skin2,
                    type: 'knife'
                },
                {
                    id: nanoid(),
                    name: 'Sport Gloves | Pandora\'s Box',
                    price: 50000,
                    img: skin3,
                    type: 'gloves'
                },
                {
                    id: nanoid(),
                    name: 'Sport Gloves | Hedge Maze',
                    price: 60000,
                    img: skin4,
                    type: 'gloves'
                },
                {
                    id: nanoid(),
                    name: 'StatTrak™ AWP | Redline',
                    price: 45000,
                    img: skin5,
                    type: 'sniper'
                },
                {
                    id: nanoid(),
                    name: 'AWP | Containment Breach',
                    price: 80000,
                    img: skin6,
                    type: 'sniper'
                },
                {
                    id: nanoid(),
                    name: 'AK-47 | Neon Rider',
                    price: 25000,
                    img: skin7,
                    type: 'rifle'
                },
                {
                    id: nanoid(),
                    name: 'M4A1-S | Vaporwave',
                    price: 20000,
                    img: skin8,
                    type: 'rifle'
                },
                {
                    id: nanoid(),
                    name: 'Operation Riptide Case',
                    price: 10000,
                    img: skin11,
                    type: 'container'
                },
                {
                    id: nanoid(),
                    name: 'CS:GO Weapon Case',
                    price: 15000,
                    img: skin12,
                    type: 'container'
                },
                {
                    id: nanoid(),
                    name: 'StatTrak™ USP-S | Stainless',
                    price: 35000,
                    img: skin9,
                    type: 'weapon'
                },
                {
                    id: nanoid(),
                    name: 'CZ75-Auto | Emerald Quartz',
                    price: 22000,
                    img: skin10,
                    type: 'weapon'
                }
            ];            
            state.push(...skins);
            localStorage.setItem("skins", JSON.stringify(state));
        }
    },
},
);

export let { addSkin } = profileSlice.actions;
export default profileSlice.reducer;