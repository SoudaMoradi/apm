import React from 'react';
import {InputText} from "primereact/inputtext";
import {Avatar} from "primereact/avatar";

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

    return (
        <div className="flex h-full">
           <div className="w-3 border-left-1 border-gray-300 flex flex-column gap-5 h-full">
              <div className="flex justify-content-center pt-4">
                  <span className="p-input-icon-left">
                    <InputText className="w-14rem" placeholder="Search"/>
                </span>
                  <span className="pr-3 pt-3">
                   <i className="pi pi-plus-circle"/>
               </span>
              </div>
               <div className="flex-column flex gap-3 pl-3">
                   <div className="flex justify-content-center gap-3">
                       <i className="pi pi-users" style={{fontSize:"1.5rem"}}/>
                       <span>گروه همکاران مدیریت راهها</span>
                   </div>
                   <div className="flex justify-content-center align-items-center gap-3 pl-7">
                       <Avatar shape={"circle"} size={"large"} label=" ف م" className="text-sm bg-yellow-300"/>
                       <span> فرزین مرادی</span>
                   </div>
                   <div className="flex justify-content-center align-items-center gap-3 pl-5">
                       <Avatar shape={"circle"} size={"large"} label="م ر" className="text-sm bg-red-300"/>
                       <span>مسعود ریاحی نسب</span>
                   </div>
                   <div className="flex justify-content-center align-items-center gap-3 pl-7">
                       <Avatar shape={"circle"} size={"large"} label="ع م" className="text-sm bg-blue-300"/>
                       <span> عباس مزرعاوی</span>
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
        </div>
    );
}

export default Conversation;