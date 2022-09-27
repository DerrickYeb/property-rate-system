import { Divider, Flex, Image } from '@chakra-ui/react'
import React from 'react'

const SidebarBrand = () => {
  return (
    <Flex align={'center'} direction='column'>
      {/* Logo here */}
      <Image height={120} py={2} src='https://upload.wikimedia.org/wikipedia/commons/thumb/5/59/Coat_of_arms_of_Ghana.svg/1200px-Coat_of_arms_of_Ghana.svg.png' alt='' sizes='50' />
      {/* Seperator here */}
      <Divider/>
    </Flex>
  )
}

export default SidebarBrand