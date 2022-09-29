import { Icon } from "@chakra-ui/react";
import { FaBuilding } from "react-icons/fa";
import { IoOptions } from "react-icons/io5";
import { MdHome, MdMoney, MdPayments, MdReport } from "react-icons/md";
import { BOP_BILLS_URL, BOP_MORE, BOP_PAYMENT_URL, BOP_SMS_REPORT_URL, BOP_URL, DASHBOARD_URL } from "src/config/routes.config";

const BopAppRoutes = [
    {
        name: "Apps",
        layout: "bop",
        path: DASHBOARD_URL,
        icon: <Icon as={MdHome} width='20px' height='20px' color='inherit' />,
      },
      {
        name: "BOP",
        layout: "property",
        path: BOP_URL,
        icon: <Icon as={FaBuilding} width='20px' height='20px' color='inherit' />,
      },
      {
        name: "Bills",
        layout: "property",
        path: BOP_BILLS_URL,
        icon: <Icon as={MdPayments} width='20px' height='20px' color='inherit' />,
      },
      {
        name: "Payment",
        layout: "property",
        path: BOP_PAYMENT_URL,
        icon: <Icon as={MdMoney} width='20px' height='20px' color='inherit' />,
      },
      {
        name: "More",
        layout: "property",
        path: BOP_MORE,
        icon: <Icon as={IoOptions} width='20px' height='20px' color='inherit' />,
      },
      {
        name: "Report",
        layout: "property",
        path: BOP_SMS_REPORT_URL,
        icon: <Icon as={MdReport} width='20px' height='20px' color='inherit' />,
      },
]
export default BopAppRoutes;