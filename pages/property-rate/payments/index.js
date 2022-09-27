import React from 'react'
import PaymentRoutes from 'src/AppRoutes/PropertyRate/PaymentRoutes'
import PageTitle from '~components/PageTitle'
import PropertyAppLayout from '~layouts/PropertyAppLayout'
import Payment from '~modules/Property/Payment'

const PaymentIndex = () => {
    return (
        <>
        <PageTitle title="Payment" />
        <PropertyAppLayout miniRoutes={PaymentRoutes}>
            <Payment/>
        </PropertyAppLayout>
        </>
    )
}

export default PaymentIndex