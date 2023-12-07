import React, {useRef, useState} from 'react';
import {InputText} from "primereact/inputtext";
import {Avatar} from "primereact/avatar";
import {Dialog} from "primereact/dialog";
import {Menu} from "primereact/menu";


function ChatContent(props) {
    switch (props.type){
        case 'DATETIME':return<div className="flex justify-content-center">{props.text}</div>
        case 'CHAT':return<div className={`flex p-2 w-full ${props.user===1?'justify-content-start':'justify-content-end'}`}>
            <div className={`${props.user===1?'bg-yellow-300':'bg-blue-300'} flex flex-column justify-content-center align-items-center p-3 border-1 border-round-2xl w-1.2rem`} style={{width:'10rem',height:'4rem'}}>
                <span>سلام چطوری ؟</span>
                <div className="pr-8 pt-2">
                    <span className="text-xs">21:13</span>
                </div>
            </div>

        </div>
    }

}

function Conversation(props) {

    const [showDialogPlusUp,setShowDialogPlusUp]=useState(false);
    const [showDialogMessage,setShowDialogMessage]=useState(false);
    const itempopup=[
        {
            label:" پیام جدید" ,
            icon:"pi pi-user",
            className:"w-full flex gap-2",
            template:(item,options)=>{return<div className={`w-full p-2 flex align-items-center gap-2 pr-3 ${options.className}`}><i className={item.icon}/><span>{item.label}</span></div>},
            command:()=>{
                setShowDialogMessage(true)
            }
        },
        {
            label:"گروه جدید",
            icon:"pi pi-users",
            className: "w-full flex gap-2",
            template:(item,options)=>{return<div className={`w-full p-2 flex align-items-center gap-2 pr-3 ${options.className}`}><i className={item.icon}/><span>{item.label}</span></div>},

        },
        {
            icon:"pi pi-users",
            label:"کانال جدید",
            className: "w-full flex gap-2",
        },
    ]
    const createChatMenu=useRef()



    return (
        <div className="flex h-full">
           <div className="border-left-1 border-gray-300 flex flex-column gap-5 h-full" style={{width:"21rem"}}>
              <div className="flex justify-content-center pt-4">
                  <span className="p-input-icon-left">
                    <InputText className="w-12rem" placeholder="Search"/>
                </span>
                  <span className="pr-3 pt-3">
                      <i className="pi pi-plus-circle" onClick={(event) => createChatMenu.current.toggle(event)}/>
                      <Menu popup ref={createChatMenu} model={itempopup} className="rtl"/>
               </span>
              </div>
               <div className="flex-column flex gap-3 pl-3 w-full">
                   <div className="pl-6 flex justify-content-center flex-column gap-2 pr-3 w-full">
                       <div className="flex gap-2 align-items-center w-full">
                           <Avatar shape={"circle"} size={"large"} label={'گ م'} className="text-sm bg-primary"/>
                           <span className="text-sm">گروه همکاران مدیریت راهها</span>
                       </div>
                       <div className="flex gap-2 align-items-center w-full">
                           <Avatar shape={"circle"} size={"large"} label=" ف م" className="text-sm bg-yellow-300"/>
                           <span className="text-sm"> فرزین مرادی</span>
                       </div>
                       <div className="flex gap-2 align-items-center w-full">
                           <Avatar shape={"circle"} size={"large"} label="م ر" className="text-sm bg-red-300"/>
                           <span className="text-sm">مسعود ریاحی نسب</span>
                       </div>
                       <div className="flex gap-2 align-items-center w-full">
                           <Avatar shape={"circle"} size={"large"} label="ع م" className="text-sm bg-blue-300"/>
                           <span className="text-sm"> عباس مزرعاوی</span>
                       </div>
                   </div>
               </div>
           </div>
           <div className="w-9 flex flex-column">
               <div className="flex justify-content-start align-items-center p-5 gap-2 border-bottom-1 border-gray-300">
                   <Avatar shape={"circle"} size={"large"} label=" ف م" className="text-sm bg-yellow-300"/>
                   <div className="flex flex-column justify-content-center gap-1">
                       <span className="text-sm"> فرزین مرادی</span>
                       <span className="text-xs">آخرین بازدید 2 ساعت قبل </span>
                   </div>
               </div>
               <div className="flex-1">
                   <ChatContent type={'DATETIME'} text={'سه شنبه 14 آذر'} />
                   <ChatContent type={'CHAT'} text={'سلام چطوری؟'} user={1}/>
                   <ChatContent type={'CHAT'} text={'سلام چطوری؟'} user={2}/>
                   <ChatContent type={'CHAT'} text={'سلام چطوری؟'} user={1}/>
                   <ChatContent type={'CHAT'} text={'سلام چطوری؟'} user={2}/>
                   <ChatContent type={'CHAT'} text={'سلام چطوری؟'} user={2}/>
                   <ChatContent type={'CHAT'} text={'سلام چطوری؟'} user={2}/>
               </div>
               <div className="flex p-3 border-top-1 border-gray-300">
                   <InputText className="flex-1 p-button-rounded"/>
                   <div className="flex w-2 justify-content-center align-items-center gap-3">
                       <i className="pi pi-reddit" style={{'fontSize': '1.5em'}}/>
                       <i className="pi pi-paperclip" style={{'fontSize': '1.5em'}}/>
                       <i className="pi pi-send" style={{'fontSize': '1.5em'}}/>
                   </div>
               </div>
           </div>
            <Dialog visible={showDialogMessage} onHide={()=>{setShowDialogMessage(false)}} className="rtl w-4" dismissableMask closable={false}>
                <div className="flex gap-3 flex-column">
                    <span className="font-bold">جهت ارسال پیام خصوصی یک نفر را انتخاب کنید:</span>
                    <div className="flex gap-2 align-items-center">
                        <Avatar shape={"circle"} size={"small"} label={'ر م'} />
                        <div className="flex justify-content-between w-full">
                            <span>رها مرادی</span>
                            <span className="text-gray-600 text-xs">آخرین بازدید 2 ساعت قبل</span>
                        </div>
                    </div>
                    <div className="flex gap-2 align-items-center">
                        <Avatar shape={"circle"} size={"small"} label={'ف م'} className="text-sm bg-primary-300"/>
                        <div className="flex justify-content-between w-full">
                            <span>فرزین مرادی</span>
                            <span className="text-gray-600 text-xs">آنلاین</span>
                        </div>
                    </div>
                    <div className="flex gap-2 align-items-center">
                        <Avatar shape={"circle"} size={"small"} label={'ب ا'} className="text-sm bg-green-300" />
                        <div className="flex justify-content-between w-full">
                            <span>بهاره افشاری</span>
                            <span className="text-gray-600 text-xs">آخرین بازدید 2 روز پیش</span>
                        </div>
                    </div>
                    <div className="flex gap-2 align-items-center">
                        <Avatar shape={"circle"} size={"small"} label={'ا ص'} className="text-sm bg-yellow-300"/>
                        <div className="flex justify-content-between w-full">
                            <span>احمد صالحی</span>
                            <span className="text-gray-600 text-xs">آخرین بازدید 6 دقیقه قبل</span>
                        </div>
                    </div>
                    <div className="flex gap-2">
                        <i className="pi pi-plus-circle" style={{fontSize:'1.2rem'}}/>
                        <span className="text-sm font-bold">دعوت عضو جدید</span>
                    </div>
                </div>
            </Dialog>

            <Dialog>
                <div>
                    <span>ایجاد گروه جدید</span>
                </div>
            </Dialog>

        </div>
    );
}

export default Conversation;