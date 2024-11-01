import { Link, useLoaderData } from "react-router-dom"
import { getProducts } from "../services/service"
import { ProductDetail } from "../components/ProductDetail"
import { Product } from "../types"

export async function loader() {
    const products = await getProducts()

    return products
}


export const Products = () => {
    const data = useLoaderData() as Product[]
    console.log(data)
    return (
        <>
            <div className="flex justify-between">
                <h2 className="text-4xl font-black text-slate-500">Productos</h2>
                <Link className="rounded-md bg-indigo-600 p-3 text-sm text-white shadow-sm hover:bg-indigo-600" to='/productos/nuevo'>
                    Agregar Producto</Link>
            </div>

            <div className="p-2">
                <table className="w-full mt-5 table-auto">
                    <thead className="bg-slate-800 text-white">
                        <tr>
                            <th className="p-2">Producto</th>
                            <th className="p-2">Precio</th>
                            <th className="p-2">Disponibilidad</th>
                            <th className="p-2">Acciones</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            data.map(product => (
                                <ProductDetail key={product.name} product={product} />
                            ))
                        }
                    </tbody>
                </table>
            </div>
        </>
    )
}
