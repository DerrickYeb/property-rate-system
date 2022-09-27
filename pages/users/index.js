const { default: PageTitle } = require("~components/PageTitle")
const { default: DashboardLayout } = require("~layouts/main")
const { default: Users } = require("~modules/Users")

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