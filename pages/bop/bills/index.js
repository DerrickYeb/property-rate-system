import React from 'react'
import PageTitle from '~components/PageTitle'
import BopAppLayout from '~layouts/BopAppLayout'
import Bills from '~modules/BOP/Bills'

const BillsIndex = () => {
  return (
    <>
    <PageTitle title="BOP App - Bills"/>
    <BopAppLayout>
      <Bills/>
    </BopAppLayout>
    </>
  )
}

export default BillsIndex