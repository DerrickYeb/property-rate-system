import { Divider, Flex, Image } from '@chakra-ui/react'
import React from 'react'

const SidebarBrand = () => {
  return (
    <Flex align={'center'} direction='column'>
      {/* Logo here */}
      <Image height={120} py={2} src='/images/ked.png' alt='' sizes='50' />
      {/* Seperator here */}
      <Divider/>
    </Flex>
  )
}

export default SidebarBrand