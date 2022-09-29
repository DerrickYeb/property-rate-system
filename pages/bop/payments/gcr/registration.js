import React from 'react'
import PaymentRoutes from 'src/AppRoutes/PropertyRate/PaymentRoutes'
import PageTitle from '~components/PageTitle'
import PropertyAppLayout from '~layouts/PropertyAppLayout'
import GCRRegistration from '~modules/Property/Payment/components/GCRRegistration'

const registration = () => {
  return (
    <>
    <PageTitle title="Page Title" />
    <PropertyAppLayout miniRoutes={PaymentRoutes}>
      <GCRRegistration/>
    </PropertyAppLayout>
    </>
  )
}

export default registration