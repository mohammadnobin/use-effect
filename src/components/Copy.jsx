import { useEffect, useState } from 'react';


import registrationImg from '../assets/registrationImg.png'
import Grid from '@mui/material/Grid';
import TextField from '@mui/material/TextField';
import { alpha, styled } from '@mui/material/styles';
import Button from '@mui/material/Button';
import { Link, useNavigate } from 'react-router-dom';
import {toast } from 'react-toastify';
import Alert from '@mui/material/Alert';
import {BiSolidErrorCircle} from 'react-icons/bi'
import { getAuth, createUserWithEmailAndPassword,sendEmailVerification,signInWithPopup, GoogleAuthProvider,updateProfile  } from "firebase/auth";
import { Dna } from 'react-loader-spinner'
import {FcGoogle} from 'react-icons/fc'
import { useDispatch, useSelector } from 'react-redux';
import { loginData } from '../slices/userSlice';

import { getDatabase, ref, set,  } from "firebase/database";
import { LuEye } from "react-icons/lu";
import { LuEyeOff } from "react-icons/lu";





const MyInput = styled(TextField) ({
    width: '70%',
    
  });
  const MyButton = styled(Button)({
    width: '70%',
    padding:'15px 0px',
    borderRadius:"86px",
    background:"#5F35F5",
    fontSize:'20px',
    fontFamily:"Nunito",
    fontWeight:"600",
    marginBottom:"35px",
    textTransform:"capitalize"
  
  });
const Registration = () => {
  const db = getDatabase();
  const auth = getAuth(); 
  let dispatch=useDispatch()
  let data=useSelector((state)=>(state.sajib.value))
  
  

  let navigate =useNavigate()

  let [loader,setLoader]=useState(false)
  
  let [email,setEmail]=useState("")
  let [fullName,setFullName]=useState("")
  let [password,setPasswrd]=useState("")
  let [emailError,setEmailError]=useState("")
  let [fullNameError,setFullNameError]=useState("")
  let [passwordError,setPasswrdError]=useState("")

  let [eye,setEye]=useState(false)
  let [type,setType]=useState(false)

  let [emailIcon,setEmailIcon]=useState(false)
  let [fullNameIcon,setFullNameIcon]=useState(false)
  let [passwordIcon,setPasswordIcon]=useState(false)

 

 
   let pattern=/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/
   let lowerChar=/^(?=.*[a-z])/
   let upperChar=/^(?=.*[A-Z])/
   let number=/^(?=.*[0-9])/
   let specil=/^(?=.*[!@#$%^&*])/
   let minMax=/^(?=.{8,})/

   let handleSignUP=()=>{
    if(!email){
      setEmailError("Enter your email");
    }else if(!pattern.test(email)){
      setEmailError("Enter a Valid Email");
    }
    else if(!fullName){
      setFullNameError("Enter YouFull Name");
    }
    else if(!password){
      setPasswrdError("Enter a password");
    }else if(!lowerChar.test(password)){
      setPasswrdError("Lower Case Must");
    }else if(!upperChar.test(password)){
      setPasswrdError("Upper Case Must");
    }else if(!number.test(password)){
      setPasswrdError("Number Must");
    }else if(!specil.test(password)){
      setPasswrdError("Specil charator Must");
    }else if(!minMax.test(password)){
      setPasswrdError("min-8 max-16");
    }
    else{
      setPasswrdError("");
      setFullNameError("");
      setEmailError("")
      setLoader(true)
      createUserWithEmailAndPassword(auth, email, password).then((userCredential) => {
        console.log(userCredential.user.uid);
        updateProfile(auth.currentUser, {
          displayName: fullName, photoURL: "https://firebasestorage.googleapis.com/v0/b/skynet-47ca9.appspot.com/o/profileAvater.jpg?alt=media&token=d27ca7cf-81ac-40df-b4e7-e31dfef469ce"
        }).then(() => {
          sendEmailVerification(auth.currentUser)
       .then(() => {
        set(ref(db, 'all user/'+userCredential.user.uid), {
          username: fullName,
          email: userCredential.user.email,
          profile_picture : "https://firebasestorage.googleapis.com/v0/b/skynet-47ca9.appspot.com/o/profileAvater.jpg?alt=media&token=d27ca7cf-81ac-40df-b4e7-e31dfef469ce"
        });
          setEmail("")
          setPasswrd("")
          setFullName("")
          navigate('/login')
          toast("Registration Successfull")
          setLoader(false)
     });
       
        })

       
      })
      .catch((error) => {
        const errorCode = error.code;
        console.log(errorCode);
        setLoader(false)
        if(errorCode.includes("email")){
          setEmailError("Email already in use")
        }
      });
   
    }
   }


   let handleGoogleSignUp=()=>{
    const provider = new GoogleAuthProvider();
    signInWithPopup(auth, provider).then((result) => {
      console.log(result.user.displayName);
      set(ref(db, 'all user/' + result.user.uid), {
        username: result.user.displayName,
        email: result.user.email,
        profile_picture : "https://firebasestorage.googleapis.com/v0/b/skynet-47ca9.appspot.com/o/profileAvater.jpg?alt=media&token=d27ca7cf-81ac-40df-b4e7-e31dfef469ce"
      });
      navigate("/home")
      dispatch(loginData(result.user))
      localStorage.setItem("activeUser",JSON.stringify(result.user))
    }).catch((error) => {
      const errorCode = error.code;
      console.log(errorCode);
     
    });

   }

   let handleEyeOne=()=>{
    setEye(true)
    setType(true)
   }
   let handleEyeTwo=()=>{
    setEye(false)
    setType(false)
   }
   
   useEffect(()=>{
   if(data!=null){
    navigate("/home")
   }

   },[])
  
  return (
        <Grid container >
        <Grid item xs={6}>
          <div className='regBox'>
            <h1 className='heading'>Get started with easily register</h1>
            <p className='para'>Free register and you can enjoy it</p>
            <div onClick={handleGoogleSignUp} className='google1'>
            <FcGoogle className='googleIcon'/>
            <p className='paraGoogle'>Login with Google</p>
            </div>
            <div className='inputOne'>
            <MyInput value={email} name="email" onChange={(e)=>setEmail(e.target.value)} id="outlined-basic" label="Email Address" variant="outlined" />
            {/* {email&&<BiSolidErrorCircle className='regIcon'/>} */}
            {emailError&&<div className='error-box'><p>{emailError}</p></div>}
            </div>
            <div className='inputOne'>
            <MyInput value={fullName} name="fullName" onChange={(e)=>setFullName(e.target.value)} id="outlined-basic" label="Ful name" variant="outlined" />
            {/* {fullName&&<BiSolidErrorCircle className='regIcon'/>} */}
            {fullNameError&&<div className='error-box'><p>{fullNameError}</p></div>}
            </div>
            <div className='inputOne'>
            <MyInput value={password} name="password" onChange={(e)=>setPasswrd(e.target.value)} type={type?"text":"password"} id="outlined-basic" label="Password" variant="outlined" />
            {/* {password&&<BiSolidErrorCircle className='regIcon'/>} */}
            {passwordError&&<div className='error-box'><p>{passwordError}</p></div>}
            {eye?
            <LuEyeOff onClick={handleEyeTwo}   className='eye'/>
            :
            <LuEye onClick={handleEyeOne}  className='eye'/>
            }
            </div>
            {loader?
           <button className='buttonForLoder'>
           <Dna
               visible={true}
               height="60"
               width="80"
               ariaLabel="dna-loading"
               wrapperStyle={{padding:'px 0px',
               color:'red',
               width:'100%',
               borderRadius:"86px",
               background:"wheat",
               fontSize:'20px',
               fontFamily:"Nunito",
               fontWeight:"600",
               textTransform:"capitalize"}}
               wrapperClass="dna-wrapper"
              />
           </button>
            :
            <MyButton onClick={handleSignUP} variant="contained">Sign up</MyButton>
            }
            
            <p className='paraTwo'>Already  have an account ? <Link to='/login' className='unlink'><span>Sign In</span></Link></p>
          </div>
        </Grid>
        <Grid item xs={6}>
          <div>
            <img className='regImage' src={registrationImg} alt="registrationImg" />
          </div>
        </Grid>
      </Grid>
  )
}

export default Registration