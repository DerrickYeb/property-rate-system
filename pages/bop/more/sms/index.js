import React from 'react'
import MoreOptionsRoutes from 'src/AppRoutes/BOPRoutes/MoreOptionsRoutes'
import PageTitle from '~components/PageTitle'
import BopAppLayout from '~layouts/BopAppLayout'
import SMS from '~modules/Property/Sms'

const sms = () => {
  return (
    <>
    <PageTitle title="SMS" />
    <BopAppLayout miniRoutes={MoreOptionsRoutes}>
        <SMS/>
    </BopAppLayout>
    </>
  )
}

export default sms