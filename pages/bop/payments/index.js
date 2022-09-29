import React from 'react'
import PaymentRoutes from 'src/AppRoutes/BOPRoutes/PaymentRoutes'
import PageTitle from '~components/PageTitle'
import BopAppLayout from '~layouts/BopAppLayout'
import Payment from '~modules/BOP/Payment'

const PaymentIndex = () => {
    return (
        <>
        <PageTitle title="Payment" />
        <BopAppLayout miniRoutes={PaymentRoutes}>
            <Payment/>
        </BopAppLayout>
        </>
    )
}

export default PaymentIndex