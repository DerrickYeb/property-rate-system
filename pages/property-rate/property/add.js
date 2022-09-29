import React from 'react'
import PageTitle from '~components/PageTitle'
import PropertyAppLayout from '~layouts/PropertyAppLayout'
import NewPropertyRate from '~modules/Property/NewRegistration/NewPropertyRate'

const add = () => {
  return (
    <>
    <PageTitle title="Property Rate | New"/>
    <PropertyAppLayout>
        <NewPropertyRate/>
    </PropertyAppLayout>
    </>
  )
}

export default add