import React from 'react'
import MoreOptionsRoutes from 'src/AppRoutes/BOPRoutes/MoreOptionsRoutes'
import PageTitle from '~components/PageTitle'
import BopAppLayout from '~layouts/BopAppLayout'

const registration = () => {
  return (
    <>
    <PageTitle title="Registration" />
    <BopAppLayout miniRoutes={MoreOptionsRoutes}>
    </BopAppLayout>
    </>
  )
}

export default registration