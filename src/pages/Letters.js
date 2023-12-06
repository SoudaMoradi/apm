import React, {useState} from 'react';
import {Menubar} from "primereact/menubar";
import Inpox from "./Inpox";
import Outbox from "./Outbox";
import Initials from "./Initials";
import {useNavigate, useParams} from "react-router-dom";
import ArchiveMessage from "./ArchiveMessage";
import {Button} from "primereact/button";
import {Dialog} from "primereact/dialog";
import {InputText} from "primereact/inputtext";
import {InputTextarea} from "primereact/inputtextarea";
import {Avatar} from "primereact/avatar";



function Letters(props) {

    const params = useParams();
    const navigate = useNavigate();
    const [showDialog, setShowDialog] = useState(false);

    const items = [
        {
            label: 'صندوق ورودی ', command: () => {
                navigate(`/letters/${params.id}/inpox`)
            },
        },
        {
            label: 'صندوق خروجی', command: () => {
                navigate(`/letters/${params.id}/outbox`)
            },
        },
        {
            label: 'پاراف ها', command: () => {
                navigate(`/letters/${params.id}/initials`)
            },

        },
        {
            label: 'پیام های آرشیو شده', command: () => {
                navigate(`/letters/${params.id}/archiveMessage`)
            },
        },
    ]

    function MenubarEnd() {
        return <div className="flex justify-content-end pl-5 gap-2">
            <span className="pi pi-filter"/>
            <span className="font-bold">فیلتر نامه ها</span>
        </div>;
    }

    const tabContents = {
        inpox: <Inpox/>,
        outbox: <Outbox/>,
        initials: <Initials/>,
        archiveMessage: <ArchiveMessage/>,

    }


    return (
        <div className="flex h-full flex-column">
            <div className="flex h-full flex-column">
                <div className="p-3"><span className="font-bold text-xl">کارتابل</span></div>

                <Menubar className="flex justify-content-center w-full text-lg bg-transparent border-none font-medium bg-blue-200"
                         model={items} start={<></>} end={<MenubarEnd/>}/>
                <div className="w-full h-full">
                    {
                        tabContents[params.tab]
                    }
                </div>
            </div>
            <div className="border-top-1 border-gray-300 pr-3 pt-3 pb-3">
                <Button className="p-button-success" onClick={()=>{setShowDialog(true)}} label={'ایجاد نامه جدید'} icon="pi pi-plus" iconPos="left" style={{width:"12rem"}}/>
            </div>
            <Dialog visible={showDialog} onHide={() => {setShowDialog(false)}} className="w-4 rtl">
                <div className="flex flex-column gap-3">
                    <span>ارسال پیام </span>
                    <InputText className="p-button-text" label={ 'موضوع'}/>
                    <InputText className="p-button-text"/>
                    <span>متن</span>
                    <InputTextarea/>
                    <div className="flex gap-2">
                        <i className="pi pi-link"/>
                        <span>بارگذاری پیوست جدید</span>
                    </div>
                    <div className="flex gap-2">
                        <Avatar/>
                        <Avatar/>
                        <Avatar/>
                        <Avatar/>
                    </div>
                    <div className="flex justify-content-end gap-2">
                        <Button className="p-button-outlined w-6rem" label={'لغو'}/>
                        <Button className="p-button-outlined w-6rem" label={'ارسال'}/>
                    </div>
                </div>

            </Dialog>
        </div>
    );
}

export default Letters;