import { Box, Button, ChakraProvider, FormControl, FormLabel, Image, Input, LinkBox, Text } from '@chakra-ui/react'
// import { Input, PasswordInput, TextInput } from '@mantine/core'
import Link from 'next/link'
import React from 'react'
import { DASHBOARD_URL } from 'src/config/routes.config'
import CoatOfArms from '~assets/coatofarms.png'

const Login = () => {
    return (
        <Box display={'flex'} justifyContent='center' alignContent={'center'}>
           
            <Box borderRadius={'lg'} shadow="2xl" borderTopStyle={{
                shadow: 'lg',
            }} py={10} px={10} w={'30rem'} height={'30rem'} mt={'10rem'} border={'1px solid transparent'}>
                 <Box display='flex' justifyContent={'center'}>
                <Image height={120} src='https://upload.wikimedia.org/wikipedia/commons/thumb/5/59/Coat_of_arms_of_Ghana.svg/1200px-Coat_of_arms_of_Ghana.svg.png' alt='' sizes='50' />

            </Box>
                <Box>

                    <Box display={'flex'} justifyContent="center" py={4} px={4}>
                        <Text fontSize={'2xl'}>Login</Text>
                    </Box>
                    <FormControl py={4}>
                        {/* <FormLabel>Username</FormLabel> */}
                        <Input color='#5162C3' placeholder='Username' _placeholder={{
                            color:'#5162C3'
                        }} variant='filled' bg={'#F0EFFE'} size='lg' />
                    </FormControl>
                    <FormControl py={1}>
                        {/* <FormLabel>Password</FormLabel> */}
                        <Input size={'lg'} bg="#F0EFFE" placeholder='Password' _placeholder={{
                            color:'#5162C3'
                        }} color={'#5162C3'} variant='filled' type={'password'} />
                    </FormControl>
                    <Box display={'flex'} justifyContent={'flex-end'}>
                        <Link href={''} passHref>
                            <Text style={{
                                textDecorationLine: 'underline',
                                textDecorationStyle: 'solid',
                                cursor: 'pointer',
                            }} color={'#5162C3'}>Forgot password?</Text>
                        </Link>
                    </Box>
                    {/* <PasswordInput size='20' label="Password"/> */}
                    <Box py={4} px={4} display={'flex'} justifyContent={'center'}>
                        <Link href={DASHBOARD_URL}>
                            <Button size={'lg'} width='100%' _hover={{
                                backgroundColor: 'none'
                            }} variant={'solid'} bg="#5162C3" color={'white'}>Sign In</Button>
                        </Link>
                    </Box>
                </Box>
            </Box>
            {/* <Box display={'flex'} flexDir='row' justifySelf={'flex-end'}>
        <Box justifyContent='flex-start'>
            <Image px={4} height={150} src='https://upload.wikimedia.org/wikipedia/commons/thumb/5/59/Coat_of_arms_of_Ghana.svg/1200px-Coat_of_arms_of_Ghana.svg.png' alt='' sizes='50' />
        </Box>
        <Box alignContent={'end'} >
            <Image px={4} height={150} src='https://upload.wikimedia.org/wikipedia/commons/thumb/5/59/Coat_of_arms_of_Ghana.svg/1200px-Coat_of_arms_of_Ghana.svg.png' alt='' sizes='50' />
        </Box>
        </Box> */}
        </Box>
    )
}

export default Login