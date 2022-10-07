import { Box, Button, FormControl, FormLabel, Input, Select, SimpleGrid, Textarea, useToast } from '@chakra-ui/react'
import React, { useState } from 'react'
import { useForm } from 'react-hook-form'
import { postAxios } from 'src/services/services.auth'
import Card from '~components/Card/card'

const NewBop = () => {

    const { register, handleSubmit } = useForm()
    const toast = useToast();
    const [loadingSet,setIsLoading] = useState(false)

    const submitData = async (data) => {
        setIsLoading(true)
        const bopData = {
            data: {
                business_name: data.owner_name,
                phone_number: data.phone_number,
                amount: data.amount,
                arrears: data.arrears,
                town: data.town,
                land_mark: data.street_name,
                digital_address: data.gps_address,
                business_description: data.business_description,
            }
        }
        await postAxios('bops', bopData).then((response) => {
            toast({
                title: 'BOP Added Successfully',
                description: 'Propert was added successfully',
                position:'top-right',
                status: 'success',
                duration: 3000
            })
            setIsLoading(false)
        }).catch((error) => {
            toast({
                title: 'PBOP Failed',
                description: 'Adding BOP failed',
                position:'top-right',
                status: 'error',
                duration: 3000
            })
            setIsLoading(false)
        });
        console.log(bopData)
    }

    return (
        <Card py={5}>
            <form onSubmit={handleSubmit(submitData)}>
                <SimpleGrid templateColumns={{
                    base: "1fr",
                    lg: "1.23fr 1.23fr",
                }}
                    templateRows={{
                        base: "repeat(3, 1fr)",
                        lg: "1fr 1.34fr",
                    }} gap={5}
                    columnGap={5} rowGap={2}>
                    <FormControl>
                        <FormLabel>Owner&apos;s Name/Business Name</FormLabel>
                        <Input {...register("owner_name")} variant={'main'} borderColor={'brand.500'} />
                    </FormControl>
                    <FormControl>
                        <FormLabel>Telephone Number</FormLabel>
                        <Input {...register("phone_number")} variant={'main'} borderColor={'brand.500'} />
                    </FormControl>
                    <FormControl>
                        <FormLabel>Amount</FormLabel>
                        <Select variant={'main'} {...register("amount")}>
                            <option value="">Select </option>
                            <option value="1">RURAL BANK BRANCH</option>
                            <option value="2">RURAL BANK MAIN</option>
                            <option value="3">FILLING STATION</option>
                            <option value="4">FM STATION</option>
                            <option value="5">HOSPITAL</option>
                            <option value="6">HOTEL</option>
                            <option value="7">HOTEL</option>
                            <option value="8">COMMERCIAL/BIG BANK</option>
                            <option value="9">SAWMILL</option>
                            <option value="10">AGRO CHEMICAL</option>
                            <option value="11">ARTISANS</option>
                            <option value="12">STORES</option>
                            <option value="13">STORE</option>
                            <option value="14">PROVISION STORE</option>
                            <option value="15">PROVISION STORE</option>
                            <option value="16">CHEMICAL SHOP</option>
                            <option value="17">PRINTING/PHOTOCOPY S</option>
                            <option value="18">MOBILE MONEY OPERATION</option>
                            <option value="19">LPG/SERVICE STATION</option>
                            <option value="20">TAILOR SMALL</option>
                            <option value="21">TAILOR SMALL</option>
                            <option value="22">BARBERING SHOP</option>
                            <option value="23">HAIR DRESSING SALON</option>
                            <option value="24">CHOP BAR</option>
                            <option value="25">PROVISION SHOP</option>
                            <option value="26">PROVISION SHOP M</option>
                            <option value="27">BOUTIQUE SMALL</option>
                            <option value="28">POULTRY PRODUCT SMAL</option>
                            <option value="29">PRINTING PRESS - SMA</option>
                            <option value="30">BOOKSHOP - MEDIUM</option>
                            <option value="31">POULTRY FEED - SMALL</option>
                            <option value="32">BUILDING MATERIALS -</option>
                            <option value="33">HOME APPLIANCES - SM</option>
                            <option value="34">CARPENTRY SHOP - SMA</option>
                            <option value="35">CHOP BAR - SMALL</option>
                            <option value="36">BARBERING SHOP - SMA</option>
                            <option value="37">COSMETIC SHOP - SMAL</option>
                            <option value="38">COSMETIC SHOP - SMAL</option>
                            <option value="39">PHONE REPAIRS - SMAL</option>
                            <option value="40">DRINKING SPOT - MED</option>
                            <option value="41">MOBILE MONEY AND PHO</option>
                            <option value="42">SALOON - SMALL</option>
                            <option value="43">HAIR DRESSER - SMALL</option>
                            <option value="44">PROVISION SHOP - LAR</option>
                            <option value="45">BOUTIQUE - MEDIUM</option>
                            <option value="46">DRINKING SPOT - SMA</option>
                            <option value="47">PRINTING PRESS SHOP </option>
                            <option value="48">DRINKING SPOT - LAR</option>
                            <option value="49">MOBILE MONEY - LARGE</option>
                            <option value="50">BLOCK FACTORY</option>
                            <option value="51">BUILDING MATERIALS -</option>
                            <option value="52">BUILDING MATERIALS -</option>
                            <option value="53">PLASTIC SHOP - SMALL</option>
                            <option value="54">YAM SELLER - SMALL</option>
                            <option value="55">SEAMSTRESS - SMALL</option>
                            <option value="56">CEMENT SELLER - LARG</option>
                            <option value="57">BICYCLE REPAIRS PART</option>
                            <option value="58">LOTTO - SMALL</option>
                            <option value="59">TAILOR - SMALL</option>
                            <option value="60">CEMENT SELLER - MEDI</option>
                            <option value="61">DRUG STORE - MEDIUM</option>
                            <option value="62">DRUG STORE - SMALL</option>
                            <option value="63">EGG SHOP - SMALL</option>
                            <option value="64">CHOP BAR AND SPOT - </option>
                            <option value="65">VIDEO CENTER DSTV</option>
                            <option value="66">TAILORING SHOP/ COCO</option>
                            <option value="67">SUPPER MARKET - MEDI</option>
                            <option value="68">RENTAL OF CHAIRS AND</option>
                            <option value="69">FOOD STUFF - SMALL</option>
                            <option value="70">INSTALLATION SHOP - </option>
                            <option value="71">SALE OF HARDWARE - S</option>
                            <option value="72">COSMETIC AND BOUTIQU</option>
                            <option value="73">ACCESSORIES -</option>
                            <option value="74">PHOTOGRAPHY - SMALL</option>
                            <option value="75">BANANA SELLER - SMAL</option>
                            <option value="76">SEWING SHOP - SMALL</option>
                            <option value="77">AGRO CHEMICALS - MED</option>
                            <option value="78">CORN MILL - SMALL</option>
                            <option value="79">FISH SHOP - SMALL</option>
                            <option value="80">ELECTRICAL SHOP - SM</option>
                            <option value="81">RUBBER AND SHIRT STO</option>
                            <option value="82">PLASTIC BOWLS SHOP -</option>
                            <option value="83">SALOON/ PROVISION - </option>
                            <option value="84">COLD STORE - SMALL</option>
                            <option value="85">RESTAURANT - MEDIUM</option>
                            <option value="86">SPARE PARTS - SMALL</option>
                            <option value="87">SPARE PARTS - MEDIUM</option>
                            <option value="88">ANIMALS DRUG</option>
                            <option value="89">DECORATION </option>
                            <option value="90">CORNMILL - MEDIUM</option>
                            <option value="91">CORNMILL - LARGE</option>
                            <option value="92">FISH NET SELLER</option>
                            <option value="93">CERAMIC</option>
                            <option value="94">PAINTS DEALER</option>
                            <option value="95">ARTISAN SMALL</option>
                            <option value="96">MOBILE MONEY AND PHO</option>
                            <option value="97">WOODEN WORKS</option>
                            <option value="98">CHOP BAR</option>
                            <option value="99">ALUMINIUM WORKS</option>
                            <option value="100">SEAMSTRESS</option>
                            <option value="101">BLACKSMITH</option>
                            <option value="102">MOBILE MONEY</option>
                            <option value="103">BEAMS</option>
                            <option value="104">MOTOR OIL SELLER</option>
                            <option value="105">VEHICLE REPAIRER</option>
                            <option value="106">BAKER</option>
                            <option value="107">DISTILLER</option>
                            <option value="108">INFORMATION CENTRE</option>
                            <option value="109">GYM CENTER</option>
                            <option value="110">SCHOOL</option>
                            <option value="111">SCHOOL</option>
                            <option value="112">SCHOOL</option>
                            <option value="113">FETISH PRIEST</option>
                            <option value="114">PORRIDGE SELLER </option>
                            <option value="115">SURFACE TANK FILLING</option>
                            <option value="117">STORE</option>
                            <option value="118">BANK</option>
                            <option value="119">HAIR SELLER</option>
                            <option value="120">ELECTRONIC REPAIRER</option>
                            <option value="121">RUBBER SELLER</option>
                            <option value="122">UTENSILS SELLER</option>
                            <option value="123">HOTEL</option>
                            <option value="124">FOOD STUFFS</option>
                            <option value="125">STORES</option>
                            <option value="126">PROVISION STORE</option>
                            <option value="127">RUBBERS</option>
                            <option value="128">HARDWARE</option>
                            <option value="129">PROVISION SHOP</option>
                            <option value="130">FASHION DESIGNER</option>
                            <option value="131">FITTING SHOP</option>
                            <option value="132">HERBAL SHOP</option>
                            <option value="133">GPRTU</option>
                            <option value="134">BOAT/CANON UNION</option>
                            <option value="135">ONLINE RADIO</option>
                            <option value="136">CREDIT UNION</option>
                            <option value="137">BETTING COMPANY</option>
                            <option value="138">BETTING COMPANY</option>
                            <option value="139">CORNMILL</option>
                            <option value="140">TOURIST SITE</option>
                            <option value="141">DRINKING SPOT</option>
                            <option value="142">SPARE PART SHOP</option>
                            <option value="143">BOUTIQUE</option>
                            <option value="144">BOUTIQUE</option>
                            <option value="145">MOBILE MONEY</option>
                            <option value="146">ELECTRONIC/ELECTRICA</option>
                            <option value="147">COSMETICS</option>
                            <option value="148">FOOD STUFFS</option>
                            <option value="149">FOOD STUFFS</option>
                            <option value="150">POWER DISTRIBUTION S</option>
                            <option value="151">COSMETICS</option>
                            <option value="152">HERBAL SHOP</option>
                            <option value="153">STORES</option>
                            <option value="154">UNION</option>
                            <option value="155">DRINKING SPOT</option>
                            <option value="156">MICRO CREDIT</option>
                            <option value="157">CORNMILL</option>
                            <option value="158">MONEY LENDING SERVICES</option>
                            <option value="159">PHARMACY</option>
                            <option value="160">COSMETICS SMALL</option>
                            <option value="161">STORES</option>
                            <option value="162">COLD STORE MEDIUM</option>
                            <option value="163">COLD STORE LARGE</option>
                            <option value="164">Washing Bay Small</option>
                            <option value="165">Washing Bay Medium</option>
                            <option value="166">Washing Bay Large</option>
                            <option value="167">stores</option>
                            <option value="168">SACHET WATER PRODUCTION</option>
                        </Select>
                    </FormControl>
                    <FormControl>
                        <FormLabel>Arrears</FormLabel>
                        <Input {...register("arrears")} variant={'main'} borderColor={'brand.500'} />
                    </FormControl>
                    <FormControl>
                        <FormLabel>Town</FormLabel>
                        <Select s variant={'main'} {...register("town")}>
                            <option value="1">KWAHU TAFO</option>
                            <option value="2">ABETIFI</option>
                            <option value="3">BOKURUWA</option>
                            <option value="4">ADUAMOA</option>
                            <option value="5">PEPEASE</option>
                            <option value="6">NKWATIA</option>
                        </Select>
                    </FormControl>
                    <FormControl>
                        <FormLabel>Street Name/Landmark</FormLabel>
                        <Input {...register("street_name")} variant={'main'} borderColor={'brand.500'} />
                    </FormControl>
                    <FormControl>
                        <FormLabel>GPS Address</FormLabel>
                        <Input {...register("gps_address")} variant={'main'} borderColor={'brand.500'} />
                    </FormControl>
                    <FormControl>
                        <FormLabel>Business Description</FormLabel>
                        <Textarea {...register("business_description")} borderColor={'brand.500'} />
                    </FormControl>
                </SimpleGrid>
                <Box py={8} display='flex' justifyContent='center'>
                    <Button isLoading={loadingSet} w={'100%'} type="onSubmit" maxW="40%" variant={'brand'}>Submit</Button>
                </Box>
            </form>
        </Card>
    )
}

export default NewBop