import React from 'react'
import PageTitle from '~components/PageTitle'
import DashboardLayout from '~layouts/main'
import Rate from '~modules/Settings/Rates'
import AddTown from '~modules/Settings/Towns/AddTown'

const add = () => {
  return (
    <>
    <PageTitle title='Towns - Add'/>
    <DashboardLayout>
    <AddTown/>
    </DashboardLayout>
    </>
  )
}

export default add