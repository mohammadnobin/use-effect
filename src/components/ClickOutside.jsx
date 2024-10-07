import React, { useEffect, useRef, useState } from "react";

const ClickOutside = () => {
  let [show, setShow] = useState(false);
  let menuRef = useRef();

  useEffect(() => {
    let handler = (e) => {
      if (!menuRef.current.contains(e.target)) {
        setShow(false);
      }
    };

    document.addEventListener("mousedown", handler);

    return () => {
      document.removeEventListener("mousedown", handler);
    };
  });

  // let handleClickOutside =(e)=>{
  //     if (showRef.current&&!showRef.current.contains(e.target)) {
  //         setShow(false)
  //     }
  // };

  // useEffect(()=>{
  //     document.addEventListener("mousedown",handleClickOutside);

  //     return ()=>document.removeEventListener("mousedown",handleClickOutside);
  // },[])

  return (
    <>
      <div ref={menuRef} className="w-[150px] relative">
        <div className="">
          <button
            onClick={() => {
              setShow(!show);
            }}
            className="bg-red-600 py-3 px-7 rounded text-white "
          >
            Click Me
          </button>
        </div>
        <div
          className={`absolute w-[115px] text-center rounded top-[50px] left-[0px] ${
            show == true ? "" : "hidden"
          }`}
        >
          <ul className="bg-orange-300 ">
            <li>
              <a
                onClick={() => {
                  setShow(false);
                }}
                href="https://www.youtube.com/"
                target="_blank"
              >
                Hello
              </a>
            </li>
            <li>Hello</li>
            <li>Hello</li>
            <li>Hello</li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default ClickOutside;
