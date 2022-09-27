import React from 'react'
import MoreOptionsRoutes from 'src/AppRoutes/PropertyRate/MoreOptionsRoutes'
import PageTitle from '~components/PageTitle'
import PropertyAppLayout from '~layouts/PropertyAppLayout'

const registration = () => {
  return (
    <>
    <PageTitle title="Registration" />
    <PropertyAppLayout miniRoutes={MoreOptionsRoutes}>
    </PropertyAppLayout>
    </>
  )
}

export default registration