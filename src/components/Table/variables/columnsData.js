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

export const columnsDataComplex = [
  {
    name: "NAME",
    selector: (row) => (
      `${row.first_name} ${row.last_name}`
    ),
  },
  {
    name: "Department",
    selector: (row) => {
      switch (row.department) {
        case "1":
          return "DCE"
        case "2": return "DCD"
        case "3": return "PM"
        case "4": return "Finance-DFO"
        case "5": return "Budget"
        case "6": return "Planning"
        case "7": return "Procurement"
        case "8": return "Internal Audit"
        case '9': return "Finance - Collector"
        case '10': return "Finance - NABCO/NSS"
        case '11': return "Finance - Office"
        case '12': return "MIS - NABCO/NSS"
        case '13': return "Physical Planning"
        case '14': return "F & A Committee"
        case '15': return "Administration"
        default:
          break;
      }
    },
  },

  {
    name: "Username",
    selector: (row) => {
      return row.username
    },
  },
  {
    name: "Application Access",
    selector: (row) => {
      return row.application_access
    },
  },
  {
    name: "Created Date",
    selector: (row) => {
      return moment().startOf('days', row.createdAt).fromNow();
    },
  },
];

export const propertyColumns = [
  {
    name: "Owner's Name",
    selector: (row) => (
      row.attributes?.owner_name
    ),
    sortable: true
  },
  {
    name: "House Number",
    selector: (row) => (
      row.attributes?.house_number
    ),
    sortable: true
  },
  {
    name: "Town",
    selector: (row) => {
      switch (row.attributes?.town) {
        case "1":
          return 'Kwahu Tafo'
        // break;
        case "2":
          return 'Abetifi'
        // break;
        case "3":
          return 'Pepease'
        case "4":
          return 'Bukuruwa'
        case "5":
          return 'Nkwatia'
        default:
          break;
      }
    },
    sortable: true,
  },
  {
    name: "Street Name",
    selector: (row) =>{
      return row.attributes?.street_name
    },
    sortable: true
  },
  {
    name: "Amount",
    selector: (row) =>{
      return row.attributes?.amount
    },
    sortable: true,
  },
  {
    name: "ARREARS",
    selector: (row) =>{
      return row.attributes?.arrears
    },
  },
  {
    name: "PHONE",
    selector: (row) =>{
      return row.attributes?.phone_number
    },
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
    selector: (row) => {
      switch (row.attributes?.town) {
        case "1":
          return 'Kwahu Tafo'
        // break;
        case "2":
          return 'Abetifi'
        // break;
        case "3":
          return 'Pepease'
        case "4":
          return 'Bukuruwa'
        case "5":
          return 'Nkwatia'
        default:
          break;
      }
    },
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
        case 2:
          return "Property Rate App"
        default:
          return "Property Rate App"
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
