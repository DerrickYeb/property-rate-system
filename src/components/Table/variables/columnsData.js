import { Button, Menu, Text } from "@chakra-ui/react";
import moment from "moment/moment";
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
    selector: (row) => {
      attributes.owner_name
    },
    sortable: true
  },
  {
    name: "House Number",
    selector: (row) => {
      attributes.house_number
    },
    sortable: true
  },
  {
    name: "Town",
    selector: (row) => {
      switch (row.attributes.town) {
        case 1:
          return 'Kwahu Tafo'
          break;
          case 2:
          return 'Abetifi'
          break;
        default:
          break;
      }
    },
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

    cell: (row) => (<Tablemenu customerId={row.id} />),
    ignoreRowClick: false,
    allowOverflow: false,
    button: false,
  },
];

export const bopColumns = [
  {
    name: "Business Name",
    selector: "attributes.business_name",
    sortable: true
  },
  // {
  //   name: "House Number",
  //   selector: "attributes.house_number",
  //   sortable: true
  // },
  {
    name: "Town",
    selector: "attributes.town",
    sortable: true,
  },
  {
    name: "Street Name",
    selector: "attributes.land_mark",
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

    cell: (row) => (<Tablemenu customerId={row.id} />),
    ignoreRowClick: false,
    allowOverflow: false,
    button: false,
  },
];

export const townsColumns = [
  {
    name: "Name",
    selector: (row) => (
      row.attributes.name
    ),
  },
  {
    name: "DATE",
    selector: (row) => (
      moment().startOf('days', row.attributes.createdAt).fromNow()
    ),
  },
  {

    cell: (row) => (<Menu colorScheme={'blue'} customerId={row.id} />),
    ignoreRowClick: false,
    allowOverflow: false,
    button: false,
  },
]
export const ratesColumns = [
  {
    name: "Name",
    selector: (row) => (
      row.attributes.name
    ),
  },
  {
    name: "Type",
    selector: (row) => {
      switch (row.attributes.type) {
        case 1:
          return "Business Operating Permit"
          break;
        default:
          return "Property Rate App"
          break;
      }
    },
  },
  {
    name: "Amount",
    selector: (row) => (
      row.attributes.amount
    ),
  },
  {
    name: "Rate Payers",
    selector: (row) => (
      row.attributes.rate_payers
    ),
  },
  {
    name: "Total Amount",
    selector: (row) => (
      row.attributes.name
    ),
  },
  {
    name: "DATE",
    selector: (row) => (
      moment().startOf('days', row.attributes.createdAt).fromNow()
    ),
  },
  {

    cell: (row) => (<Menu colorScheme={'blue'} customerId={row.id} />),
    ignoreRowClick: false,
    allowOverflow: false,
    button: false,
  },]
