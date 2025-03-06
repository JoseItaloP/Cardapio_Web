import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Confirmação from './pages/Pedidos/Confirmação.tsx'
import Endereço from './pages/Pedidos/Endereço.tsx'
import Conclusão from './pages/Pedidos/Conclusão.tsx'
import Pagamento from './pages/Pedidos/Pagamento.tsx'
import EstadoPedido from './pages/Pedidos/EstadoPedido.tsx'
import Login from './pages/Funcionarios/Login.tsx'
import MainFunc from './pages/Funcionarios/MainFunc.tsx'

const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>
  },
  {
    path: "pedido",
    children:[
      {
        path: "confirmação",
        element: <Confirmação />
      },
      {
        path: "endereco",
        element: <Endereço/>
      },
      {
        path: "conclusao",
        element: <Conclusão/>
      },
      {
        path: "pagamento",
        element: <Pagamento/>
      },
      {
        path: "estadoPedido",
        element: <EstadoPedido/>
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
      }
    ]
  }
])

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
