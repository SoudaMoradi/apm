import React from 'react';
import {DataTable} from "primereact/datatable";
import {Column} from "primereact/column";

function Outbox(props) {


    const tableConent = [
        {
            id: 1,
            date: "1402/05/02",
            issue: "در مورد پروژه راهداری فایل پیوست آمده ....",
            receivedfrom: "مسعود ریاحی نسب",
            attachment: "",
        },
        {
            id: 2,
            date: "1402/05/02",
            issue: "در مورد پروژه راهداری فایل پیوست آمده ....",
            receivedfrom: "مسعود ریاحی نسب",
            attachment: "",
        },
        {
            id: 3,
            date: "1402/05/02",
            issue: "در مورد پروژه راهداری فایل پیوست آمده ....",
            receivedfrom: "مسعود ریاحی نسب",
            attachment: "پیوست",
        },
    ]

    return (
        <div className="w-full h-full">
            <DataTable value={tableConent}>
                <Column alignHeader={'center'} className="text-center" field="id" header=" ردیف "/>
                <Column alignHeader={'center'} className="text-center" field="date" header=" تاریخ ارسال"/>
                <Column alignHeader={'center'} className="text-center" field="issue" header=" موضوع"/>
                <Column alignHeader={'center'} className="text-center" field="receivedfrom" header="ارسال شده به"/>
                <Column alignHeader={'center'} className="text-center" field="attachment" header="پیوست " body={() => {
                    return <span><i className="pi pi-link" style={{'fontSize': '1.4em'}}/></span>
                }}/>
            </DataTable>
        </div>
    );


}

export default Outbox;