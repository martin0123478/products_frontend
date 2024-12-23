import { createBrowserRouter } from 'react-router-dom'
import Layout from './layouts/Layout'
import { Products, loader as productsLoader, action as updateAvailiabililty } from './views/Products'
import { NewProducts, action as newProductAction } from './views/NewProducts'
import { EditProducts, loader as editProductLoader, action as editProductAction } from './views/EditProducts'
import { action as deletActionProducts } from './components/ProductDetail'


export const router = createBrowserRouter([
    {
        path: '/',
        element: <Layout />,
        children: [
            {
                index: true,
                element: <Products />,
                loader: productsLoader,
                action: updateAvailiabililty
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
            },
            {
                path: '/producto/:id/eliminar',
                action: deletActionProducts
            }
        ]
    }
])