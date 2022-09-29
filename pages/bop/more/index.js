import React from 'react'
import MoreOptionsRoutes from 'src/AppRoutes/BOPRoutes/MoreOptionsRoutes'
import PageTitle from '~components/PageTitle'
import BopAppLayout from '~layouts/BopAppLayout'
import SMS from '~modules/BOP/Sms'

const more = () => {
  return (
    <>
    <PageTitle title="SMS" />
    <BopAppLayout miniRoutes={MoreOptionsRoutes}>
        <SMS/>
    </BopAppLayout>
    </>
  )
}

export default more