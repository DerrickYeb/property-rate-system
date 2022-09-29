import React from 'react'
import PageTitle from '~components/PageTitle'
import BopAppLayout from '~layouts/BopAppLayout'
import NewBop from '~modules/BOP/NewBop'

const add = () => {
  return (
    <>
    <PageTitle title="BOP | New"/>
    <BopAppLayout>
        <NewBop/>
    </BopAppLayout>
    </>
  )
}

export default add