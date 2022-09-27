import { Box, Flex, Stack } from '@chakra-ui/react'
import React from 'react'
import SidebarBrand from './SidebarBrand'
import SidebarLinks from './SidebarLinks'

const SidebarContent = ({routes}) => {
  return (
   <Flex  direction="column" h={'100%'} pt={'25px'} borderRadius={'30px'}>
    <SidebarBrand/>
    <Stack direction={'column'} mb={'auto'} mt={'8px'}>
        <Box ps={'20px'} pe={{md: "16px", "2xl": "1px" }}>
          <SidebarLinks routes={routes} />
        </Box>
    </Stack>
    {/* <Box
    pe={{md:'16px','2xl':'0px'}}
    ps="20px"
    mt="60px"
    mb="40px"
    borderRadius={'30px'}>
    </Box> */}
   </Flex>
  )
}

export default SidebarContent