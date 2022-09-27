import { Box, Flex, HStack, Text, useColorModeValue } from '@chakra-ui/react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import React from 'react'

const SidebarLinks = (props) => {
  //   Chakra color mode
  let location = useRouter();
  let activeColor = useColorModeValue("gray.700", "white");
  let inactiveColor = useColorModeValue(
    "secondaryGray.600",
    "secondaryGray.600"
  );
  let activeIcon = useColorModeValue("brand.500", "white");
  let textColor = useColorModeValue("secondaryGray.500", "white");
  let brandColor = useColorModeValue("brand.500", "brand.400");
  const {asPath} = location;
  const activeRoute = (routeName) => {
    return asPath.split('/')[1].includes(routeName);
  };
const {routes} = props;

const createLinks = (routes) =>(
    routes.map((route,index) =>{
        return (
            <Link key={index} href={route.path} passHref>
              {route.icon ? (
                <Box cursor={'pointer'}>
                  <HStack
                    spacing={
                      activeRoute(route.path.toLowerCase()) ? "22px" : "26px"
                    }
                    py='5px'
                    ps='10px'>
                    <Flex w='100%' alignItems='center' justifyContent='center'>
                      <Box
                        color={
                          activeRoute(route.path.toLowerCase())
                            ? activeIcon
                            : textColor
                        }
                        me='18px'>
                        {route.icon}
                      </Box>
                      <Text
                        me='auto'
                        color={
                          activeRoute(route.path.toLowerCase())
                            ? activeColor
                            : textColor
                        }
                        fontWeight={
                          activeRoute(route.path.toLowerCase())
                            ? "bold"
                            : "normal"
                        }>
                        {route.name}
                      </Text>
                    </Flex>
                    <Box
                      h='36px'
                      w='4px'
                      bg={
                        activeRoute(route.path.toLowerCase())
                          ? brandColor
                          : "transparent"
                      }
                      borderRadius='5px'
                    />
                  </HStack>
                </Box>
              ) : (
                <Box>
                  <HStack
                    spacing={
                      activeRoute(route.path.toLowerCase()) ? "22px" : "26px"
                    }
                    py='5px'
                    ps='10px'>
                    <Text
                      me='auto'
                      color={
                        activeRoute(route.path.toLowerCase())
                          ? activeIcon
                          : inactiveColor
                      }
                      fontWeight={
                        activeRoute(route.path.toLowerCase()) ? "bold" : "normal"
                      }>
                      {route.name}
                    </Text>
                    <Box h='36px' w='4px' bg='brand.400' borderRadius='5px' />
                  </HStack>
                </Box>
              )}
            </Link>
          );
    })
)


  return createLinks(routes);
}

export default SidebarLinks