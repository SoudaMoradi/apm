import React, {useState} from 'react';
import {Menubar} from "primereact/menubar";
import Inpox from "./Inpox";
import Outbox from "./Outbox";
import Initials from "./Initials";
import {useNavigate} from "react-router-dom";
import ArchiveMessage from "./ArchiveMessage";
import {Button} from "primereact/button";
import {Dialog} from "primereact/dialog";
import {InputText} from "primereact/inputtext";
import {InputTextarea} from "primereact/inputtextarea";
import {Avatar} from "primereact/avatar";



function Letters(props) {

    const[tab,setTab]=useState('inpox');
    const navigate = useNavigate();
    const [showDialog, setShowDialog] = useState(false);

    const items = [
        {
            label: 'صندوق ورودی ',
            command: () => {setTab(`inpox`)},
            className:`border-round text-lg shadow-none ${tab==='inpox' && 'bg-orange-400'}`

        },
        {
            label: 'صندوق خروجی', command: () => {setTab(`outbox`)},
            className:`border-round shadow-none text-lg ${tab==='outbox'&& 'bg-orange-400'}`
        },
        {
            label: 'پاراف ها', command: () => {setTab(`initials`)},
            className:`border-round shadow-none text-lg ${tab==='initials'&& 'bg-orange-400'}`


        },
        {
            label: 'پیام های آرشیو شده', command: () => {setTab(`archiveMessage`)},
            className:`border-round shadow-none text-lg ${tab==='archiveMessage'&& 'bg-orange-400'}`
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
                <div className="flex justify-content-center">
                    <span className="font-bold text-3xl p-3">کارتابل</span>
                </div>
                <Menubar className="flex justify-content-center w-full text-sm bg-transparent pr-6" model={items} end={<MenubarEnd/>}/>
                <div className="w-full h-full text-lg">
                    {
                        tabContents[tab]
                    }
                </div>
            </div>
            <div className="flex justify-content-end pb-4 pl-4">
                <Button className="p-button-text text-white pl-5 text-lg" onClick={()=>{setShowDialog(true)}} label={'ایجاد نامه جدید'} icon="pi pi-plus-circle" size={'large'} iconPos="left" style={{width:"15rem",background:"#2F37FF",borderRadius:'15px'}}/>
            </div>
            <Dialog visible={showDialog} onHide={() => {setShowDialog(false)}} className="w-4 rtl" closable={false} showHeader={true}>
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
                        <Button className="p-button-outlined w-6rem" label={'لغو'} onClick={(e)=>{setShowDialog(false)}}/>
                        <Button className="p-button-outlined w-6rem" label={'ارسال'}/>
                    </div>
                </div>

            </Dialog>
        </div>
    );
}

export default Letters;