import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Endereço from './pages/Pedidos/Endereço.tsx'
import Conclusão from './pages/Pedidos/Conclusão.tsx'
import Pagamento from './pages/Pedidos/Pagamento.tsx'
import EstadoPedido from './pages/Pedidos/EstadoPedido.tsx'
import Login from './pages/Funcionarios/Login.tsx'
import MainFunc from './pages/Funcionarios/FuncPage.tsx'
import CartProvider from './context/CartContext.tsx'
import EditFuncPage from './pages/Funcionarios/EditFuncPage.tsx'

const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>
  },
  {
    path: "pedido",
    children:[
      
      {
        path: "endereco",
        element: <Endereço/>
      },
      {
        path: "conclusao",
        element: <CartProvider><Conclusão/></CartProvider>
      },
      {
        path: "pagamento",
        element: <Pagamento/>
      },
      {
        path: "estadoPedido",
        element: <CartProvider><EstadoPedido/></CartProvider>
      }
    ]
  },
  {
    path: "funcionario",
    children:[
      {
        path: "login",
        element: <Login/>
      },
      {
        path: "main",
        element: <MainFunc/>
      },
      {
        path: "edit",
        element: <CartProvider><EditFuncPage /></CartProvider>
      }
    ]
  }
])

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
