import { SettingsIcon } from "@chakra-ui/icons";
import { Icon } from "@chakra-ui/react"
import { IoPeople } from "react-icons/io5";
import { MdFeedback, MdHome } from "react-icons/md";
import AddUser from "~modules/Users/Add";
import { ALL_FEEDBACK_URL, ALL_USERS, DASHBOARD_URL, NEW_USER_REGISTRATION_URL, SETTINGS_URL } from "./config/routes.config";

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
        name: "Settings",
        layout: "property",
        path: SETTINGS_URL,
        icon: <Icon as={SettingsIcon} width='20px' height='20px' color='inherit' />,
      },
]

export default routes;