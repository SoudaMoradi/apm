import React from 'react';
import {Menubar} from "primereact/menubar";
import {useNavigate, useParams} from "react-router-dom";


function RoadManageDetail ({onClick,label}) {
    const params=useParams();

    const navigate=useNavigate();

    const items = [
        {
            label: 'لیست تجهیزات',command:()=>{navigate(`/roadmanagement/${params.id}/listequipment`)},
        },
        {
            label: 'نقشه جغرافیایی',command:()=>{navigate(`/roadmanagement/${params.id}/map`)},
        },
        {
            label: 'داشبورد',path: "/dashboard",
        },
        {
            label: 'تقویم کاری',path:"/calendar",
        },
        {
            label: 'فعالیت ها',path:"/activities",
        },
        {
            label: 'مستندات',path:"/documentation",
        },
    ]

    const tabContents={
        listequipment:<div>LIST OF EQUIPMENT</div>,
        map:<div>MAP</div>
    }


    function MenubarEnd() {
        return <div className="flex justify-content-end gap-2 ">
            <span className="pi pi-users"/>
            <span className="pi pi-volume-up"/>
        </div>;
    }

    function MenubarStart() {
        return<div className="flex justify-content-start">
            <span>خوزستان</span>
            <i className="pi pi-angle-right"/>
            <span>دوربین های ثبت تخلف</span>
        </div> ;
    }



    return (
        <div  className="flex flex-column justify-content-center align-items-center flex-1">
            <Menubar className="flex justify-content-center w-full text-xs bg-transparent border-none" model={items} start={<MenubarStart/>} end={<MenubarEnd/>}/>
            <div>
                {
                    tabContents[params.tab]
                }
            </div>
        </div>
    );
}

export default RoadManageDetail;