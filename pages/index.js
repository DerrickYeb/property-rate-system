import { Center } from "@chakra-ui/react";
import { useSession } from "next-auth/react";
import { RiseLoader } from "react-spinners";
import PageTitle from "~components/PageTitle";
import DashboardLayout from "~layouts/main";
import ApplicationCards from "~modules/ApplicationCards/ApplicationCards";
import Login from "~modules/Authentication/Login";
import RouteGuard from "~modules/Authentication/RouteGuard";
import LandingPage from "~modules/LandingPage/LandingPage";


export default function Home() {
  const { status } = useSession()
  if (status === "loading") {
    return <Center>
      <RiseLoader color='red' />
    </Center>
  }
  if (status === "unauthenticated") {
    return <Center display={'flex'} justifyContent='center' py={50}>
      <RiseLoader color='red' />
    </Center>
  }
  return (
    <>
      <PageTitle title="Home" />
      {/* <LandingPage /> */}
      {/* <DashboardLayout>  */}
      {/* <ApplicationCards/> */}
      {/* <RouteGuard> */}
      <ApplicationCards />
      {/* </RouteGuard> */}
      {/* </DashboardLayout> */}
    </>
  )
}
