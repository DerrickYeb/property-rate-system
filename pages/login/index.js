import React from 'react'
import PageTitle from '~components/PageTitle'
import Login from '~modules/Authentication/Login'

const login = () => {
  return (
    <>
    <PageTitle title="Login"/>
    <Login/>
    </>
  )
}

export default login