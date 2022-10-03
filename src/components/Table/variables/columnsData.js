import { Button, Text } from "@chakra-ui/react";
import Tablemenu from "~components/MenuComponent/Tablemenu";

export const columnsDataDevelopment = [
  {
    Header: "NAME",
    accessor: "name",
  },
  {
    Header: "TECH",
    accessor: "tech",
  },
  {
    Header: "DATE",
    accessor: "date",
  },
  {
    Header: "PROGRESS",
    accessor: "progress",
  },
];

export const columnsDataCheck = [
  {
    Header: "NAME",
    accessor: "name",
  },
  {
    Header: "PROGRESS",
    accessor: "progress",
  },
  {
    Header: "QUANTITY",
    accessor: "quantity",
  },
  {
    Header: "DATE",
    accessor: "date",
  },
];

export const propertyColumns = [
  {
    name: "Onwer Name",
    selector: "attributes.owner_name",
    sortable: true
  },
  {
    name: "House Number",
    selector: "attributes.house_number",
    sortable: true
  },
  {
    name: "Town",
    selector: "attributes.town",
    sortable: true,
  },
  {
    name: "Street Name",
    selector: "attributes.street_name",
    sortable: true
  },
  {
    name: "Amount",
    selector: "attributes.amount",
    sortable: true,
  },
  {
    name: "ARREARS",
    selector: "attributes.arrears",
  },
  {
    name: "PHONE",
    selector: "attributes.phone_number",
  },
  {
				
    cell: (row) => (<Tablemenu customerId={row.id}/>),
    ignoreRowClick: false,
    allowOverflow: false,
    button: false,
  },
];

export const columnsDataComplex = [
  {
    name: "FIRST NAME",
    selector: "first_name",
  },
  {
    name: "LAST NAME",
    selector: "last_name",
  },
  {
    name: "USERNAME",
    selector: "username",
  },
  {
    name: "Email",
    selector: "email",
  },
  {
    name: "APP ACCESS",
    selector: "application_access",
  },
  {
    name: "DATE",
    selector: "createdAt",
  },
  
  {
    name:"Action",
    selector: "action",
    render:(cell)=>{
     return <Text color={'#fff'}>Hello</Text>
    }
  }
];
