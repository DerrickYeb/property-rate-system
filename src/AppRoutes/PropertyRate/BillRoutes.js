import { Icon } from "@chakra-ui/react"
import { MdHome } from "react-icons/md"
import { DASHBOARD_URL } from "src/config/routes.config"


const BillRoutes = [
    {
        name: "All Bills",
        layout: "prop",
        path: DASHBOARD_URL,
        icon: <Icon as={MdHome} width='20px' height='20px' color='inherit' />,
      },
]
export default BillRoutes