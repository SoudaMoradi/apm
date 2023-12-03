import React from 'react';
import {InputText} from "primereact/inputtext";
import {Button} from "primereact/button";
import {Divider} from "primereact/divider";

function Login({setUser}) {
    return (
        <div className="flex flex-column align-items-center relative h-screen justify-content-center">
            <div className="loginImage h-full w-full absolute"/>
            <div className="flex flex-column w-3 justify-content-center align-items-center shadow-8 bg-white-alpha-20 gap-3 z-5 border-3 border-white-alpha-90" style={{height:"35rem"}} >
                <div className="pb-5 flex flex-column">
                    <span className="text-5xl font-bold text-center line-height-4">راهیار</span>
                    <span className="text-2xl text-white">مدیریت و نگهداشت سامانه های ITS</span>
                </div>
                <InputText className="w-7 p-inputtext-sm border-round text-xs shadow-1" aria-label={'شماره تلفن'} placeholder={'شماره تلفن'}/>
                <Button className="w-7 p-button-sm p-2 p-button-secondary" label={'ورود'} onClick={()=>{setUser({firstname:'raha',lastname:'mor'})}}/>
                <Divider className="w-10"/>
                <span className="text-xl text-white">
                    طراحی و توسعه شرکت بهبود مدیریت آرمان افزار
                </span>
            </div>

        </div>

    );
}

export default Login;