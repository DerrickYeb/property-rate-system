import React from 'react'
import PageTitle from '~components/PageTitle'
import DashboardLayout from '~layouts/main'
import Settings from '~modules/Settings/Settings'

const settings = () => {
  return (
    <>
    <PageTitle title="Settings" />
    <DashboardLayout>
    <Settings/>
    </DashboardLayout>
    </>
  )
}

export default settings