import PageTitle from "~components/PageTitle";
import DashboardLayout from "~layouts/main";
import ApplicationCards from "~modules/ApplicationCards/ApplicationCards";
import Login from "~modules/Authentication/Login";
import LandingPage from "~modules/LandingPage/LandingPage";


export default function Home() {
  return (
    <>
    <PageTitle title="Home" />
      {/* <LandingPage /> */}
      {/* <DashboardLayout>  */}
        {/* <ApplicationCards/> */}
        <Login/>
      {/* </DashboardLayout> */}
    </>
  )
}
