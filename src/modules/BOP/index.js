import { Card } from '@mantine/core'
import React, { useEffect, useState } from 'react'
import DataTable from 'react-data-table-component'
import { toast } from 'react-hot-toast'
import { PROPERTY_RATE_ADD_NEW } from 'src/config/routes.config'
import { getAxios } from 'src/services/services.auth'
import TableComponent from '~components/Table/tableComponent'
import { columnsDataCheck, propertyColumns } from '~components/Table/variables/columnsData'


const BOPIndex = () => {
    const [data, setData] = useState([])
    const [selectedProperty,setSelectedProperty] = useState()
    const [isSelected,selected] = useState(false)

    const fetchData = async () => {
        await getAxios('properties').then((response) => {
            setData(response.data);
        })
    }

    const handleSelectedProperty = (userid) => {
        setSelectedProperty(userid.id);
        selected(true)
        toast('Selected property selected',toast.success)
        console.log('Selected property selected',selectedProperty);
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
        <Card>
            <DataTable
                columns={propertyColumns}
                data={data}
                title="BOP"
                fixedHeader
                fixedHeaderScrollHeight='300px'
                pagination
                subHeader
                striped
                highlightOnHover
                // subHeaderComponent={subHeaderComponentMemo}
                selectableRows
                persistTableHead
                // selectableRowSelected={handleSelectedProperty}
                onRowClicked={handleSelectedProperty}
            />
        </Card>
    )
}

export default BOPIndex