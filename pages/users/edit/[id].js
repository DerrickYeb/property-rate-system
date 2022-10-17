import React from 'react'
import PageTitle from '~components/PageTitle'
import DashboardLayout from '~layouts/main'
import EditUser from '~modules/Users/EditCustomer'

const edit = () => {
  return (
    <>
    <PageTitle title='Users - Edit'/>
    <DashboardLayout>
    <EditUser/>
    </DashboardLayout>
    </>
  )
}

export default edit