import { useSession } from 'next-auth/react'
import React from 'react'
import { RiseLoader } from 'react-spinners'
import PageTitle from '~components/PageTitle'
import DashboardLayout from '~layouts/main'
import ApplicationCards from '~modules/ApplicationCards/ApplicationCards'

const dashboard = () => {

  return (
    
    <>
      <PageTitle title='Applications' />
       <DashboardLayout> 
        <ApplicationCards/>
      </DashboardLayout>
    </>
  )
}

export default dashboard;