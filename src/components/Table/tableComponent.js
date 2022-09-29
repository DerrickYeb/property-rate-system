import { Button, Checkbox, Flex, Icon, Progress, Select, Table, Tbody, Td, Text, Th, Thead, Tr, useColorModeValue } from '@chakra-ui/react';
import React, { useMemo } from 'react'
import { MdCancel, MdCheckCircle, MdOutlineError } from 'react-icons/md';
import { useGlobalFilter, usePagination, useSortBy, useTable } from 'react-table'
import Card from '~components/Card/card';
import Link from 'next/link';

const townsdata =[
    {
        value:"accra",
        name:"Accra"
    },
    {
        value:"accra",
        name:"Accra"
    },
    {
        value:"accra",
        name:"Accra"
    },
    {
        value:"accra",
        name:"Accra"
    }
]

function TableComponent(props) {
    const { columnsData, tableData,eventUrl,tableName,buttonName } = props
    const columns = useMemo(() => columnsData, [columnsData]);
    const data = useMemo(() => tableData, [tableData]);
    console.log(tableData);
    const tableInstance = useTable(
        {
          columns,
          data,
        },
        useGlobalFilter,
        useSortBy,
        usePagination
      );
    
      const {
        getTableProps,
        getTableBodyProps,
        headerGroups,
        page,
        prepareRow,
        initialState,
      } = tableInstance;
    initialState.pageSize = 11;

    const textColor = useColorModeValue("secondaryGray.900", "white");
    const borderColor = useColorModeValue("gray.200", "whiteAlpha.100");

    return (
        <Card
            direction='column'
            w='100%'
            px='0px'
            overflowX={{ sm: "scroll", lg: "hidden" }}>
            <Flex px='25px' justify='space-between' mb='20px' align='center'>
                <Text
                    color={textColor}
                    fontSize='22px'
                    fontWeight='700'
                    lineHeight='100%'>
                    {tableName}
                </Text>
                {/* <Menu /> */}
                {/* <Select
                size={'lg'}
                width="180px"    
                 placeholder="Select location"
                 >
                    {
                        townsdata ? townsdata.map((iten)=>(
                            <option value={iten.value} key={iten.value}>{iten.name}</option>
                        )):null
                    }
                    </Select> */}

                {
                    eventUrl ? (<Link href={eventUrl} passHref>
                        <Button variant={'brand'}  width={'200px'} fontSize={12}>{buttonName}</Button>
                        </Link>
                        ):null
                }
            </Flex>
            <Table {...getTableProps()}  variant='striped' color='gray.500' mb='24px'>
                <Thead>
                    {headerGroups.map((headerGroup, index) => (
                        <Tr {...headerGroup.getHeaderGroupProps()} key={index}>
                            {headerGroup.headers.map((column, index) => (
                                <Th
                                    {...column.getHeaderProps(column.getSortByToggleProps())}
                                    pe='10px'
                                    key={index}
                                    borderColor={borderColor}>
                                    <Flex
                                        justify='space-between'
                                        align='center'
                                        fontSize={{ sm: "10px", lg: "12px" }}
                                        color='gray.400'>
                                        {column.render("Header")}
                                    </Flex>
                                </Th>
                            ))}
                        </Tr>
                    ))}
                </Thead>
                <Tbody {...getTableBodyProps()}>
                    {page.map((row, index) => {
                        prepareRow(row);
                        return (
                            <Tr {...row.getRowProps()} key={index}>
                                {row.cells.map((cell, index) => {
                                    let data = ''
                                    if (cell.column.Header === "OWNER NAME" || cell.column.Header === "NAME") {
                                        data = (
                                            <Flex align='center'>
                                                <Checkbox
                                                    defaultChecked={cell.value}
                                                    colorScheme='brandScheme'
                                                    me='10px'
                                                />
                                                <Text color={textColor} fontSize='sm' fontWeight='700'>
                                                    {cell.value}
                                                </Text>
                                            </Flex>
                                        );
                                    } else if (cell.column.Header === "STATUS") {
                                        data = (
                                            <Flex align='center'>
                                                <Icon
                                                    w='24px'
                                                    h='24px'
                                                    me='5px'
                                                    color={
                                                        cell.value === "true"
                                                            ? "green.500"
                                                            : cell.value === "false"
                                                                ? "red.500"
                                                                : cell.value === "Error"
                                                                    ? "orange.500"
                                                                    : null
                                                    }
                                                    as={
                                                        cell.value === "true"
                                                            ? MdCheckCircle
                                                            : cell.value === "false"
                                                                ? MdCancel
                                                                : cell.value === "Error"
                                                                    ? MdOutlineError
                                                                    : null
                                                    }
                                                />
                                                <Text color={textColor} fontSize='sm' fontWeight='700'>
                                                    {cell.value}
                                                </Text>
                                            </Flex>
                                        );
                                    } else if (cell.column.Header === "DATE") {
                                        data = (
                                            <Text color={textColor} fontSize='sm' fontWeight='700'>
                                                {cell.value}
                                            </Text>
                                        );
                                    } else if (cell.column.Header === "USERNAME") {
                                        data = (
                                            <Text color={textColor} colorScheme='brandSchme' fontSize='sm' fontWeight='700'>
                                            {cell.value}
                                        </Text>
                                        );
                                    }
                                    return (
                                        <Td
                                            {...cell.getCellProps()}
                                            key={index}
                                            fontSize={{ sm: "14px" }}
                                            minW={{ sm: "150px", md: "200px", lg: "auto" }}
                                            borderColor='transparent'>
                                            {data}
                                        </Td>
                                    );
                                })}
                            </Tr>
                        );
                    })}
                </Tbody>
            </Table>
        </Card>
    )
}

export default TableComponent

// TableComponent.propTypes = {
//     columnsData: PropTypes.arrayOf(PropTypes.string).isRequired,
//     tableData: PropTypes.arrayOf(PropTypes.string).isRequired
// }