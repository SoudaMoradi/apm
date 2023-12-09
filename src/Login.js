import React from 'react';
import {InputText} from "primereact/inputtext";
import {Button} from "primereact/button";
import {Divider} from "primereact/divider";
import {useNavigate} from "react-router-dom";

function Login({setUser}) {
    const navigate=useNavigate();
    return (
        <div className="flex flex-column relative h-screen justify-content-start">
            <div className="loginImage h-full w-full absolute"/>
            <div className="flex flex-column justify-content-between align-items-center shadow-8 bg-white gap-3 z-5  border-round-left-3xl border-orange-500" style={{height:"64rem",width:"40rem",borderLeft:'7px solid'}} >
                <div className="flex flex-column justify-content-start pt-8">
                    <span className="text-6xl font-bold text-center line-height-4">راهیار</span>
                    <span className="text-2xl text-black-alpha-50">مدیریت و نگهداشت سامانه های ITS</span>
                </div>
                <div className="flex justify-content-center align-items-center flex-column w-full gap-5">
                        <span className="text-gray-500 text-lg">برای ورود تلفن همراه خود را وارد کنید</span>
                        <InputText className="w-7 p-inputtext-sm border-round text-lg shadow-1 border-round-xl p-3"  placeholder={'تلفن همراه'}/>
                        <Button className="w-7 p-button-sm p-3 border-round-2xl text-lg" style={{background:' #2F37FF'}} label={'ارسال کد تایید'} onClick={()=>{setUser({firstname:'raha',lastname:'mor'});navigate('/roadmanagement')}}/>
                    </div>
                <div className="pb-5">
                    <span className="text-sm text-black-alpha-60">
                    طراحی و توسعه شرکت بهبود مدیریت آرمان افزار
                </span>
                </div>
            </div>

        </div>

    );
}


export default Login;