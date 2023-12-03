import React, {useState} from 'react';
import {Avatar} from "primereact/avatar";
import {useNavigate} from "react-router-dom";



function MenuItem({icon,title,onClick,isExpanded}) {
    return (
        <div onClick={onClick} className="flex align-items-center gap-3 p-2 m-2 hover:bg-gray-300 border-round-lg cursor-pointer">
            <Avatar className="bg-transparent flex" icon={'pi '+icon}/>
            {isExpanded===true && <span className="font-bold">{title}</span>}
        </div>
    );
}

function Sidebar(props) {

    const navigate=useNavigate();
    const [isExpanded,setExpanded]=useState(true);


    const menus=[
        {icon:"pi-list" ,title:"کارهای من",path:"/",isExpanded:true},
        {icon:"pi-sort-alt" ,title:"مدیریت راهها",path:"/roadmanagement",isExpanded:true},
        {icon:"pi-table" ,title:"نقشه جامع",path:"/explore",isExpanded:true},
        {icon:"pi-briefcase" ,title:"اعتبارات",isExpanded:true},
        {icon:"pi-comments" ,title:"گزارش ها",path:"/messages",isExpanded:false},
        {icon:"pi-chart-bar" ,title:"انبار",isExpanded:true},
        {icon:"pi-cog" ,title:"تنظیمات",isExpanded:true},
        {icon:"pi-plus-circle" ,title:"ثبت تیکت",isExpanded:true},
        {icon:"pi-users" ,title:"گفتگو",isExpanded:true},
        {icon:"pi-envelope" ,title:"نامه ها",isExpanded:true},
        {icon:"pi-question" ,title:"راهنما",isExpanded:true},

    ]


    return (
        <div className={`flex flex-column ${isExpanded===true?'w-2':'w-fit'} bg-white h-full transition-transform transition-duration-500 border-right-1 border-blue-400`}>
            <div className="flex flex-1 flex-column gap-4">
                <span className="text-lg font-bold text-right pt-5 pr-3">راهیار</span>
                {/*<div className="flex justify-content-center mt-3 h-6rem">*/}
                {/*    {*/}
                {/*        isExpanded===true?(<img alt={'rahyar'} src={process.env.PUBLIC_URL+"/assets/image/instagram.png"} className="w-10rem"/>):(<Avatar className="bg-transparent" icon={'pi pi-instagram'}/>)*/}
                {/*    }*/}
                {/*</div>*/}
                <div className="flex-1">
                    {menus.slice(0,7).map((m)=>{return <MenuItem isExpanded={isExpanded} onClick={(e)=>{navigate(m.path); setExpanded(m.isExpanded)}} title={m.title} icon={m.icon}/>})}
                </div>
            </div>
            <div>
                {menus.slice(7,12).map((m)=>{return<MenuItem isExpanded={isExpanded}  onClick={(e)=>{navigate(m.path); setExpanded(m.isExpanded)}} title={m.title} icon={m.icon}/>})}

            </div>
            <MenuItem title={'محسن کجباف'} icon={'pi pi-user'} isExpanded={isExpanded}/>

        </div>
    );
}


export default Sidebar;