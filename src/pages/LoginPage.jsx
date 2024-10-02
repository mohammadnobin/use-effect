import React, { useState } from 'react'
import Container from '../components/Container'
import PageHeaderReuseable from '../components/reuseable/PageHeaderReuseable'
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";

const LoginPage = () => {
    const auth = getAuth();
    const [email, setemail] = useState("")
    const [password, setpassword] = useState("")
    const [errorMessage, seterrorMessage] = useState("")
    const handleemail = (e)=>{
        setemail(e.target.value)
    }
    const handlepasswoed = (e)=>{
        setpassword(e.target.value)
    }
    const handlesubmit = (e) =>{
        e.preventDefault()

        if(!email || !password){
            seterrorMessage("Place Inter Your Email and Passwoed")
            return;
        }
        createUserWithEmailAndPassword(auth, email, password)
  .then((user) => {
    console.log(user, "done")
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    console.log(errorCode)
    console.log(errorMessage)
    seterrorMessage("Your Email and Password is not valited")
  });
        
    }
  return (
    <>
    <Container>
        <PageHeaderReuseable title='Login' next='Login' prev='Home' />
        <div className="lg:w-[50%] border-b-[1px] border-[#F0F0F0] ">
            <p className='font-dm-sans font-normal text-base text-[#767676] leading-[30px] pb-[62px]'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the.</p>
        </div>
        <div className="py-[57px]">
            <h2 className='font-dm-sans font-bold text-[39px] leading-[50px] pb-[42px]'>Returning Customer</h2>
            <div className="">
                <form action="">
                    <div className="w-[70%] grid grid-cols-2 gap-[39px]">
                    <div className="">
                    <h3 className='font-dm-sans font-bold text-[16px] text-[#262626] leading-[23px] pb-[10px] pt-[23px]'>Email address</h3>
                    <input onChange={handleemail} className='w-full border-transparent border-b-[#F0F0F0] border-[1px] focus-visible:outline-none' type="email" required/>
                    </div>
                    <div className="">
                    <h3 className='font-dm-sans font-bold text-[16px] text-[#262626] leading-[23px] pb-[10px] pt-[23px]'>Password</h3>
                    <input onChange={handlepasswoed} className='w-full border-transparent border-b-[#F0F0F0] border-[1px] focus-visible:outline-none' type="password" placeholder='....' required/>
                    </div>
                    </div>
                    {errorMessage && 
                    <p className='text-red-600 font-dm-sans text-xl'>{errorMessage}</p>
                    }
                    <div className="mt-[29px] pb-[70px] border-b-[1px] border-[#F0F0F0] ">
                    <button onClick={handlesubmit} className='font-dm-sans font-bold text-sm leading-[18px] px-[80px] py-[16px] border-[#2B2B2B] border-[1px] hover:bg-black hover:text-white duration-500 ease-in-out' type='submit'>Log in</button>
                    </div>
                </form>
            </div>
        </div>
        <div className="lg:w-[50%]">
        <h2 className='font-dm-sans font-bold text-[39px] leading-[50px] '>New Customer</h2>
        <p className='font-dm-sans font-normal text-base text-[#767676] leading-[30px] pt-[38px] pb-[51px]'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the.</p>
        <div className="mt-[51px] mb-[140px]">
                    <button className='font-dm-sans font-bold text-sm leading-[18px] px-[80px] py-[16px] border-[#2B2B2B] border-[1px] hover:bg-white bg-black hover:text-black text-white duration-500 ease-in-out'>Continue</button>
                    </div>
        </div>
    </Container>
    </>
  )
}

export default LoginPage



// import React, { useState } from 'react'
// import Container from '../components/Container'
// import PageHeaderReuseable from '../components/reuseable/PageHeaderReuseable'
// import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";

// const LoginPage = () => {
//     const auth = getAuth();
//     const [email, setEmail] = useState("");
//     const [password, setPassword] = useState("");
//     const [errorMessage, setErrorMessage] = useState(""); // Error message state

//     const handleEmail = (e) => {
//         setEmail(e.target.value);
//     };

//     const handlePassword = (e) => {
//         setPassword(e.target.value);
//     };

//     const handleSubmit = (e) => {
//         e.preventDefault();
        
//         if (!email || !password) {
//             setErrorMessage("দয়া করে ইমেল এবং পাসওয়ার্ড প্রবেশ করান"); // Error message in Bangla
//             return;
//         }

//         createUserWithEmailAndPassword(auth, email, password)
//             .then((user) => {
//                 console.log(user, "done");
//                 setErrorMessage(""); // Reset error message on success
//             })
//             .catch((error) => {
//                 const errorCode = error.code;
//                 const errorMessage = error.message;
//                 console.log(errorCode);
//                 console.log(errorMessage);
//                 setErrorMessage("ইমেল বা পাসওয়ার্ডটি সঠিক নয়"); // Error message for firebase error
//             });
//     };

//     return (
//         <>
//             <Container>
//                 <PageHeaderReuseable title="Login" next="Login" prev="Home" />
//                 <div className="lg:w-[50%] border-b-[1px] border-[#F0F0F0] ">
//                     <p className="font-dm-sans font-normal text-base text-[#767676] leading-[30px] pb-[62px]">
//                         Lorem Ipsum is simply dummy text of the printing and typesetting industry.
//                     </p>
//                 </div>
//                 <div className="py-[57px]">
//                     <h2 className="font-dm-sans font-bold text-[39px] leading-[50px] pb-[42px]">
//                         Returning Customer
//                     </h2>
//                     <div>
//                         <form onSubmit={handleSubmit}>
//                             <div className="w-[70%] grid grid-cols-2 gap-[39px]">
//                                 <div>
//                                     <h3 className="font-dm-sans font-bold text-[16px] text-[#262626] leading-[23px] pb-[10px] pt-[23px]">
//                                         ইমেল ঠিকানা
//                                     </h3>
//                                     <input
//                                         onChange={handleEmail}
//                                         className="w-full border-transparent border-b-[#F0F0F0] border-[1px] focus-visible:outline-none"
//                                         type="email"
                             
//                                     />
//                                 </div>
//                                 <div>
//                                     <h3 className="font-dm-sans font-bold text-[16px] text-[#262626] leading-[23px] pb-[10px] pt-[23px]">
//                                         পাসওয়ার্ড
//                                     </h3>
//                                     <input
//                                         onChange={handlePassword}
//                                         className="w-full border-transparent border-b-[#F0F0F0] border-[1px] focus-visible:outline-none"
//                                         type="password"
//                                         placeholder="...."
                       
//                                     />
//                                 </div>
//                             </div>
//                             {errorMessage && (
//                                 <p className="text-red-500 pt-3">{errorMessage}</p>
//                             )}
//                             <div className="mt-[29px] pb-[70px] border-b-[1px] border-[#F0F0F0] ">
//                                 <button
//                                     className="font-dm-sans font-bold text-sm leading-[18px] px-[80px] py-[16px] border-[#2B2B2B] border-[1px] hover:bg-black hover:text-white duration-500 ease-in-out"
//                                     type="submit"
//                                 >
//                                     লগ ইন করুন
//                                 </button>
//                             </div>
//                         </form>
//                     </div>
//                 </div>
//                 <div className="lg:w-[50%]">
//                     <h2 className="font-dm-sans font-bold text-[39px] leading-[50px]">
//                         নতুন গ্রাহক
//                     </h2>
//                     <p className="font-dm-sans font-normal text-base text-[#767676] leading-[30px] pt-[38px] pb-[51px]">
//                         Lorem Ipsum is simply dummy text of the printing and typesetting industry.
//                     </p>
//                     <div className="mt-[51px] mb-[140px]">
//                         <button className="font-dm-sans font-bold text-sm leading-[18px] px-[80px] py-[16px] border-[#2B2B2B] border-[1px] hover:bg-white bg-black hover:text-black text-white duration-500 ease-in-out">
//                             Continue
//                         </button>
//                     </div>
//                 </div>
//             </Container>
//         </>
//     );
// };

// export default LoginPage;
