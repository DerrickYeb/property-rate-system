import { SettingsIcon } from "@chakra-ui/icons";
import { Icon } from "@chakra-ui/react"
import { IoPeople } from "react-icons/io5";
import { MdFeedback, MdHome, MdRateReview } from "react-icons/md";
import { ALL_FEEDBACK_URL, ALL_USERS, DASHBOARD_URL, SETTINGS_RATES, SETTINGS_URL } from "./config/routes.config";

const routes = [
    {
        name: "Main Dashboard",
        layout: "bop",
        path: DASHBOARD_URL,
        icon: <Icon as={MdHome} width='20px' height='20px' color='inherit' />,
      },
      {
        name: "Users",
        layout: "property",
        path: ALL_USERS,
        icon: <Icon as={IoPeople} width='20px' height='20px' color='inherit' />,
      },
      {
        name: "Feedback",
        layout: "property",
        path: ALL_FEEDBACK_URL,
        icon: <Icon as={MdFeedback} width='20px' height='20px' color='inherit' />,
      },
      {
        name: "Rates",
        layout: "rate",
        path: SETTINGS_RATES,
        icon: <Icon as={MdRateReview} width='20px' height='20px' color='inherit' />,
      },
      {
        name: "Settings",
        layout: "property",
        path: SETTINGS_URL,
        icon: <Icon as={SettingsIcon} width='20px' height='20px' color='inherit' />,
      },
]

export default routes;