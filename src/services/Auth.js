import { RiseLoader } from "react-spinners";

const { useSession } = require("next-auth/react");

function Auth({children}){
    const {status} = useSession();
    if(status === "loading"){
        return <RiseLoader color="primary"/>
    }
    return children;
}
export default Auth;