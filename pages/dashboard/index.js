import { Box, Text } from '@chakra-ui/react'
import React from 'react'
import PageTitle from '~components/PageTitle'
import DashboardLayout from '~layouts/main'
import ApplicationCards from '~modules/ApplicationCards/ApplicationCards'
import AddUser from '~modules/Users/Add'

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

export default dashboard