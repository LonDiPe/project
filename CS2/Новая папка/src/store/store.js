import { configureStore } from "@reduxjs/toolkit";
import profileSlice from '../Routes/Profile/profileSlice';
import skinsSlice from '../Routes/Catalog/CatalogSlice';
export default configureStore({
    reducer: {
        profile: profileSlice,
        skins: skinsSlice,
    }
})