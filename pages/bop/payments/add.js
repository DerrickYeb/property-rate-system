import React from 'react'
import PaymentRoutes from 'src/AppRoutes/BOPRoutes/PaymentRoutes'
import PageTitle from '~components/PageTitle'
import BopAppLayout from '~layouts/BopAppLayout'
import NewPayment from '~modules/Property/Payment/components/NewPayment'

const add = () => {
  return (
    <>
        <PageTitle title="Payment | New" />
        <BopAppLayout miniRoutes={PaymentRoutes}>
            <NewPayment/>
        </BopAppLayout>
        </>
  )
}

export default add