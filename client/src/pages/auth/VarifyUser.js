import React , {useEffect , useState} from "react"
import { useDispatch, useSelector } from "react-redux" 
import {Button, Form, Col} from 'react-bootstrap'
import { verifyUser } from "../../action/auth.action"
import { useHistory, useParams } from "react-router"
    
const VerifyUserCode = () => {
    let { verifiedUser } = useSelector((state) => {
        return state.authReduser
    })
    console.log("verifiedUser");
    console.log(verifiedUser);
    const history = useHistory()
    useEffect(() => {
        if(verifiedUser) {
        history.push('/')
        }
        console.log('in effect');
    },[verifiedUser])
    const params = useParams()
    const [verifyUserData , setVerifyUser] = useState('')
    useEffect(() => {
         const {verifyToken} = params
        console.log(verifyToken);
        // const params = new URLSearchParams(window.location.search) // id=123
        // console.log("params.get('verifyToken')");
        // console.log(params.get('verifyToken'));
        setVerifyUser(verifyToken)
    },[])
     const dispetch = useDispatch()
    const hendelVerification = () => {
        console.log("verifyToken");
        console.log(verifyUserData);
        dispetch(verifyUser({data : verifyUserData}))
        // history.push("/")
    }
    return (
        <>
            <Button onClick={hendelVerification} >Verify</Button>
        </>
    )
}

export default VerifyUserCode