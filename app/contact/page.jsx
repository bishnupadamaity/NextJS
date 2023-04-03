
import React from 'react'
import ServerComponent from '../components/servers/ServerComponent'
import Contact from './contact'

const page = () => {
  return (
    <Contact value={"Nice Contact"}>
      <ServerComponent/>
    </Contact>
  )
}

export default page
