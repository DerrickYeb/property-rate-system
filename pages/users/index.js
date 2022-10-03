import PageTitle from "~components/PageTitle";
import DashboardLayout from "~layouts/main";
import Users from "~modules/Users";


const users = () =>{
   return(
    <>
    <PageTitle title='Users'/>
    <DashboardLayout>
        <Users/>
    </DashboardLayout>
    </>
   )
}
export default users;