import React, {useState} from 'react';
import { Accordion, AccordionTab } from 'primereact/accordion';
import {DataTable} from "primereact/datatable";
import {Column} from "primereact/column";
import {Checkbox} from "primereact/checkbox";
import {ProgressBar} from "primereact/progressbar";
import {Button} from "primereact/button";
import {Dialog} from "primereact/dialog";
import { TabView, TabPanel } from 'primereact/tabview';
import {useNavigate} from "react-router-dom";
import {assetImage} from "../Config";
import {Dropdown} from "primereact/dropdown";


function ListEquipment(props) {

    const navigate = useNavigate();

    const [showDialog, setShowDialog] = useState(false);
    const [data, setData] = useState([
        {
            header: "ثبت تخلف محور اهواز -ایذه  کیلومتر9",
            tableData: [
                {
                    id: 1,
                    title: 'دستور کار شماره 1',
                    level: 'مهم',
                    province: 'خوزستان',
                    location: 'موقعیت',
                    name: 'نام',
                    model: 'مونوپل',
                    manufacture: 'شرکت سازنده',
                    deviceClass: 'کلاس تجهیز',
                    serialNumber: 'شماره سریال',
                    contractor: 'پیمانکار نگهداشت',
                    status: 'active',
                    health: 89,
                },
                {
                    id: 2,
                    title: 'دستور کار شماره 1',
                    level: 'مهم',
                    province: 'خوزستان',
                    location: 'موقعیت',
                    name: 'نام',
                    model: 'مونوپل',
                    manufacture: 'شرکت سازنده',
                    deviceClass: 'کلاس تجهیز',
                    serialNumber: 'شماره سریال',
                    contractor: 'پیمانکار نگهداشت',
                    status: 'وضعیت',
                    health: 96,
                },
                {
                    id: 3,
                    title: 'دستور کار شماره 1',
                    level: 'مهم',
                    province: 'خوزستان',
                    location: 'موقعیت',
                    name: 'نام',
                    model: 'مونوپل',
                    manufacture: 'شرکت سازنده',
                    deviceClass: 'کلاس تجهیز',
                    serialNumber: 'شماره سریال',
                    contractor: 'پیمانکار نگهداشت',
                    status: 'وضعیت',
                    health: 78,
                },
                {
                    id: 4,
                    title: 'دستور کار شماره 1',
                    level: 'مهم',
                    province: 'خوزستان',
                    location: 'موقعیت',
                    name: 'نام',
                    model: 'مونوپل',
                    manufacture: 'شرکت سازنده',
                    deviceClass: 'کلاس تجهیز',
                    serialNumber: 'شماره سریال',
                    contractor: 'پیمانکار نگهداشت',
                    status: 'وضعیت',
                    health: 78,
                },
            ]
        },
        {
            header: "ثبت تخلف محور اهواز -دزفول کیلومتر20",
            tableData: [
                {
                    id: 1,
                    title: 'دستور کار شماره 1',
                    level: 'مهم',
                    province: 'خوزستان',
                    location: 'موقعیت',
                    name: 'نام',
                    model: 'مونوپل',
                    manufacture: 'شرکت سازنده',
                    deviceClass: 'کلاس تجهیز',
                    serialNumber: 'شماره سریال',
                    contractor: 'پیمانکار نگهداشت',
                    status: 'وضعیت',
                    health: 89,
                }
            ]
        },
        {
            header: "ثبت تخلف محور اهواز -شوشتر  کیلومتر12",
            tableData: [
                {
                    id: 1,
                    title: 'دستور کار شماره 1',
                    level: 'مهم',
                    province: 'خوزستان',
                    location: 'موقعیت',
                    name: 'نام',
                    model: 'مونوپل',
                    manufacture: 'شرکت سازنده',
                    deviceClass: 'کلاس تجهیز',
                    serialNumber: 'شماره سریال',
                    contractor: 'پیمانکار نگهداشت',
                    status: 'وضعیت',
                    health: 89,
                }
            ]
        },
        {
            header: "ثبت تخلف محور سوسنگرد -شوشتر  کیلومتر15",
            tableData: [
                {
                    id: 1,
                    title: 'دستور کار شماره 1',
                    level: 'مهم',
                    province: 'خوزستان',
                    location: 'موقعیت',
                    name: 'نام',
                    model: 'مونوپل',
                    manufacture: 'شرکت سازنده',
                    deviceClass: 'کلاس تجهیز',
                    serialNumber: 'شماره سریال',
                    contractor: 'پیمانکار نگهداشت',
                    status: 'وضعیت',
                    health: 89,
                }
            ]
        },
    ]);

    const qrList = [
        {
            fileName: 'Qr.png',
        },
        {
            fileName: 'Qr.png',
        },
        {
            fileName: 'Qr.png',
        },
        {
            fileName: 'Qr.png',
        },
        {
            fileName: 'Qr.png',
        },
        {
            fileName: 'Qr.png',
        },
        {
            fileName: 'Qr.png',
        },
        {
            fileName: 'Qr.png',
        },
        {
            fileName: 'Qr.png',
        },
        {
            fileName: 'Qr.png',
        },
    ]
    const activeation = [
        {
            label: 'فعال',
            value: 'active'

        },
        {
            label: 'غیرفعال',
            value: 'inactive'

        },
    ]


    return (
        <div className="w-full flex justify-content-center align-items-center h-full">
            <div className="w-10">
                <Accordion className="w-full bg-primary-200" multiple collapseIcon={' '} expandIcon={' '}>
                    {
                        data.map((d) => (
                            <AccordionTab headerTemplate={<div
                                className="flex justify-content-center align-items-center w-full gap-3">
                                <span>{d.header}</span><span
                                className="w-3rem bg-yellow-300 text-center text-lg border-round">{d.tableData.length}</span>
                            </div>}>
                                <div className="w-full h-full">
                                    <DataTable value={d.tableData}>
                                        <Column alignHeader={'center'} className="text-center" body={() => {
                                            return (
                                                <div className="flex gap-2">
                                                    <span className="pi pi-trash"/>
                                                    <span className="pi pi-pencil"/>
                                                </div>
                                            )
                                        }}/>
                                        <Column alignHeader={'center'} className="text-center" field="id"
                                                header=" ردیف "/>
                                        <Column alignHeader={'center'} className="text-center" field="province"
                                                header="استان"/>
                                        <Column alignHeader={'center'} className="text-center" field="location"
                                                header="موقعیت "/>
                                        <Column alignHeader={'center'} className="text-center" field="name"
                                                header="  نام  "/>
                                        <Column alignHeader={'center'} className="text-center" field="model"
                                                header="مدل"/>
                                        <Column alignHeader={'center'} className="text-center" field="manufacture"
                                                header=" شرکت سازنده "/>
                                        <Column alignHeader={'center'} className="text-center" field="deviceClass"
                                                header="کلاس تجهیز"/>
                                        <Column alignHeader={'center'} className="text-center" field="serialNumber"
                                                header="  شماره سریال "/>
                                        <Column alignHeader={'center'} className="text-center" field="contractor"
                                                header="پیمانکار نگهداشت"/>
                                        <Column alignHeader={'center'} className="text-center" field="status" header=" وضعیت" body={(item) => {return <div><Dropdown className="w-8rem" options={activeation} value={item.status}/></div>
                                        }}/>
                                        <Column alignHeader={'center'} className="text-center" body={(item) => {
                                            return <div><ProgressBar value={item.health}/></div>
                                        }} header=" سلامت"/>
                                        <Column alignHeader={'center'} className="text-center" body={(item) => {
                                            return <div><Button className="p-button-text text-green-600" label={'مشاهده جزییات'} onClick={()=>{setShowDialog(true)}}/></div>}}/>
                                    </DataTable>
                                </div>
                            </AccordionTab>

                        ))
                    }

                </Accordion>
            </div>
            <Dialog visible={showDialog} onHide={() => {setShowDialog(false)}} className="w-7 rtl" closable={false} showHeader={false}>
                <div className="flex h-full">
                    <div className="flex flex-column border-left-2  flex-1">
                        <div className="border-bottom-3 flex flex-column justify-content-center align-items-center">
                            <img alt={'Qr.png'} src={process.env.PUBLIC_URL + "/assets/image/Qr.png"}
                                 className="w-6rem"/>
                            <div className="flex justify-content-center">
                                <span className="text-sm">دوریبن ثبت تخلف</span>
                            </div>
                        </div>
                        <div className="flex flex-wrap pt-2 justify-content-center overflow-auto h-14rem">
                            {
                                qrList.map((qr) => (
                                    <img alt={"Qr.png"} src={process.env.PUBLIC_URL + `/assets/image/${qr.fileName}`}
                                         className="w-4rem"/>
                                ))
                            }
                        </div>
                    </div>
                    <div className="w-10 h-25rem">
                        <TabView className="flex flex-column">
                            <TabPanel className="flex gap-3" header="اطلاعات تجهیز">
                                <div className="w-4 flex flex-column">
                                    <div className="w-full border-1">
                                        <span className="w-4 pr-2">نام </span>
                                        <span className="flex-1 border-right-1 pr-2">دستگاه شماره یک</span>
                                    </div>
                                    <div className="w-full border-1">
                                        <span className="w-4 pr-2">پیمانکار نگهداشت </span>
                                        <span className="flex-1 border-right-1 pr-2">دستگاه شماره دو</span>
                                    </div>
                                    <div className="w-full border-1">
                                        <span className="w-4 pr-2">نام </span>
                                        <span className="flex-1 border-right-1 pr-2">دستگاه شماره سه</span>
                                    </div>
                                    <div className="w-full border-1">
                                        <span className="w-4 pr-2">نام </span>
                                        <span className="flex-1 border-right-1 pr-2">دستگاه شماره چهار</span>
                                    </div>
                                    <div className="w-full border-1">
                                        <span className="w-4 pr-2">نام </span>
                                        <span className="flex-1 border-right-1 pr-2">دستگاه شماره پنج</span>
                                    </div>
                                </div>
                                <div className="w-4 flex flex-column">
                                    <div className="w-full border-1">
                                        <span className="w-4 pr-2">نام </span>
                                        <span className="flex-1 border-right-1 pr-2">دستگاه شماره یک</span>
                                    </div>
                                    <div className="w-full border-1">
                                        <span className="w-4 pr-2">نام </span>
                                        <span className="flex-1 border-right-1 pr-2">دستگاه شماره یک</span>
                                    </div>
                                    <div className="w-full border-1">
                                        <span className="w-4 pr-2">نام </span>
                                        <span className="flex-1 border-right-1 pr-2">دستگاه شماره یک</span>
                                    </div>
                                    <div className="w-full border-1">
                                        <span className="w-4 pr-2">نام </span>
                                        <span className="flex-1 border-right-1 pr-2">دستگاه شماره یک</span>
                                    </div>
                                    <div className="w-full border-1">
                                        <span className="w-4 pr-2">نام </span>
                                        <span className="flex-1 border-right-1 pr-2">دستگاه شماره یک</span>
                                    </div>
                                </div>
                                <div
                                    className="w-4 w-18rem h-16rem flex justify-content-center align-items-center border-1">
                                    <img alt={'map-iran.jpg'} className="w-full"
                                         src={assetImage.replace("{{IMAGE}}", "map-iran.jpg")}/>
                                </div>
                            </TabPanel>
                            <TabPanel header="متعلقات">
                                متعلقات
                            </TabPanel>
                            <TabPanel header="سوابق تعمیر">
                                سوابق تعمیر
                            </TabPanel>
                            <TabPanel header="سوابق وضعیت">
                                سوابق وضعیت
                            </TabPanel>
                            <TabPanel header=" سوابق انتقال">
                                سوابق انتقال
                            </TabPanel>
                            <TabPanel header="  سوابق بازدید">
                                سوابق بازدید
                            </TabPanel>
                            <TabPanel header=" سوابق هزینه">
                                سوابق هزینه
                            </TabPanel>
                        </TabView>
                        <div className="flex justify-content-end align-items-end gap-2">
                            <Button className="w-8rem p-button-outlined" label={'لغو'} onClick={(e) => {
                                setShowDialog(false)
                            }}/>
                            <Button className="w-8rem p-button-info" label={'ثبت'}/>
                        </div>
                    </div>
                </div>
            </Dialog>

        </div>
    )
}






export default ListEquipment;