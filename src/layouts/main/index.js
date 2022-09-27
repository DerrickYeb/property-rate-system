import { Box, Portal, useDisclosure } from '@chakra-ui/react'
import React, { useState } from 'react'
import Sidebar from '~components/Sidebar/Sidebar'
import { SidebarContext } from '~contexts/SidebarContext'
import routes from 'src/routes'
import NavbarHeaderLinks from '~components/navbar/NavbarLinks'
import MainDashboardNavbar from '~components/navbar/MainDashboardNavbar'

const DashboardLayout = (props) => {
  const { children, ...rest } = props
  const { onOpen } = useDisclosure();
  const [sidebarToggle, setSidebarToggle] = useState(false)
  const [fixed] = useState(false)
  return (
    <SidebarContext.Provider
      value={{
        sidebarToggle,
        setSidebarToggle
      }}>
      <Sidebar routes={routes} display="none" {...rest} />
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
              appName='Apps'
              fixed={fixed}
              {...rest}

            />
          </Box>
        </Portal>
        <Box pt={{ base: "130px", md: "80px", xl: "100px" }} px='20px'>
          {children}
        </Box>
      </Box>

    </SidebarContext.Provider>
  )
}

export default DashboardLayout