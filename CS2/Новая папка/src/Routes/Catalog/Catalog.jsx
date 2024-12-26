import { useState } from "react";
import { nanoid } from "nanoid";
import s from "./Catalog.module.css";
import { Header } from "../../components/Header/Header";
import { Footer } from "../../components/Footer/Footer";
import { addSkin } from "./CatalogSlice";
import { useDispatch, useSelector } from "react-redux";
import { Skins } from "../../components/Skins/Skins";

export function Catalog() {
    let disp = useDispatch();
    let skins = useSelector((state) => state.skins);

    let [sortedSkins, setSortedSkins] = useState(skins);
    let [sortType, setSortType] = useState("priceAsc");
    let [selectedTypes, setSelectedTypes] = useState({
        knife: false,
        gloves: false,
        weapon: false,
        rifle: false,
        sniper: false,
        container: false,
    });
    let [priceRange, setPriceRange] = useState({ min: "", max: "" });

    let handleSortChange = (e) => {
        let sortOption = e.target.value;
        setSortType(sortOption);

        let sortedData;
        if (sortOption === "priceAsc") {
            sortedData = [...skins].sort((a, b) => a.price - b.price);
        } else if (sortOption === "priceDesc") {
            sortedData = [...skins].sort((a, b) => b.price - a.price);
        } else if (sortOption === "nameAsc") {
            sortedData = [...skins].sort((a, b) => a.name.localeCompare(b.name));
        } else if (sortOption === "nameDesc") {
            sortedData = [...skins].sort((a, b) => b.name.localeCompare(a.name));
        }

        setSortedSkins(sortedData);
    };

    let handleTypeChange = (e) => {
        let { name, checked } = e.target;
        setSelectedTypes((prevState) => {
            let newState = { ...prevState, [name]: checked };
            filterItems(newState, priceRange);
            return newState;
        });
    };

    let handlePriceChange = (e) => {
        let { name, value } = e.target;
        setPriceRange((prevState) => ({
            ...prevState,
            [name]: value,
        }));
    };

    let filterItems = (types, prices) => {
        let filteredData = skins;

        let activeTypes = Object.keys(types).filter((key) => types[key]);
        if (activeTypes.length > 0) {
            filteredData = filteredData.filter((skin) => activeTypes.includes(skin.type));
        }

        let minPrice = parseInt(prices.min, 10);
        let maxPrice = parseInt(prices.max, 10);
        if (!isNaN(minPrice) && minPrice >= 0) {
            filteredData = filteredData.filter((skin) => skin.price >= minPrice);
        }
        if (!isNaN(maxPrice) && maxPrice > 0) {
            filteredData = filteredData.filter((skin) => skin.price <= maxPrice);
        }

        setSortedSkins(filteredData);
    };

    let handleFilterApply = () => {
        filterItems(selectedTypes, priceRange);
    };

    return (
        <>
            <Header />
            <section className={s.catalog}>
                <div className={s.right}>
                    <div className={s.rightUp}>
                        {["knife", "gloves", "weapon", "rifle", "sniper", "container"].map(type => (
                            <div key={type} className={s.checkboxItem}>
                                <input
                                    type="checkbox"
                                    name={type}
                                    id={type}
                                    checked={selectedTypes[type]}
                                    onChange={handleTypeChange}
                                    className={s.checkboxInput}
                                />
                                <p className={s.checkboxLabel}>{type === "knife" ? "Ножи" :
                                    type === "gloves" ? "Перчатки" :
                                        type === "weapon" ? "Пистолеты" :
                                            type === "rifle" ? "Штурмовые винтовки" :
                                                type === "sniper" ? "Снайперские винтовки" :
                                                    "Контейнеры"}</p>
                            </div>
                        ))}
                    </div>
                    <div className={s.rightDown}>
                        <input
                            type="number"
                            name="min"
                            className={s.priceInput}
                            placeholder="От"
                            value={priceRange.min}
                            onChange={handlePriceChange}
                        />
                        <div className={s.line}></div>
                        <input
                            type="number"
                            name="max"
                            className={s.priceInput}
                            placeholder="До"
                            value={priceRange.max}
                            onChange={handlePriceChange}
                        />
                        <button onClick={handleFilterApply} className={s.filterButton}>Применить фильтр</button>
                    </div>
                    <div className={s.sort}>
                        <label className={s.label2}>Sort by:</label>
                        <select value={sortType} onChange={handleSortChange} className={s.sortSelect}>
                            <option value="priceAsc">Price (Low to High)</option>
                            <option value="priceDesc">Price (High to Low)</option>
                            <option value="nameAsc">Name (A-Z)</option>
                            <option value="nameDesc">Name (Z-A)</option>
                        </select>
                    </div>
                </div>
                <div className={s.left}>
                    <Skins skins={sortedSkins} />
                </div>
            </section>
            <button onClick={() => disp(addSkin())} className={s.addButton}>add</button>
            <Footer />
        </>
    );
}
