import React from 'react'
import PageTitle from '~components/PageTitle'
import PropertyAppLayout from '~layouts/PropertyAppLayout'
import PropertyIndex from '~modules/Property'

const data = []
const PropertyRateIndex = () => {
  return (
    <>
    <PageTitle title='Property Rate App'/>
    <PropertyAppLayout>
    <PropertyIndex/>
     </PropertyAppLayout>
     </>
  )
}

export default PropertyRateIndex