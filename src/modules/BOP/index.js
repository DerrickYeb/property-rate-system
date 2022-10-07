import { Card } from '@mantine/core'
import React, { useEffect, useMemo, useState } from 'react'
import DataTable from 'react-data-table-component'
import { toast } from 'react-hot-toast'
import { getAxios } from 'src/services/services.auth'
import { bopColumns, propertyColumns } from '~components/Table/variables/columnsData'
import FilterComponent from '~components/FilterComponent'
import Link from 'next/link'
import { Button, Flex } from '@chakra-ui/react'
import { BOP_ADD_NEW,BOP_BILLS_URL } from 'src/config/routes.config'

const BOPIndex = () => {
  const [data, setData] = useState([])
  const [selectedProperty, setSelectedProperty] = useState()


  const fetchData = async () => {
    await getAxios('bops').then((response) => {
      setData(response.data);
    })
  }

  const handleSelectedProperty = (userid) => {
    setSelectedProperty(userid.id);
    selected(true)
    toast('Selected property selected', toast.success)
    console.log('Selected property selected', selectedProperty);
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

  useEffect(() => {
    fetchData();
  }, [])

  return (
    <div>
      <Link href={BOP_BILLS_URL} passHref>
        <Flex flexDir={'column'} pb={10} justifyContent='flex-start'>
          <Button variant={'brand'} width='100px'>Back</Button>
        </Flex>
      </Link>
      <Link href={BOP_ADD_NEW}>
        <Flex justifyContent={'flex-end'} py={4}>
          <Button variant={'brand'} width={'200px'} fontSize={12}>New BOP</Button>
        </Flex>
      </Link>
      <Card>
        {/* <DataTableExtensions {...tableData}> */}
        <DataTable
          columns={bopColumns}
          data={filteredItems}
          title="BOP"
          fixedHeader
          fixedHeaderScrollHeight='300px'
          pagination
          subHeader
          striped
          highlightOnHover
          // subHeaderComponent={subHeaderComponentMemo}
          // selectableRows
          persistTableHead
          subHeaderComponent={subHeaderComponent}
        />
        {/* </DataTableExtensions> */}

      </Card>
    </div>

  )
}

export default BOPIndex