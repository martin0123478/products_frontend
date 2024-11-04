import { createBrowserRouter } from 'react-router-dom'
import Layout from './layouts/Layout'
import { Products, loader as productsLoader } from './views/Products'
import { NewProducts, action as newProductAction } from './views/NewProducts'
import { EditProducts, loader as editProductLoader, action as editProductAction } from './views/EditProducts'


export const router = createBrowserRouter([
    {
        path: '/',
        element: <Layout />,
        children: [
            {
                index: true,
                element: <Products />,
                loader: productsLoader
            },
            {
                path: '/productos/nuevo',
                element: <NewProducts />,
                action: newProductAction
            },
            {
                path: '/producto/:id/editar',//route to edit,
                element: <EditProducts />,
                loader: editProductLoader,
                action: editProductAction
            }
        ]
    }
])