import { SettingsIcon } from "@chakra-ui/icons";
import { Icon } from "@chakra-ui/react";
import { IoOptions, IoPeople } from "react-icons/io5";
import { MdFeedback, MdHome, MdMoney, MdPayments, MdReport } from "react-icons/md";
import { ALL_FEEDBACK_URL, ALL_USERS, DASHBOARD_URL, PROPERTY_RATE_BILLS_URL, PROPERTY_RATE_MORE, PROPERTY_RATE_PAYMENT_URL, SETTINGS_URL } from "src/config/routes.config";

const PropertyAppRoutes = [
    {
        name: "Main Dashboard",
        layout: "bop",
        path: DASHBOARD_URL,
        icon: <Icon as={MdHome} width='20px' height='20px' color='inherit' />,
      },
      {
        name: "Bills",
        layout: "property",
        path: PROPERTY_RATE_BILLS_URL,
        icon: <Icon as={MdPayments} width='20px' height='20px' color='inherit' />,
      },
      {
        name: "Payment",
        layout: "property",
        path: PROPERTY_RATE_PAYMENT_URL,
        icon: <Icon as={MdMoney} width='20px' height='20px' color='inherit' />,
      },
      {
        name: "More",
        layout: "property",
        path: PROPERTY_RATE_MORE,
        icon: <Icon as={IoOptions} width='20px' height='20px' color='inherit' />,
      },
      {
        name: "Report",
        layout: "property",
        path: SETTINGS_URL,
        icon: <Icon as={MdReport} width='20px' height='20px' color='inherit' />,
      },
]
export default PropertyAppRoutes;