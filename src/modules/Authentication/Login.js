import { Box, Button, ChakraProvider, FormControl, FormErrorMessage, FormLabel, Image, Input, LinkBox, Text, useToast } from '@chakra-ui/react'
// import { Input, PasswordInput, TextInput } from '@mantine/core'
import Link from 'next/link'
import { useRouter } from 'next/router'
import React from 'react'
import { useForm } from 'react-hook-form'
import { DASHBOARD_URL } from 'src/config/routes.config'
import { LoginApi } from 'src/services/services.auth'
import CoatOfArms from '~assets/coatofarms.png'
import * as Yup from 'yup'
import { yupResolver } from '@hookform/resolvers/yup';
import { toast } from 'react-hot-toast'

const Login = () => {
    const router = useRouter();
    const validationSchema = Yup.object().shape({
        identifier: Yup.string().required('Username is required'),
        password: Yup.string().required('Password is required')
    });
    const formOptions = { resolver: yupResolver(validationSchema) };

    const { register, handleSubmit, setError,formState } = useForm({ formOptions })
    const toast = useToast();
    const { errors } = formState;

    const Login = async ({ identifier, password }) => {
        return LoginApi(identifier, password).then((response) => {
            localStorage.setItem('token', response.jwt)
            // const returnurl = router.query.returnUrl || DASHBOARD_URL;
            toast({
                title:'Login success',
                description:'Login successfully',
                position: 'top',
                duration: 3000,
                status: 'success',
            })
            router.push(DASHBOARD_URL);
        }).catch((err) => {
            toast({
                title:'Login Error',
                description:'Username or password is incorrect',
                position: 'top',
                duration: 3000,
                status: 'error',
            })
            console.log(err.response)
            setError('apiError',{message:err.response.data.error.message})
        });

    }
    return (
        <Box display={'flex'} justifyContent='center' alignContent={'center'}>

            <Box borderRadius={'lg'} shadow="2xl" borderTopStyle={{
                shadow: 'lg',
            }} py={10} px={10} w={'30rem'} height={'30rem'} mt={'10rem'} border={'1px solid transparent'}>
                <Box display='flex' justifyContent={'center'}>
                    <Image height={120} src='/images/ked.jpeg' alt='' sizes='50' />

                </Box>
                <Box>

                    <Box display={'flex'} justifyContent="center" py={4} px={4}>
                        <Text fontSize={'2xl'}>Login</Text>
                    </Box>
                    <form onSubmit={handleSubmit(Login)}>
                        <FormControl py={4}>
                            {/* <FormLabel>Username</FormLabel> */}
                            <Input color='#5162C3' {...register("identifier")} placeholder='Username' _placeholder={{
                                color: '#5162C3'
                            }} variant='filled' bg={'#F0EFFE'} size='lg' />
                            <FormErrorMessage>{errors.identifier?.message}</FormErrorMessage>
                        </FormControl>
                        <FormControl py={1}>
                            {/* <FormLabel>Password</FormLabel> */}
                            <Input size={'lg'} bg="#F0EFFE" {...register("password")} placeholder='Password' _placeholder={{
                                color: '#5162C3'
                            }} color={'#5162C3'} variant='filled' type={'password'} />
                            <FormErrorMessage>{errors.password?.message}</FormErrorMessage>
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
                            <Button size={'lg'} disabled={formState.isSubmitting} isLoading={formState.isSubmitting} type="onSubmit" width='100%' _hover={{
                                backgroundColor: 'none'
                            }} variant={'solid'} bg="#5162C3" color={'white'}>Sign In</Button>
                            {
                                errors.apiError && <FormErrorMessage>{errors.apiError?.message}</FormErrorMessage>
                            }
                            {/* </Link> */}
                        </Box>
                    </form>
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