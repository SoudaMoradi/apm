import React, {useRef, useState} from 'react';
import {InputText} from "primereact/inputtext";
import {Avatar} from "primereact/avatar";
import {Dialog} from "primereact/dialog";
import {Menu} from "primereact/menu";
import {Button} from "primereact/button";


function ChatContent(props) {
    switch (props.type){
        // case 'DATETIME':return<div className="flex justify-content-center">{props.text}</div>
        case 'CHAT':return<div className={`flex p-2 w-full ${props.user===1?'justify-content-start':'justify-content-end'}`}>
            <div className={`flex flex-column justify-content-end align-items-end border-1 border-round-2xl text-white line-height-4 p-3 w-7`} style={{backgroundColor:`${props.user===1?'#0007A9':'#2F37FF'}`}}>
                <span>{props.text}</span>
                <div className="flex">
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
           <div className="border-left-1 border-gray-300 flex flex-column justify-content-between gap-5 h-full w-22rem">
              <div className="flex flex-column">
                  <div className="p-input-icon-left flex justify-content-center pt-7">
                          <InputText className="w-15rem border-round-xl p-3" placeholder="جستجو"/>
                      </div>
                  <div className="flex-column flex gap-3 w-full">
                      <div className="flex justify-content-center flex-column gap-2 pr-6 pt-4">

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

                  {/*<div className="pr-3 flex align-items-start ">*/}
                  {/*    <i className="pi pi-plus-circle" onClick={(event) => createChatMenu.current.toggle(event)}/>*/}
                  {/*    <Menu popup ref={createChatMenu} model={itempopup} className="rtl"/>*/}
                  {/*</div>*/}
              </div>
               <div className="flex justify-content-center pb-3 p-button-icon-left">
                   <Button className="w-16rem text-xl p-3" icon="pi pi-plus-circle"  label={'افزودن گفتگو'} style={{backgroundColor:"#2F37FF",borderRadius:'15px'}}/>
               </div>
           </div>
           <div className="flex-1 flex flex-column p-3">
               <div className="flex justify-content-center text-4xl font-bold pt-4">
                   <span>گفتگو ها</span>
               </div>
               {/*<div className="flex justify-content-start align-items-center p-5 gap-2 border-bottom-1 border-gray-300">*/}
               {/*    <Avatar shape={"circle"} size={"large"} label=" ف م" className="text-sm bg-yellow-300"/>*/}
               {/*    <div className="flex flex-column justify-content-center gap-1">*/}
               {/*        <span className="text-sm"> فرزین مرادی</span>*/}
               {/*        <span className="text-xs">آخرین بازدید 2 ساعت قبل </span>*/}
               {/*    </div>*/}
               {/*</div>*/}
               <div className="flex-1">
                   <ChatContent type={'DATETIME'} text={'سه شنبه 14 آذر'} />
                   <ChatContent type={'CHAT'} text={'لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم استلورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم استلورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. '} user={1}/>
                   <ChatContent type={'CHAT'} text={'لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم استلورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم استلورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. '} user={2}/>
               </div>
               <div className="flex justify-content-center align-items-center gap-3 pr-3 pb-5">
                   <div className="flex flex-1 bg-white border-round-2xl p-2">
                       <InputText className="flex-1 bg-transparent shadow-none outline-none border-none" placeholder={'متن خود را وارد کنید ...'}/>
                       <Button className="flex justify-content-center align-items-center w-3rem text-white p-button-text" icon="pi pi-send" style={{background:"#F58500",borderRadius:'13px'}}/>
                   </div>
                   <Button className="flex justify-content-center align-items-center p-button-text bg-white text-orange-500 p-3" icon="pi pi-paperclip" size={'large'} style={{borderRadius:'13px'}}/>
                   <Button className="flex justify-content-center align-items-center p-button-text bg-white text-orange-500 p-3" icon="pi pi-reddit" size={"large"} style={{borderRadius:'13px'}}/>
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
        </div>
    );
}

export default Conversation;