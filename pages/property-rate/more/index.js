import React from 'react'
import MoreOptionsRoutes from 'src/AppRoutes/PropertyRate/MoreOptionsRoutes'
import PageTitle from '~components/PageTitle'
import PropertyAppLayout from '~layouts/PropertyAppLayout'
import SMS from '~modules/Property/Sms'

const more = () => {
  return (
    <>
    <PageTitle title="SMS" />
    <PropertyAppLayout miniRoutes={MoreOptionsRoutes}>
        <SMS/>
    </PropertyAppLayout>
    </>
  )
}

export default more