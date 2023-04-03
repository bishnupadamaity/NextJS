
import React from 'react'

const page = ({children,value}) => {
  return (
    <div>
      <h2>{value}</h2>
      {children}
    </div>
  )
}

export default page