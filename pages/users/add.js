import React from 'react'
import PageTitle from '~components/PageTitle'
import DashboardLayout from '~layouts/main'
import AddUser from '~modules/Users/Add'

const add = () => {
  return (
    <>
    <PageTitle title='Users - Add New'/>
    <DashboardLayout>
    <AddUser/>
    </DashboardLayout>
    </>
  )
}
export default add
