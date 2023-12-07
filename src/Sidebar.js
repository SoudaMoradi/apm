import React, {useState} from 'react';
import {Avatar} from "primereact/avatar";
import {useNavigate,useLocation} from "react-router-dom";



function MenuItem({icon,title,onClick,isExpanded,active,iconLabel}) {
    return (
        <div onClick={onClick} className={`flex align-items-center gap-3 m-2 ${active && 'bg-gray-200'} hover:bg-gray-300 border-round-lg cursor-pointer`}>
            <Avatar className={`flex ${!iconLabel ?'bg-transparent':'bg-green-300 text-lg'}`} size={'large'} shape={"circle"}  icon={'pi '+icon} label={iconLabel}/>
            {isExpanded===true && <span className="font-bold">{title}</span>}
        </div>
    );
}

function Sidebar(props) {

    const navigate=useNavigate();
    const [isExpanded,setExpanded]=useState(true);
    const location=useLocation();


    const menus=[
        {icon:"pi-check-square" ,title:"کارهای من",path:"/",isExpanded:true},
        {icon:"pi-sort-alt" ,title:"مدیریت راهها",path:"/roadmanagement",isExpanded:true},
        {icon:"pi-map" ,title:"نقشه جامع",path:"/map",isExpanded:true},
        {icon:"pi-briefcase" ,title:"اعتبارات",path:"/credits",isExpanded:true},
        {icon:"pi-file" ,title:"گزارش ها",path:"/reports",isExpanded:false},
        {icon:"pi-database" ,title:"انبار",path:"/Store",isExpanded:true},
        {icon:"pi-cog" ,title:"تنظیمات",path:"/setting", isExpanded:true},
        {icon:"pi-plus-circle" ,title:"ثبت تیکت",isExpanded:true},
        {icon:"pi-comments" ,title:"گفتگو",path:"/conversation",isExpanded:true},
        {icon:"pi-envelope" ,title:"نامه ها",path:"/letters", isExpanded:true},
        {icon:"pi-exclamation-circle" ,title:"راهنما",isExpanded:true},
        {icon:"pi-bell" ,title:"اعلانات",isExpanded:true},

    ]


    return (
        <div className={`flex flex-column ${isExpanded===true?'w-2':'w-fit'} bg-white h-full transition-transform transition-duration-500 border-right-1 border-blue-400 text-sm`}>
            <div className="flex flex-1 flex-column gap-2">
                <span className="text-2xl font-bold text-center pt-3 pl-7 pb-3 border-bottom-3">راهیار</span>
                <div className="flex-1">
                    {menus.slice(0,7).map((m)=>{return <MenuItem active={location.pathname===m.path} isExpanded={isExpanded} onClick={(e)=>{navigate(m.path); setExpanded(m.isExpanded)}} title={m.title} icon={m.icon}/>})}
                </div>
            </div>
            <div>
                {menus.slice(7,12).map((m)=>{return<MenuItem active={location.pathname===m.path} isExpanded={isExpanded}  onClick={(e)=>{navigate(m.path); setExpanded(m.isExpanded)}} title={m.title} icon={m.icon}/>})}

            </div>
            <MenuItem title={'محسن کجباف'} iconLabel={'م ک'} isExpanded={isExpanded}/>

        </div>
    );
}


export default Sidebar;