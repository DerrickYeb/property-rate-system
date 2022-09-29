import { Box, Flex, Icon, Image, SimpleGrid, Text, VStack } from '@chakra-ui/react'
import React from 'react'
import { MdPrint } from 'react-icons/md'

const PrintableBill = ({ customerDetails,appName }) => {
    return (
        <Box border={'1px solid'} width={{base:600,lg:800}} height={'60vh'}>
            <Flex justifyContent={'flex-end'} px={4} py={2} onClick={() =>{
                window.print()
            }}>
            <Icon as={MdPrint} size={10} />
            </Flex>
            <SimpleGrid
                templateColumns={{
                    base: '1fr 1fr 1fr',
                    lg: '1.2fr 1.2fr 1.2fr'
                }}
            >
                <Flex px={4} py={2}>
                    <Image src='' height={70} sizes={20} alt='' />
                </Flex>
                <Flex dir='row' py={2}>
                    <VStack>
                        <Text fontWeight={'bold'} fontSize={13}>KWAHU EAST DISTRICT ASSEMBLY</Text>
                        <Text fontWeight={'bold'} fontSize={13}>{appName}</Text>
                        <Text fontWeight={'bold'} fontSize={10}>PAY BEFORE 31ST DECEMBER, 2022 TO AVOID PENALTY</Text>
                        <Text fontSize={11} fontWeight={'bold'} >CONTACT : 0248498183, 0244058135</Text>
                    </VStack>
                </Flex>
                <Flex py={2} px={4} justifyContent={'flex-end'}>
                    <Image src='/images/coatofarms.png' height={70} sizes={20} alt='' />
                </Flex>
                {/* <VStack width={'200px'}> */}

                {/* </VStack> */}
            </SimpleGrid>
            <Flex border={'1px dashed'}>
                <Text px={2} fontWeight={'bold'} fontSize={13}>COMFORT NYARKO ||   ID: ABE163</Text>
            </Flex>
            <Flex dir='row' borderBottom={'1px solid'}>
                <Text fontWeight={'bold'} fontSize={13} px={2}>TOWN</Text>
            </Flex>
            <Flex px={2}>
                <Text py={2} fontSize={13}>ABETIFI</Text>
            </Flex>
            <Flex py={6}>
                <SimpleGrid columns={6}>
                    <Text fontWeight={'bold'} display='flex' justifyContent={'center'} pl={2} pr={3} borderBottom={'1px solid'} fontSize={13}>TELEPHONE</Text>
                    <Text fontWeight={'bold'} display='flex' justifyContent={'center'} pl={{base:2,lg:4}} borderBottom={'1px solid'} fontSize={{base:10,lg:13}}>PROPERTY RATE</Text>
                    <Text fontWeight={'bold'} pl={{base:1,lg:4}} borderBottom={'1px solid'} fontSize={13}>BASIC RATE</Text>
                    <Text fontWeight={'bold'} pl={{base:1,lg:4}} borderBottom={'1px solid'} fontSize={13}>ARREARS</Text>
                    <Text fontWeight={'bold'} pl={{base:1,lg:4}} borderBottom={'1px solid'} fontSize={13}>PAYMENT</Text>
                    <Text fontWeight={'bold'} pl={{base:1,lg:4}} borderBottom={'1px solid'} fontSize={13}>AMOUNT DUE</Text>

                    {/* Data */}
                    <Text fontWeight={'bold'} px={4} display='flex' justifyContent={'center'} fontSize={14}>02490348093</Text>
                    <Text fontWeight={'bold'} display='flex' justifyContent={'center'} px={4} fontSize={14}>2300 GH</Text>
                    <Text fontWeight={'bold'} display='flex' justifyContent={'center'} px={4} fontSize={14}>1</Text>
                    <Text fontWeight={'bold'} display='flex' justifyContent={'center'} px={4} fontSize={14}>400 GH</Text>
                    <Text fontWeight={'bold'} display='flex' justifyContent={'center'} px={4} fontSize={14}>4000 GH</Text>
                    <Text fontWeight={'bold'} display='flex' justifyContent={'center'} px={4} fontSize={14}>20000 GH</Text>
                </SimpleGrid>
            </Flex>
            <Flex px={2}>
                    <Text fontSize={11}>
                        PAY YOUR BILLS PROMPTLY FOR ACCELERATED DEVELOPMENT OF THE DISTRICT. The Assembly is vested with power to collect
                        Property Rates and Business Operating Permit in the Kwahu East District Assembly by the provision of Sections 137,139,140,141,144,145 and 146 of
                        Local Governance Act 2016 (ACT 936) and other relevant Bye Laws. In the event of failure to comply with this Bill, the PROPERTY or BUSINESS
                        OWNER SHALL BE LIABLE TO CIVIL PROSECUTION for the recovery of the outstanding amount plus interest.
                    </Text>
                </Flex>
                <Flex justifyContent={'center'}>
                    <Image src='/images/signature.png' alt='signature' height={10}/>
                    </Flex>
                <Flex px={2} py={2}>
                    <Text fontSize={11} fontWeight="bold" lineHeight="base">
                        NB: Unless otherwise stated, penalty for defaulting any rate is 5x the amount due. Penalty for all defaulting rate payers takes effect from
                        the date stated above. PAYMENTS CAN BE MADE TO OUR REVENUE COLLECTORS OR AT Kwahu East District Assembly,
                        BRING YOUR BILL OR USE YOUR Account No on the bill WHEN MAKING PAYMENT AT Kwahu East District Assembly office.
                        INSIST ON A RECEIPT ANYTIME YOU MAKE PART OR FULL PAYMENT THANK YOU ABE163 AS REFERENCE Printed On
                        31st May, 2022
                    </Text>
                </Flex>
        </Box>
    )
}

export default PrintableBill