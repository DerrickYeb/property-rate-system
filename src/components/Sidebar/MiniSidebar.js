import { Box, Stack, useColorModeValue } from '@chakra-ui/react'
import React from 'react'
import SidebarLinks from './components/SidebarLinks';

const MiniSidebar = (props) => {
    const {routes} = props;
    let variantChange = "0.2s linear";
    let shadow = useColorModeValue(
        "14px 17px 40px 4px rgba(112, 144, 176, 0.08)",
        "unset"
    );
    // Chakra Color Mode
    let sidebarBg = useColorModeValue("white", "navy.800");
    return (
        // <Card mt={40} px={4}>
            <Box
            mt={40}
            display='flex'
            justifyContent={'center'}
                bg={sidebarBg}
                transition={variantChange}
                w='300px'
                maxH={'300px'}
                overflowX={'hidden'}
                boxShadow={shadow}>
                <Stack direction={'column'} mb={'auto'} mt={'8px'}>
                    <Box ps={'4px'} pe={{ md: "16px", "2xl": "1px" }}>
                        <SidebarLinks routes={routes} />
                    </Box>
                </Stack>
            </Box>
        // </Card>
    )
}

export default MiniSidebar