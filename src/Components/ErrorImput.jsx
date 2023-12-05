import React from 'react'

const ErrorImput = ({children}) => {
  return (
    <div className=' mb-3 px-2 py-2 text-lg font-bold text-white rounded-xl bg-red-500'>
       {children}
    </div>
  )
}

export default ErrorImput