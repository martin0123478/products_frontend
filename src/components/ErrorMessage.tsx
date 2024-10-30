import React, { PropsWithChildren } from 'react'

export const ErrorMessage = ({ children }: PropsWithChildren) => {
    return (
        <div className='text-center mt-4 bg-red-600 text-white font-bold p-3 uppercase'>{children}</div>
    )
}
