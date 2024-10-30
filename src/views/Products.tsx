import { Link } from "react-router-dom"



export const Products = () => {
    return (
        <>
            <div className="flex justify-between">
                <h2 className="text-4xl font-black text-slate-500">Productos</h2>
                <Link className="rounded-md bg-indigo-600 p-3 text-sm text-white shadow-sm hover:bg-indigo-600" to='/productos/nuevo'>
                    Agregar Producto</Link>
            </div>
        </>
    )
}
