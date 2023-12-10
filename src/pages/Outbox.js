import React from 'react';
import {DataTable} from "primereact/datatable";
import {Column} from "primereact/column";

function Outbox(props) {


    const tableConent=[
        {
            id:1,
            date:"1402/05/02",
            issue:"در مورد پروژه راهداری فایل پیوست آمده ....",
            receivedfrom:"مسعود ریاحی نسب",
            attachment:"",
        },
        {
            id:2,
            date:"1402/05/02",
            issue:"در مورد پروژه راهداری فایل پیوست آمده ....",
            receivedfrom:"مسعود ریاحی نسب",
            attachment:"",
        },
        {
            id:3,
            date:"1402/05/02",
            issue:"در مورد پروژه راهداری فایل پیوست آمده ....",
            receivedfrom:"مسعود ریاحی نسب",
            attachment:"پیوست",
        },
    ]

    return (
        <div className="w-full h-full pt-6">
            <DataTable tableClassName="bg-red-300" className="shadow-none text-lg" value={tableConent}>
                <Column alignHeader={'center'} headerClassName="border-bottom-1 border-gray-900 bg-white" className="text-center border-none " field="id" header=" ردیف "/>
                <Column alignHeader={'center'} headerClassName="border-bottom-1 border-gray-900 bg-white" className="text-center border-none" field="date" header=" تاریخ دریافت"/>
                <Column alignHeader={'center'} headerClassName="border-bottom-1 border-gray-900 bg-white" className="text-center border-none" field="issue" header=" موضوع"/>
                <Column alignHeader={'center'} headerClassName="border-bottom-1 border-gray-900 bg-white" className="text-center border-none" field="receivedfrom" header="دریافت شده از"/>
                <Column alignHeader={'center'} headerClassName="border-bottom-1 border-gray-900 bg-white" className="text-center border-none" field="attachment" header="پیوست " body={()=>{return<span><i className="pi pi-link" style={{'fontSize': '1.4em'}}/></span>}}/>
            </DataTable>
        </div>
    );
}

export default Outbox;