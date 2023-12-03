import React from 'react';
import {Chart} from "primereact/chart";
import {Button} from "primereact/button";


function RoadManagement(props) {

    const MyChart=()=>{
        let doneTasks = 2;
        let doingTasks = 3;


        const data = {
            labels: ['فعال شده','عیر فعال'],
            datasets: [
                {
                    data: [doneTasks, doingTasks],
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
                    <span className="text-sm pt-5 pr-3 font-medium">دوربین های ثبت تخلف</span>
                    <Chart className="w-full" type="doughnut" data={data} options={options}/>
                    <div className="pt-3 pr-2">
                        <span className="text-sm font-medium">پیمانکار:اختر نیروی نقش جهان</span>
                    </div>
                    <div className="flex justify-content-end shadow-none">
                        <span className="p-button-text p-3 cursor-pointer text-primary-700 text-lg font-medium" >ورود</span>
                    </div>
                </div>

            </div>
        )
    }



    return (
        <div className="flex justify-content-center align-items-center">
            <div className="w-9 flex flex-wrap">
                <MyChart/>
                <MyChart/>
                <MyChart/>
                <MyChart/>
                <MyChart/>
                <MyChart/>
                <MyChart/>
                <MyChart/>

            </div>
        </div>
    );
}

export default RoadManagement;