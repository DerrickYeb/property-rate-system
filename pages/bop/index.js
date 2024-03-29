import React from 'react'
import PageTitle from '~components/PageTitle'
import BopAppLayout from '~layouts/BopAppLayout'
import BOPIndex from '~modules/BOP'

const bop = () => {
  return (
    <>
    <PageTitle title="BOP" />
    <BopAppLayout>
      <BOPIndex/>
    </BopAppLayout>
    </>
  )
}

export default bop