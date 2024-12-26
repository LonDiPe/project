import s from "./App.module.css"
import { createBrowserRouter, RouterProvider } from "react-router-dom"
import { Home } from "./Routes/Home/Home"
import { Registration } from "./Routes/Registration/Registration"
import { LogIn } from "./Routes/LogIn/LogIn"
import { Profile } from "./Routes/Profile/Profile"
import { Catalog } from "./Routes/Catalog/Catalog"
import { Contacts } from "./Routes/Contacts/Contacts"
let router = createBrowserRouter([
  {
    path: "/",
    element: <Home />
  },
  {
    path: "/registration",
    element: <Registration />
  },
  {
    path: "/logIn",
    element: <LogIn />
  },
  {
    path: "/Profile",
    element: <Profile />
  },
  {
    path: "/store",
    element: <Catalog />
  },
  {
    path: "/contacts",
    element: <Contacts />
  }
])
export function App() {

  return (
    <>
      <RouterProvider router={router} />
    </>
  )
};

