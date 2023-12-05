import React from 'react';
import {Menubar} from "primereact/menubar";
import {useNavigate, useParams} from "react-router-dom";
import ListEquipment from "./ListEquipment";
import Dashboard from "./Dashboard";
import Map from "./Map";
import Activities from "./Activities";
import Calendar from "./Calendar";
import Documentation from "./Documentation";


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
            label: 'داشبورد',command:()=>{navigate(`/roadmanagement/${params.id}/dashboard`)},

        },
        {
            label: 'تقویم کاری',command:()=>{navigate(`/roadmanagement/${params.id}/calendar`)},
        },
        {
            label: 'فعالیت ها',command:()=>{navigate(`/roadmanagement/${params.id}/activities`)},
        },
        {
            label: 'مستندات',command:()=>{navigate(`/roadmanagement/${params.id}/documentation`)},
        },
    ]

    const tabContents={
        listequipment:<ListEquipment/>,
        map:<Map/>,
        dashboard:<Dashboard/>,
        calendar:<Calendar/>,
        activities:<Activities/>,
        documentation:<Documentation/>
    }


    function MenubarEnd() {
        return <div className="flex justify-content-end gap-2">
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
        <div  className="flex flex-column justify-content-center align-items-center flex-1 w-full h-full">
            <Menubar className="flex justify-content-center w-full text-lg bg-transparent border-none font-medium" model={items} start={<MenubarStart/>} end={<MenubarEnd/>}/>
            <div className="w-full h-full">
                {
                    tabContents[params.tab]
                }
            </div>
        </div>
    );
}

export default RoadManageDetail;