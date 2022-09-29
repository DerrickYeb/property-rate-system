import { AddIcon } from "@chakra-ui/icons";
import { Icon } from "@chakra-ui/react";
import { FaGgCircle } from "react-icons/fa";
import { BOP_PAYMENT_GCR_ANALYSIS_URL, BOP_PAYMENT_GCR_REGISTRATION_URL, BOP_PAYMENT_PERIODIC_ANALYSIS_URL, PROPERTY_APP_PAYMENT_GCR_ANALYSIS_URL, PROPERTY_APP_PAYMENT_GCR_REGISTRATION_URL, PROPERTY_APP_PAYMENT_PERIODIC_ANALYSIS_URL } from "src/config/routes.config";

const PaymentRoutes = [
    // {
    //     name: "New Payment",
    //     layout: "prop",
    //     path: PROPERTY_APP_PAYMENT_NEW_PAYMENT_URL,
    //     icon: <Icon as={AddIcon} width='20px' height='20px' color='inherit' />,
    //   },
      {
        name: "GCR Registration",
        layout: "prop",
        path: BOP_PAYMENT_GCR_REGISTRATION_URL,
        icon: <Icon as={FaGgCircle} width='20px' height='20px' color='inherit' />,
      },
      {
        name: "GCR Analysis",
        layout: "prop",
        path: BOP_PAYMENT_GCR_ANALYSIS_URL,
        icon: <Icon as={AddIcon} width='20px' height='20px' color='inherit' />,
      },
      {
        name: "Periodic Analysis",
        layout: "prop",
        path: BOP_PAYMENT_PERIODIC_ANALYSIS_URL,
        icon: <Icon as={AddIcon} width='20px' height='20px' color='inherit' />,
      },
]
export default PaymentRoutes;