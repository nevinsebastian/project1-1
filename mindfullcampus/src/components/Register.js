import { useRef, useState, useEffect} from "react";
import { faCheck, faTime, faInfoCircle, faExclamationTriangle } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import axios from '../api/axios';

const USER_REGEX = /^[A-z][A-z0-9-_]{3,23}$/;
const PWD_REGEX = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%]).{8,24}$/;
const REGISTER_URL = '/register';




const Register = () => {
  const userRef = useRef();
  const errRef = useRef();

  const [user, setUser] = useState('');
  const [validName, setValidName] = useState(false);
  const [userFocus, setUserFocus] = useState(false);

  const [pwd, setPwd] = useState('');
  const [validPwd, setValidPwd] = useState(false);
  const [pwdFocus, setPwdFocus] = useState(false);

  const [matchPwd, setMatchPwd] = useState('');
  const [validMatch, setValidMatch] = useState(false);
  const [matchFocus, setMatchFocus] = useState(false);

  const [errMsg, setErrMsg] = useState('');
  const [success, setSuccess] = useState(false);

  useEffect(() => {
    userRef.current.focus();
}, [])

  useEffect (() => {
    const result = USER_REGEX.test(user);
    console.log(result);
    console.log(user);
    setValidName(result);
  }, [user])

  useEffect (() => {
    const result = PWD_REGEX.test(pwd);
    console.log(result);
    console.log(pwd);
    setValidPwd(pwd);
    const match = pwd === matchPwd;
    setValidMatch(match);
  },[pwd, matchPwd])

  useEffect(() => {
    setErrMsg('');
  },[user,pwd,matchPwd])

  const handleSubmit = async (e) => {
    e.preventDefault();
    // if button enabled with JS hack
    const v1 = USER_REGEX.test(user);
    const v2 = PWD_REGEX.test(pwd);
    if (!v1 || !v2) {
        setErrMsg("Invalid Entry");
        return;
  }
  try {
   const response = await axios.post(REGISTER_URL,
      JSON.stringify({ user, pwd }),
      {
        headers:{'Content-Type': 'application/json'},
        withCredentials: true
      }
    );
    console.log(response.data);
    console.log(response.accessToken);
    console.log(JSON.stringify(response))
    setSuccess(true);
    // clearinpput fields
  }catch (err){
    if(!err?.response){
      setErrMsg('NO server response');
    } else if (err.response?.status === 409){
      setErrMsg('username taken')
    } else {
      setErrMsg('registration failed')
    }
    errRef.current.focus();
}}
  return (
    <>
    {success ? (
            <section>
                <h1>Success!</h1>
                <p>
                    <a href="#">Sign In</a>
                </p>
            </section>
        ) : (

    <section>
        <p ref={errRef} className={errMsg ? "errmsg":
        "offscreen"} aria-live="assertive">{errMsg}</p>
        <h1>Register</h1>
        <form onSubmit={handleSubmit}>
          <label htmlFor="username">
            Username:
            <span className={validName ? "valid" : "hide"}>
                <FontAwesomeIcon icon={faCheck} />
            </span>
            <span className={validName || !user ? "hide" :
            "invalid"}>
              <FontAwesomeIcon icon="fa-exclamation-triangle" />

                
            </span>
          </label>
          <input
             type="text"
             id="username"
             ref={userRef}
             autoComplete="off"
             onChange={(e) => setUser(e.target.value)}
             value={user}
             required
             aria-invalid={validName ? "false" : "true"}
             aria-describedby="uidnote"
             onFocus={() => setUserFocus(true)}
             onBlur={() => setUserFocus(false)}
         />
         

         <label htmlFor="password">
             Password:
             <FontAwesomeIcon icon={faCheck} className={validPwd ? "valid" : "hide"} />
             <FontAwesomeIcon icon={faExclamationTriangle} className={validPwd || !pwd ? "hide" : "invalid"} />

         </label>
         <input
             type="password"
             id="password"
             onChange={(e) => setPwd(e.target.value)}
             value={pwd}
             required
             aria-invalid={validPwd ? "false" : "true"}
             aria-describedby="pwdnote"
             onFocus={() => setPwdFocus(true)}
             onBlur={() => setPwdFocus(false)}
         />
         

         <label htmlFor="confirm_pwd">
             Confirm Password:
             <FontAwesomeIcon icon={faCheck} className={validMatch && matchPwd ? "valid" : "hide"} />
             <FontAwesomeIcon icon={faExclamationTriangle} className={validMatch || !matchPwd ? "hide" : "invalid"} />
         </label>
         <input
             type="password"
             id="confirm_pwd"
             onChange={(e) => setMatchPwd(e.target.value)}
             value={matchPwd}
             required
             aria-invalid={validMatch ? "false" : "true"}
             aria-describedby="confirmnote"
             onFocus={() => setMatchFocus(true)}
             onBlur={() => setMatchFocus(false)}
         />
         

         <button disabled={!validName || !validPwd || !validMatch ? true : false}>Sign Up</button>


        

        </form>
        <p>
            Already registered?<br />
            <span className="line">
                {/*put router link here*/}
                <a href="#">Sign In</a>
            </span>
        </p>

    </section>
        )}
        </>
  )
}

export default Register;