import React, { useState } from "react";
import Container from "../components/Container";
import PageHeaderReuseable from "../components/reuseable/PageHeaderReuseable";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
import { toast, ToastContainer } from "react-toastify";
import { Bars } from "react-loader-spinner";
import { useNavigate } from "react-router-dom";

const LoginPage = () => {
  const auth = getAuth();
  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");
  const [errorMessage, seterrorMessage] = useState("");
  const [show, setShow] = useState(false);
  const navigete= useNavigate()
  // email validation regex
  const emailRegex =
    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  // password validation regex
  const lowerChar = /^(?=.*[a-z])/;
  const upperChar = /^(?=.*[A-Z])/;
  const number = /^(?=.*[0-9])/;
  const specil = /^(?=.*[!@#$%^&*])/;
  const minMax = /^(?=.{8,})/;

  const handlelogin = (e) => {
    e.preventDefault();
    if (!email) {
      toast("email nai");
    } else if (!emailRegex.test(email)) {
      toast("email thik koro");
      //  Password validation
    } else if (!password) {
      toast("Enter a password");
    } else if (!lowerChar.test(password)) {
      toast("Lower Case Must");
    } else if (!upperChar.test(password)) {
      toast("Upper Case Must");
    } else if (!number.test(password)) {
      toast("Number Must");
    } else if (!specil.test(password)) {
      toast("Specil charator Must");
    } else if (!minMax.test(password)) {
      toast("min-8 max-16");
    } else {
      setShow(true);
      signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        setShow(false)
        if (userCredential.user.emailVerified) {
          toast('verified and done')
          navigete('/')
          setemail("");
          setpassword("");
          }else{
           toast('please verified your account')
          }
        })
        .catch((error) => {
          const errorCode = error.code;
          if (errorCode.includes('auth/invalid-credential')) {
            toast('you have no account')
            setShow(false)
          }
        });
    }
  };
  return (
    <>
      <Container>
        <PageHeaderReuseable title="Login" next="Login" prev="Home" />
        <div className="lg:w-[50%] border-b-[1px] border-[#F0F0F0] ">
          <p className="font-dm-sans font-normal text-base text-[#767676] leading-[30px] pb-[62px]">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the.
          </p>
        </div>
        <div className="py-[57px]">
          <h2 className="font-dm-sans font-bold text-[39px] leading-[50px] pb-[42px]">
            Returning Customer
          </h2>
          <div className="">
            <form action="">
              <div className="w-[70%] grid grid-cols-2 gap-[39px]">
                <div className="">
                  <h3 className="font-dm-sans font-bold text-[16px] text-[#262626] leading-[23px] pb-[10px] pt-[23px]">
                    Email address
                  </h3>
                  <input
                    onChange={(e) => setemail(e.target.value)}
                    value={email}
                    className="w-full border-transparent border-b-[#F0F0F0] border-[1px] focus-visible:outline-none"
                    type="email"
                    required
                  />
                </div>
                <div className="">
                  <h3 className="font-dm-sans font-bold text-[16px] text-[#262626] leading-[23px] pb-[10px] pt-[23px]">
                    Password
                  </h3>
                  <input
                    onChange={(e) => setpassword(e.target.value)}
                    value={password}
                    className="w-full border-transparent border-b-[#F0F0F0] border-[1px] focus-visible:outline-none"
                    type="password"
                    placeholder="...."
                    required
                  />
                </div>
              </div>
              {errorMessage && (
                <p className="text-red-600 font-dm-sans text-xl">
                  {errorMessage}
                </p>
              )}
              <div className="mt-[29px] pb-[70px] border-b-[1px] border-[#F0F0F0] ">
                {show ? (
                  <div className="">
                    <Bars
                      height="80"
                      width="80"
                      color="#000000"
                      ariaLabel="bars-loading"
                      wrapperStyle={{}}
                      wrapperClass=""
                      visible={true}
                    />
                  </div>
                ) : (
                  <button
                    onClick={handlelogin}
                    className="font-dm-sans font-bold text-sm leading-[18px] px-[80px] py-[16px] border-[#2B2B2B] border-[1px] hover:bg-black hover:text-white duration-500 ease-in-out"
                    type="submit"
                  >
                    Log in
                  </button>
                )}
              </div>
            </form>
          </div>
        </div>
        <div className="lg:w-[50%]">
          <h2 className="font-dm-sans font-bold text-[39px] leading-[50px] ">
            New Customer
          </h2>
          <p className="font-dm-sans font-normal text-base text-[#767676] leading-[30px] pt-[38px] pb-[51px]">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the.
          </p>
          <div className="mt-[51px] mb-[140px]">
            <button className="font-dm-sans font-bold text-sm leading-[18px] px-[80px] py-[16px] border-[#2B2B2B] border-[1px] hover:bg-white bg-black hover:text-black text-white duration-500 ease-in-out">
              Continue
            </button>
          </div>
        </div>
        <ToastContainer
          position="top-right"
          autoClose={5000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="light"
        />
      </Container>
    </>
  );
};

export default LoginPage;

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
