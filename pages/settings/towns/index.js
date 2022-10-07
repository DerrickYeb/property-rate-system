import React from 'react'
import PageTitle from '~components/PageTitle'
import DashboardLayout from '~layouts/main'
import Town from '~modules/Settings/Towns'

const index = () => {
  return (
    <>
    <PageTitle title='Towns'/>
    <DashboardLayout>
        <Town/>
    </DashboardLayout>
    </>
  )
}

export default index