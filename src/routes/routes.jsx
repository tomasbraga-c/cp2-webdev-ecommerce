import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Home from "../pages/Home";
import Perfil from "../pages/Perfil"
import Carrinho from "../pages/Carrinho"
import Produtos from "../pages/Produtos"

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { index: true, element: <Home /> },
      { path: "perfil", element: <Perfil /> },
      { path: "carrinho", element: <Carrinho /> },
      { path: "produtos", element: <Produtos/>}
    ],
  },
]);

export default router;
