import { useState ,useContext,useEffect} from "react";
import {TokenContext} from "../provider"
const Login = ()=>{

    const [email,setEmail] = useState("")
    const [password,setPassword] = useState("")
    const [name,setName] = useState("")
    const [firstName,setFirstName] = useState("")

    const [result ,setResult] = useState("")
    const [state, dispatch] = useContext(TokenContext);

    const handleSignUp = (event)=>{
        event.preventDefault();
        const data = {email:email,motdepasse:password,nom:name,prenom:firstName}

        
        fetch("http://localhost:3000/utilisateurs",
            {method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)}
        )
        .then(response => response.json())
        .then(result => {
            setResult(result)
        })

    }
    const handleLogin = (event)=>{
        event.preventDefault();
        const data = {email:email,motdepasse:password}

        fetch("http://localhost:3000/utilisateurs/login",
            {method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)}
        )
        .then(response => response.json())
        .then(result => {
            setResult(result)
        })


    }

    useEffect(()=>{
        console.log(result.token)
        if(result.token){
            dispatch({type:"SET_TOKEN",token:result.token})
        }
    },[result])
    return (
    <>
    <div className="box">
        <div className="login">
            <div className="main">  	
                <input type="checkbox" id="chk" aria-hidden="true"/>
                <div className="signup">
                        <form method="post">
                            <label htmlFor="chk" aria-hidden="true">Sign up</label>
                            <input type="name" name="name" placeholder="Nom" onChange={(e)=>setName(e.target.value)} value={name}  required=""/>
                            <input type="firstName" name="firstName" placeholder="Prénom" onChange={(e)=>setFirstName(e.target.value)} value={firstName} required=""/>
                            <input type="email" name="email" placeholder="Email" onChange={(e)=>setEmail(e.target.value)} value={email} required=""/>
                            <input type="password" name="pswd" placeholder="Password" onChange={(e)=>setPassword(e.target.value)} value={password}  required=""/>
                            <button onClick={handleSignUp}>Sign up</button>
                        </form>
                    </div>

                    <div className="login">
                        <form method="post">
                            <label htmlFor="chk" aria-hidden="true">Login</label>
                            <input type="email" name="email" placeholder="Email" className="one" value={email} onChange={(e)=>setEmail(e.target.value)} required=""/>
                            <input type="password" name="pswd" placeholder="Password" className="one" value={password} onChange={(e)=>setPassword(e.target.value)} required=""/>
                            <button onClick={handleLogin}>Login</button>
                        </form>
                    </div>
            </div>
        </div>
    </div>
    </>
    )
};

export default Login