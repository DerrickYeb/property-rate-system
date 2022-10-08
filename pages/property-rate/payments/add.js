import React from 'react'
import PaymentRoutes from 'src/AppRoutes/PropertyRate/PaymentRoutes'
import PageTitle from '~components/PageTitle'
import PropertyAppLayout from '~layouts/PropertyAppLayout'
import NewPayment from '~modules/Property/Payment/components/NewPayment'

const add = () => {
  return (
    <>
        <PageTitle title="Payment - Add" />
        <PropertyAppLayout miniRoutes={PaymentRoutes}>
            <NewPayment/>
        </PropertyAppLayout>
        </>
  )
}

export default add