import { Box, Button, HStack, SimpleGrid, Stack, Text, theme, useStyleConfig, useStyles } from '@chakra-ui/react'
import { Anchor } from '@mantine/core'
import Link from 'next/link'
import React from 'react'
import { FaBalanceScale, FaBuilding } from 'react-icons/fa'
import { IoBuildOutline } from 'react-icons/io5'
import { MdOutlineTaxiAlert } from 'react-icons/md'
import { BOP_URL, PROPERTY_APP_URL } from 'src/config/routes.config'
import Card from '~components/Card/card'
import { CardComponent } from '~theme/additions/Card'

const mockdata = [
    {
        title: 'Property Rate App',
        icon: FaBuilding,
        url: PROPERTY_APP_URL,
        color: 'violet'
    }, {
        title: 'Business Operating Permit',
        icon: FaBalanceScale,
        url: BOP_URL,
        color: 'pink'
    }
]

// display: 'flex',
//     flexDirection: 'column',
//     alignItems: 'center',
//     justifyContent: 'center',
//     textAlign: 'center',
//     borderRadius: theme.radius.md,
//     height: 90,
//     backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[7] : theme.white,
//     transition: 'box-shadow 150ms ease, transform 100ms ease',

//     '&:hover': {
//       boxShadow: `${theme.shadows.md} !important`,
//       transform: 'scale(1.05)',
//     },
//   },

const ApplicationCards = () => {

    const items = mockdata.map((item) => (
       <Link key={item.url} href={item.url} passHref>
        <Card variant={'unstyled'}  style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            textAlign: 'center',
            borderRadius: 10,
            height: 120,
            cursor: 'pointer',
            transition: 'box-shadow 150ms ease, transform 100ms ease',

            '&:hover': {
                boxShadow: `${theme.shadows['2xl']} !important`,
                transform: 'scale(1.05)',
            },
        }}>
            <item.icon color={item.color} size={32} />
            <Text size='sm' mt={2} fontSize='13'>
                {item.title}
            </Text>
        </Card >
       </Link>
    ))

    return (
        <Box
            borderRadius={'16px'}>
            <HStack px={4} py={4}>
                <Text>Apps</Text>
            </HStack>
            <SimpleGrid templateColumns={{
                base: "1fr",
                lg: "1.34fr 1fr 1.62fr",
            }}
                templateRows={{
                    base: "repeat(3, 1fr)",
                    lg: "1fr",
                }}
                columns={3} mt="md" gap={{ base: "20px", md: "20px", xl: "120px" }}>
                {items}
            </SimpleGrid>
        </Box>

    )
}

export default ApplicationCards