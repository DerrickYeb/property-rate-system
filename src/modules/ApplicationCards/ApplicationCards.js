import { HStack, Text, theme } from '@chakra-ui/react'
import { Box,Anchor, Card, createStyles, Group, SimpleGrid, UnstyledButton } from '@mantine/core'
import Link from 'next/link'
import React from 'react'
import { FaBalanceScale, FaBuilding } from 'react-icons/fa'
import { BOP_URL, PROPERTY_APP_URL } from 'src/config/routes.config'
// import Card from '~components/Card/card'

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

const useStyles = createStyles((theme) => ({
    card: {
        backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[6] : theme.colors.gray[0],
    },

    title: {
        fontFamily: `Greycliff CF, ${theme.fontFamily}`,
        fontWeight: 700,
    },

    item: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        textAlign: 'center',
        borderRadius: theme.radius.md,
        height: 90,
        backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[7] : theme.white,
        transition: 'box-shadow 150ms ease, transform 100ms ease',

        '&:hover': {
            boxShadow: `${theme.shadows.md} !important`,
            transform: 'scale(1.05)',
        },
    },
}));

const ApplicationCards = () => {
    const { classes, theme } = useStyles();

    const items = mockdata.map((item) => (
      <Link key={item.id} href={item.url}>
        <UnstyledButton key={item.title} className={classes.item}>
            <item.icon color={theme.colors[item.color][6]} size={32} />
            <Text size="xs" mt={7}>
                {item.title}
            </Text>
        </UnstyledButton>
      </Link>
    ));

    // const items = mockdata.map((item) => (
    //    <Link key={item.url} href={item.url} passHref>
    //     <Card variant={'unstyled'}  style={{
    //         display: 'flex',
    //         flexDirection: 'column',
    //         alignItems: 'center',
    //         justifyContent: 'center',
    //         textAlign: 'center',
    //         borderRadius: 10,
    //         height: 120,
    //         cursor: 'pointer',
    //         transition: 'box-shadow 150ms ease, transform 100ms ease',

    //         '&:hover': {
    //             boxShadow: `${theme.shadows['2xl']} !important`,
    //             transform: 'scale(1.05)',
    //         },
    //     }}>
    //         <item.icon color={item.color} size={32} />
    //         <Text size='sm' mt={2} fontSize='13'>
    //             {item.title}
    //         </Text>
    //     </Card >
    //    </Link>
    // ))

    return (
        // <Box
        //     borderRadius={'16px'}>
        //     <HStack px={4} py={4}>
        //         <Text>Apps</Text>
        //     </HStack>
        //     <SimpleGrid templateColumns={{
        //         base: "1fr",
        //         lg: "1.34fr 1fr 1.62fr",
        //     }}
        //         templateRows={{
        //             base: "repeat(3, 1fr)",
        //             lg: "1fr",
        //         }}
        //         columns={3} mt="md" gap={{ base: "20px", md: "20px", xl: "120px" }}>
        //         {items}
        //     </SimpleGrid>
        // </Box>
       <Box>
         <Card style={{
            width:600
         }} withBorder radius="md" className={classes.card}>
            <Group position="apart">
                <Text className={classes.title}>Apps</Text>
                <Anchor size="xs" color="dimmed" sx={{ lineHeight: 1 }}>
                    services
                </Anchor>
            </Group>
            <SimpleGrid cols={3} mt="md">
                {items}
            </SimpleGrid>
        </Card>
       </Box>

    )
}

export default ApplicationCards