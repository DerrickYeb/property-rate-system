import { Button, Flex } from '@chakra-ui/react'
import Link from 'next/link'
import React, { useEffect, useMemo, useState } from 'react'
import DataTable from 'react-data-table-component'
import { PROPERTY_RATE_ADD_NEW, SETTINGS_ADD_NEW_RATE } from 'src/config/routes.config'
import { getAxios } from 'src/services/services.auth'
import Card from '~components/Card/card'
import FilterComponent from '~components/FilterComponent'
import { propertyColumns, ratesColumns } from '~components/Table/variables/columnsData'

const Rate = () => {
    const [data,setData] = useState([])
    const fetchData = async () => {
        await getAxios('rates').then((response) => {
            setData(response.data);
        })
    }
    const [filterText, setFilterText] = React.useState("");
    const [resetPaginationToggle, setResetPaginationToggle] = React.useState(
        false
    );

    const filteredItems = data?.filter(
        item =>
            JSON.stringify(item)
                .toLowerCase()
                .indexOf(filterText.toLowerCase()) !== -1
    );

    const subHeaderComponent = useMemo(() => {
        const handleClear = () => {
            if (filterText) {
                setResetPaginationToggle(!resetPaginationToggle);
                setFilterText("");
            }
        };

        return (
            <FilterComponent
                onFilter={e => setFilterText(e.target.value)}
                onClear={handleClear}
                filterText={filterText}
            />
        );
    }, [filterText, resetPaginationToggle]);


    useEffect(() => {
        fetchData()
    })


    return (
        <>
            {/* <Link href={PROPERTY_RATE_ADD_NEW} passHref>
                <Flex flexDir={'column'} pb={10} justifyContent='flex-start'>
                    <Button variant={'brand'} width='100px'>Back</Button>
                </Flex>
            </Link> */}
            <Link href={SETTINGS_ADD_NEW_RATE}>
                <Flex justifyContent={'flex-end'} py={4}>
                    <Button variant={'brand'} width={'200px'} fontSize={12}>New Rate</Button>
                </Flex>
            </Link>
            <Card>
            <DataTable
                    columns={ratesColumns}
                    data={filteredItems}
                    title="All Rates"
                    fixedHeader
                    fixedHeaderScrollHeight='300px'
                    pagination
                    subHeader
                    noHeader
                    // contextComponent={Tablemenu}
                    striped
                    highlightOnHover
                    subHeaderComponent={subHeaderComponent}
                    selectableRows
                    persistTableHead                    
                />
            </Card>
        </>
    )
}

export default Rate