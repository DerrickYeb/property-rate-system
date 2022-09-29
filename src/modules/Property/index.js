import { Card } from '@mantine/core'
import React, { useEffect, useMemo, useState } from 'react'
import DataTable from 'react-data-table-component'
import { toast } from 'react-hot-toast'
import { getAxios } from 'src/services/services.auth'
import { propertyColumns } from '~components/Table/variables/columnsData'
import FilterComponent from '~components/FilterComponent'

const PropertyIndex = () => {
    const [data, setData] = useState([])
    const [selectedProperty,setSelectedProperty] = useState()

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
                striped
                highlightOnHover
                subHeaderComponent={subHeaderComponent}
                selectableRows
                persistTableHead
                // selectableRowSelected={handleSelectedProperty}
                onRowClicked={handleSelectedProperty}
            />
            {/* </DataTableExtensions> */}
            
        </Card>
    )
}

export default PropertyIndex