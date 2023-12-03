import React, {useState} from 'react';
import {Avatar} from "primereact/avatar";
import {useNavigate} from "react-router-dom";



function MenuItem({icon,title,onClick,isExpanded}) {
    return (
        <div onClick={onClick} className="flex align-items-center gap-3 p-2 m-2 hover:bg-gray-300 border-round-lg cursor-pointer">
            <Avatar className="bg-transparent" icon={'pi '+icon}/>
            {isExpanded===true && <span>{title}</span>}
        </div>
    );
}

function Sidebar(props) {

    const navigate=useNavigate();
    const [isExpanded,setExpanded]=useState(false);


    // const menus={
    //     top:[
    //         {icon:"home" ,title:"Home"},
    //         {icon:"home" ,title:"Home"},
    //         {icon:"home" ,title:"Home"},
    //         {icon:"home" ,title:"Home"},
    //         {icon:"home" ,title:"Home"},
    //         {icon:"home" ,title:"Home"},
    //         {icon:"home" ,title:"Home"},
    //         {icon:"home" ,title:"Home"},
    //     ],
    //     bottom:[
    //         {icon:"home" ,title:"Home"},
    //         {icon:"home" ,title:"Home"}
    //     ]
    // }

    const menus=[
        {icon:"pi-home" ,title:"Home",path:"/",isExpanded:true},
        {icon:"pi-search" ,title:"Search",path:"/search",isExpanded:false},
        {icon:"pi-compass" ,title:"Explore",path:"/explore",isExpanded:true},
        {icon:"pi-video" ,title:"Reels",isExpanded:true},
        {icon:"pi-send" ,title:"Messages",path:"/messages",isExpanded:false},
        {icon:"pi-heart" ,title:"Notifications",isExpanded:true},
        {icon:"pi-plus-circle" ,title:"Create",isExpanded:true},
        {icon:"home" ,title:"Profile",isExpanded:true},
        {icon:"pi-at" ,title:"Threads",isExpanded:true},
        {icon:"pi-list" ,title:"More",isExpanded:true},
    ]


    return (
        <div className={`flex flex-column ${isExpanded===true?'w-2':'w-fit'} transition-transform transition-duration-500 border-right-1 border-gray-400`}>
            <div className="flex-1 flex flex-column gap-4">
                <div className="flex justify-content-center mt-3 h-6rem">
                    {
                        isExpanded===true?(<img alt={'instagramlogo'} src={process.env.PUBLIC_URL+"/assets/image/instagram.png"} className="w-10rem"/>):(<Avatar className="bg-transparent" icon={'pi pi-instagram'}/>)
                    }

                </div>
                <div className="flex-1">
                    {menus.slice(0,7).map((m)=>{return <MenuItem isExpanded={isExpanded}  onClick={(e)=>{navigate(m.path); setExpanded(m.isExpanded)}} title={m.title} icon={m.icon}/>})}
                </div>
            </div>
            <div>
                {menus.slice(8,10).map((m)=>{return<MenuItem isExpanded={isExpanded}  onClick={(e)=>{navigate(m.path); setExpanded(m.isExpanded)}} title={m.title} icon={m.icon}/>})}
            </div>

        </div>
    );
}



export default Sidebar;