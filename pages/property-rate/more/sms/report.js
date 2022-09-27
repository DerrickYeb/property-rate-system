import React from 'react'
import MoreOptionsRoutes from 'src/AppRoutes/PropertyRate/MoreOptionsRoutes'
import PageTitle from '~components/PageTitle'
import PropertyAppLayout from '~layouts/PropertyAppLayout'

const report = () => {
  return (
    <>
    <PageTitle title="SMS - Report" />
    <PropertyAppLayout miniRoutes={MoreOptionsRoutes}>
        
    </PropertyAppLayout>
    </>
  )
}

export default report