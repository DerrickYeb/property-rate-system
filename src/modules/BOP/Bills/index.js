import React from 'react'
import PrintableBill from '~components/BillCardComponent/PrintableBill'
import Card from '~components/Card/card'

const customerDetails = {
  propertyId:"AB00923",
  name:"Yaw Aafrifa",
  town:"Abetifi",
  property:{
    propertyRate:200,
    telephone:'0434389343',
    basicRate:1,
    Arrears:100,
    Payment:3000,
    AmountDue:30000
  }
}

const Bills = () => {
  return (
    <Card py={20} px={20} borderRadius={0}>
      {/* <PrintableBill customerDetails={customerDetails} appName="BUSINESS OPERATING PERMIT"/> */}
    </Card>
  )
}

export default Bills