import React, {useState} from 'react';
import { Accordion, AccordionTab } from 'primereact/accordion';

function ListEquipment(props) {

}
    export const AccordionDemo = () => {

        const [activeIndex, setActiveIndex] = useState(null);

        const onClick = (itemIndex) => {
            let _activeIndex = activeIndex ? [...activeIndex] : [];

            if (_activeIndex.length === 0) {
                _activeIndex.push(itemIndex);
            }
            else {
                const index = _activeIndex.indexOf(itemIndex);
                if (index === -1) {
                    _activeIndex.push(itemIndex);
                }
                else {
                    _activeIndex.splice(index, 1);
                }
            }

            setActiveIndex(_activeIndex);
        }



    return (
        <div className="accordion-demo">
            <Accordion activeIndex={0}>
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
    );
}

export default ListEquipment;