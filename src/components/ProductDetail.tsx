import { ActionFunctionArgs, Form, redirect, useNavigate } from 'react-router-dom'
import { Product } from "../types"
import { formatCurrency } from "../utils"

type productDetailProps = {
    product: Product

}

export async function action({ params }: ActionFunctionArgs) {
    console.log(params.id)
    return redirect('/')

}
export const ProductDetail = ({ product }: productDetailProps) => {
    const navigate = useNavigate()
    const isAvailable = product.availability
    return (
        <tr className="border-b ">
            <td className="p-3 text-lg text-gray-800">
                {product.name}
            </td>
            <td className="p-3 text-lg text-gray-800">
                {formatCurrency(product.price)}
            </td>
            <td className="p-3 text-lg text-gray-800">
                {isAvailable ? 'Disponible' : 'No Disponible'}
            </td>
            <td className="p-3 text-lg text-gray-800 ">
                <div className="flex gap-2 items-center">
                    <button
                        onClick={() => navigate(`/producto/${product.id}/editar`)}
                        className='bg-indigo-600 text-white rounded-lg w-full p-2 uppercase font-bold text-xs text-center '>Editar</button>
                    <Form className='w-full'
                        method='POST'
                        action={`/producto/${product.id}/eliminar`}>
                        <input type='submit' value='Eliminar'
                            className='bg-red-600 text-white rounded-lg w-full p-2 uppercase font-bold text-xs text-center ' />

                    </Form>


                </div>
            </td>
        </tr>
    )
}
