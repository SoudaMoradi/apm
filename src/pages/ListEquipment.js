import React, {useState} from 'react';
import { Accordion, AccordionTab } from 'primereact/accordion';

function ListEquipment(props) {
    return<div className="w-full">
        <div className="w-full">
            <Accordion className="w-full">
                <AccordionTab header="Header I">
                    <p>Lorem ipsum dolor sit amet</p>
                </AccordionTab>
                <AccordionTab header="Header II">
                    <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium,</p>
                </AccordionTab>
                <AccordionTab header="Header III">
                    <p>At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum</p>
                </AccordionTab>
            </Accordion>

        </div>

    </div>

}






export default ListEquipment;