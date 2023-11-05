import React from 'react';
import '../css/Faq.scss'

import {
    Accordion,
    AccordionItem,
    AccordionItemHeading,
    AccordionItemButton,
    AccordionItemPanel,
} from 'react-accessible-accordion';

// Demo styles, see 'Styles' section below for some notes on use.
import 'react-accessible-accordion/dist/fancy-example.css';

export default function Faq() {
    return (
        <div className='faq'>
            <h2>Faq</h2>
            
        <Accordion>
            <AccordionItem>
                <AccordionItemHeading>
                    <AccordionItemButton>Quien soy</AccordionItemButton>
                </AccordionItemHeading>
                <AccordionItemPanel>
                    <p>
                       
                    </p>
                </AccordionItemPanel>
            </AccordionItem>
            <AccordionItem>
                <AccordionItemHeading>
                    <AccordionItemButton>Aficiones</AccordionItemButton>
                </AccordionItemHeading>
                <AccordionItemPanel>
                    <p>
                       
                    </p>
                </AccordionItemPanel>
            </AccordionItem>
            <AccordionItem>
                <AccordionItemHeading>
                    <AccordionItemButton>Conocimientos</AccordionItemButton>
                </AccordionItemHeading>
                <AccordionItemPanel>
                    <p>
                       
                    </p>
                </AccordionItemPanel>
            </AccordionItem>
            <AccordionItem>
                <AccordionItemHeading>
                    <AccordionItemButton>Que busco</AccordionItemButton>
                </AccordionItemHeading>
                <AccordionItemPanel>
                    <p>
                       
                    </p>
                </AccordionItemPanel>
            </AccordionItem>
        </Accordion>
        </div>
    );
}