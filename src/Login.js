import React from 'react';
import {InputText} from "primereact/inputtext";
import {Button} from "primereact/button";
import {Divider} from "primereact/divider";
import {useNavigate} from "react-router-dom";

function Login({setUser}) {
    const navigate=useNavigate();
    return (
        <div className="flex flex-column align-items-center relative h-screen justify-content-center">
            <div className="loginImage h-full w-full absolute"/>
            <div className="flex flex-column justify-content-center align-items-center shadow-8 bg-white gap-3 z-5 border-3 border-white-alpha-90" style={{height:"30rem",width:"27rem"}} >
                <div className="pb-6 flex flex-column">
                    <span className="text-5xl font-bold text-center line-height-4 pb-4">راهیار</span>
                    <span className="text-xl text-black-alpha-90">مدیریت و نگهداشت سامانه های ITS</span>
                </div>
                <InputText className="w-7 p-inputtext-sm border-round text-xs shadow-1" aria-label={'تلفن همراه خود را وارد کنید'} placeholder={'تلفن همراه خود را وارد کنید'}/>
                <Button className="w-7 p-button-sm p-2 p-button-primary" label={'دریافت رمز ورود'} onClick={()=>{setUser({firstname:'raha',lastname:'mor'});navigate('/roadmanagement')}}/>
                <Divider className="w-10"/>
                <span className="text-sm text-black-alpha-90">
                    طراحی و توسعه شرکت بهبود مدیریت آرمان افزار
                </span>
            </div>

        </div>

    );
}

export default Login;