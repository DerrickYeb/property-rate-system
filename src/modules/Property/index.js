import { Card } from '@mantine/core'
import React, { useEffect, useMemo, useState } from 'react'
import DataTable from 'react-data-table-component'
import { toast } from 'react-hot-toast'
import { getAxios } from 'src/services/services.auth'
import { propertyColumns } from '~components/Table/variables/columnsData'
import FilterComponent from '~components/FilterComponent'
import Link from 'next/link'
import { Button, Flex, Menu, MenuItem } from '@chakra-ui/react'
import { PROPERTY_RATE_ADD_NEW } from 'src/config/routes.config'
import Tablemenu from '~components/MenuComponent/Tablemenu'

const PropertyIndex = () => {
    const [data, setData] = useState([])
    const [selectedProperty, setSelectedProperty] = useState()

    const fetchData = async () => {
        await getAxios('properties').then((response) => {
            setData(response.data);
        })
    }
    const [filterText, setFilterText] = React.useState("");
    const [resetPaginationToggle, setResetPaginationToggle] = React.useState(
        false
    );

    const filteredItems = data.filter(
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

    const handleSelectedProperty = (userid) => {
        setSelectedProperty(userid);
        // selected(true)
        toast('Selected property selected', toast.success)
        console.log('Selected property selected', selectedProperty);
        return(
            <Menu key={userid.id}>
                <MenuItem>vIEW bILL
                </MenuItem>
            </Menu>
        )
    }



    useEffect(() => {
        fetchData();
    }, [])

    return (
        // <TableComponent
        // tableName="Property Rates"
        // buttonName="Add Property Rate"
        // eventUrl={PROPERTY_RATE_ADD_NEW}
        //  columnsData={propertyColumns} tableData={data} />
        <div>
            <Link href={PROPERTY_RATE_ADD_NEW} passHref>
                <Flex flexDir={'column'} pb={10} justifyContent='flex-start'>
                    <Button variant={'brand'} width='100px'>Back</Button>
                </Flex>
            </Link>
            <Link href={PROPERTY_RATE_ADD_NEW}>
                    <Flex justifyContent={'flex-end'} py={4}>
                        <Button variant={'brand'} width={'200px'} fontSize={12}>New Property</Button>
                    </Flex>
                </Link>
            <Card>
                {/* <DataTableExtensions {...tableData}> */}
                <DataTable
                    columns={propertyColumns}
                    data={filteredItems}
                    title="Property Rate"
                    fixedHeader
                    fixedHeaderScrollHeight='300px'
                    pagination
                    subHeader
                    noHeader
                    contextComponent={Tablemenu}
                    striped
                    highlightOnHover
                    subHeaderComponent={subHeaderComponent}
                    selectableRows
                    persistTableHead
                    onRowClicked={handleSelectedProperty}
                    
                />
                {/* </DataTableExtensions> */}

            </Card>
        </div>
    )
}

export default PropertyIndex