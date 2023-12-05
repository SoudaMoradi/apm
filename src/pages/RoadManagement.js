import React, {useState} from 'react';
import {Chart} from "primereact/chart";
import {Button} from "primereact/button";
import ListEquipment from "./ListEquipment";
import {useNavigate,useParams} from "react-router-dom";
import {Menubar} from "primereact/menubar";
import RoadManageDetail from "./RoadManageDetail";


function RoadManagement(props) {
    const navigate=useNavigate();
    const params=useParams();
    const equipments=[
        {
            id:1 ,
            title:'دوربین های ثبت تخلف',
            contractor:'اختر نیروی نقش جهان',
            status:{active:70, inactive:30},
        },
        {
            id:2 ,
            title:'دوربین های نظارتی',
            contractor:'اختر نیروی نقش جهان',
            status:{active:1400, inactive:100},
        },
        {
            id:3 ,
            title:'دوربین های عکس برداری ثابت',
            contractor:'اختر نیروی نقش جهان',
            status:{active:1400, inactive:100},
        },
        {
            id:4 ,
            title:'تردد شماره ها',
            contractor:'اختر نیروی نقش جهان',
            status:{active:1400, inactive:100},
        },
        {
            id:5,
            title:'توزین حین حرکت',
            contractor:'اختر نیروی نقش جهان',
            status:{active:1400, inactive:100},
        },
        {
            id:6 ,
            title:'شبکه ارتباطی بیسیم',
            contractor:'اختر نیروی نقش جهان',
            status:{active:1400, inactive:100},
        },
        {
            id:7 ,
            title:'ردیاب ها',
            contractor:'اختر نیروی نقش جهان',
            status:{active:1400, inactive:100},
        },
        {
            id:8,
            title:'تابلوهای پیام متغیر خبری',
            contractor:'اختر نیروی نقش جهان',
            status:{active:1400, inactive:100},
        },
    ]

    const MyChart=({equipment})=>{

        const data = {
            labels: ['فعال شده','عیر فعال'],
            datasets: [
                {
                    data: [equipment.status.active,equipment.status.inactive],
                    backgroundColor: [
                        "#ff0000",
                        "#009227",
                    ]
                }],
        }
        const options = {

            aspectRatio:1,
            plugins: {
                legend: {
                    position:'bottom',
                    align:'right',
                    rtl:true,

                    labels: {
                        usePointStyle:true,
                        color: '#495057',
                        font: {
                            family: 'Shabnam-FD'
                        }
                    }
                }
            },
            cutout: 100,
            radius:'50%',
        };


        return (
            <div className="flex flex-column justify-content-center w-full flex-1 p-2 w-3 pt-5">
                <div className="border-1 border-round-3xl">
                    <span className="text-sm pt-5 pr-3 font-medium">{equipment.title}</span>
                    <Chart className="w-full" type="doughnut" data={data} options={options}/>
                    <div className="pt-3 pr-2">
                        <span className="text-sm font-medium">پیمانکار:{equipment.contractor}</span>
                    </div>
                    <div className="flex justify-content-end shadow-none">
                        <span className="p-button-text p-3 cursor-pointer text-primary-700 text-lg font-medium" onClick={()=>{navigate(`/roadmanagement/${equipment.id}/listequipment`)}}>ورود</span>
                    </div>
                </div>
            </div>
        )
    }

    return (
        <div className="flex justify-content-center align-items-center h-full">
            {
                params.id ?(
                    <RoadManageDetail/>
                ):(
                    <div className="w-9 flex flex-wrap">
                        {
                            equipments.map((e)=>(<MyChart equipment={e}/>))
                        }

                    </div>

                )
            }

        </div>
    );
}

export default RoadManagement;