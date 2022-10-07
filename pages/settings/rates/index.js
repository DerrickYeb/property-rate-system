import React from 'react'
import PageTitle from '~components/PageTitle'
import DashboardLayout from '~layouts/main'
import Rate from '~modules/Settings/Rates'

const index = () => {
  return (
    <>
    <PageTitle title='Rates'/>
    <DashboardLayout>
    <Rate/>
    </DashboardLayout>
    </>
  )
}

export default index