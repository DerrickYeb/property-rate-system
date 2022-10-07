import React from 'react'
import PageTitle from '~components/PageTitle'
import DashboardLayout from '~layouts/main'
import NewRate from '~modules/Settings/Rates/NewRate'

const add = () => {
  return (
    <>
    <PageTitle title='Settings - Rate'/>
    <DashboardLayout>
    <NewRate/>
    </DashboardLayout>
    </>
  )
}

export default add