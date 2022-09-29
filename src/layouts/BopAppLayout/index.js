import { Box, Portal, SimpleGrid, useDisclosure } from '@chakra-ui/react'
import React, { useState } from 'react'
import BopAppRoutes from 'src/AppRoutes/BOPRoutes/BopAppRoutes'
import PropertyAppRoutes from 'src/AppRoutes/PropertyRate/PropertyAppRoutes'
import MainDashboardNavbar from '~components/navbar/MainDashboardNavbar'
import MiniSidebar from '~components/Sidebar/MiniSidebar'
import Sidebar from '~components/Sidebar/Sidebar'
import { SidebarContext } from '~contexts/SidebarContext'

const BopAppLayout = (props) => {
    const {miniRoutes, children, ...rest } = props
    const { onOpen } = useDisclosure();
    const [sidebarToggle, setSidebarToggle] = useState(false)
    const [fixed] = useState(false)
  return (
    <SidebarContext.Provider
    value={{
      sidebarToggle,
      setSidebarToggle
    }}>
    <Sidebar routes={BopAppRoutes} display="none" {...rest} />
    {/* <MiniSidebar routes={PropertyAppRoutes}/> */}
    <Box
      float={'right'}
      minHeight='100vh'
      height='100%'
      overflow={'auto'}
      position='relative'
      maxHeight={'100%'}
      w={{ base: '100%', xl: "calc( 100% - 290px)" }}
      maxW={{ base: '100%', xl: 'calc(100% -290px)' }}
      transition='all 0.33s cubic-bezier(0.685,0.0473,0.346,1)'
      transitionDuration={'.2s,.2s,.35s'}
      transitionProperty='top,bottom,width'
      transitionTimingFunction={'linear,linear,ease'}>
      <Portal>
        <Box>
          <MainDashboardNavbar
            onOpen={onOpen}
            logoText="District Name"
            fixed={fixed}
            appName="BOP App"
            {...rest}

          />
        </Box>
      </Portal>
      <SimpleGrid  templateColumns={miniRoutes ? { base:'1fr',lg:'1fr 6fr'}:{base:'1fr',lg:'1fr'}}
      templateRows={{
        base: "repeat(1, 1fr)",
        lg: "1fr",
      }}>
        {
            miniRoutes ? (<MiniSidebar routes={miniRoutes} />
            ):null
        }
      <Box pt={{ base: "130px", md: "80px", xl: "100px" }} px='20px'>
        {children}
      </Box>
      </SimpleGrid>
    </Box>

  </SidebarContext.Provider>
  )
}

export default BopAppLayout