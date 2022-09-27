import PageTitle from "~components/PageTitle";
import Login from "~modules/Authentication/Login";
import LandingPage from "~modules/LandingPage/LandingPage";


export default function Home() {
  return (
    <>
    <PageTitle title="Home" />
      {/* <LandingPage /> */}
      <Login/>
    </>
  )
}
