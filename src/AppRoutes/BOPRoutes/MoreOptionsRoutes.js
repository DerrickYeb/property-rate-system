import { Icon } from "@chakra-ui/react"
import { MdAppRegistration, MdOutlineReport, MdSms } from "react-icons/md"
import { BOP_REGISTRATION_URL, BOP_SMS, BOP_SMS_REPORT_URL } from "src/config/routes.config"


const MoreOptionsRoutes = [
    {
        name: "SMS",
        layout: "prop",
        path: BOP_SMS,
        icon: <Icon as={MdSms} width='20px' height='20px' color='inherit' />,
      },
      {
        name: "SMS Report",
        layout: "prop",
        path: BOP_SMS_REPORT_URL,
        icon: <Icon as={MdOutlineReport} width='20px' height='20px' color='inherit' />,
      },
      {
        name: "Registrations",
        layout: "prop",
        path: BOP_REGISTRATION_URL,
        icon: <Icon as={MdAppRegistration} width='20px' height='20px' color='inherit' />,
      },
]
export default MoreOptionsRoutes