import React from 'react';
import '../css/Faq.scss';
import html from '../assets/img/html.png';
import php from '../assets/img/php.png';
import angular from '../assets/img/angular.png';
import java from '../assets/img/java.png';
import css from '../assets/img/css.png';
import scss from '../assets/img/sass.png';
import react from '../assets/img/react.png';
import jquery from '../assets/img/jquery.png';
import typescript from '../assets/img/typescript.png';
import js from '../assets/img/js.png';
import mysql from '../assets/img/mysql.png';

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
                       Mi nombre es Aidan Verdejo Maynero, resido en Burjassot (Valencia) y me encanta el mundo del diseño web (todo lo que tiene que
                       ver con frontend)
                    </p>
                    <p>
                       Aunque tambien tengo concimientos y actualmente estoy aprendiendo algun lenguaje de backend (como por ejemplo PHP), prefiero
                       enfocarme en la parte de frontend ya que, como he dicho antes, me gusta todo lo relacionado con el diseño web y la interfaz de
                       usuario
                    </p>
                </AccordionItemPanel>
            </AccordionItem>
            <AccordionItem>
                <AccordionItemHeading>
                    <AccordionItemButton>Aficiones</AccordionItemButton>
                </AccordionItemHeading>
                <AccordionItemPanel>
                    <p>
                       No hay mucho que decir aqui, lo tipico: salir con amigos, estar con el ordenador (ya sea jugando, programando o haciendo otras cosas),

                    </p>
                </AccordionItemPanel>
            </AccordionItem>
            <AccordionItem>
                <AccordionItemHeading>
                    <AccordionItemButton>Conocimientos</AccordionItemButton>
                </AccordionItemHeading>
                <AccordionItemPanel>
                    <p>
                       Actualmente estoy ampliando esta parte, cada dia aprendiendo cosas nuevas poco a poco, pero de momento se puede resumir en esto:
                    </p>
                    <div className="lenguajes">
                        <p className="front">Front-End</p>
                        <div className="lenguajes-front">
                            <div>
                                <img src={html} />
                                <p>HTML</p>
                            </div>
                            <div>
                               <img src={css} />
                                <p>CSS</p>
                            </div>
                            <div>
                                <img src={scss} />
                                <p>SASS</p>
                            </div>
                            <div>
                                <img src={js} />
                                <p>JavaScript</p>
                            </div>
                        </div>
                        <div className="lenguajes-front">
                            <div>
                                <img src={jquery} />
                                <p>Jquery</p>
                            </div>
                            <div>
                                <img src={typescript} />
                                <p>TypeScript</p>
                            </div>
                            <div>
                                <img src={react} />
                                <p>React</p>
                            </div>
                            <div>
                                <img src={angular} />
                                <p>Angular</p>
                            </div>
                        </div>
                        <p className='back'>Back-End</p>
                        <div className="lenguajes-back"> 
                            <div>
                                <img src={php} />
                                <p>PHP</p>
                            </div>
                            <div>
                                <img src={java} />
                                <p>Java</p>
                            </div>
                            <div>
                                <img src={mysql} />
                                <p>Mysql</p>
                            </div>
                        </div>
                    </div>
                </AccordionItemPanel>
            </AccordionItem>
            <AccordionItem>
                <AccordionItemHeading>
                    <AccordionItemButton>Experiencia laboral</AccordionItemButton>
                </AccordionItemHeading>
                <AccordionItemPanel>
                    <p>
                       He trabajado en Avantio durante 3 años, los cuales me han servido para formarme y saber lo que es el mundo laboral.<br />
                       Alli puede no solo pude reforzar lo que ya sabia, sino aprender cosas nuevas (como SCSS, del cual no tenia ni idea de su existencia),
                       ofreciendo retos conforme ibas avanzando (desde hacer simples cambios webs como cambiar imagenes, textos y demas hasta tocar el
                       framework de la web para mejorarlo), por lo cual me he podido especializar en la creacion y mantenimiento de webs para clientes, asi como
                       tambien la resolucion de problemas que puedan ir surgiendo a lo largo de la jornada
                    </p>
                </AccordionItemPanel>
            </AccordionItem>
            <AccordionItem>
                <AccordionItemHeading>
                    <AccordionItemButton>Que busco</AccordionItemButton>
                </AccordionItemHeading>
                <AccordionItemPanel>
                    <p>
                        Busco un trabajo en el que no solo pueda estar de forma estable, sino tambien en el que pueda aprender cada dia algo nuevo trabajando con alguno
                        (o algunos) de los lenguajes que manejo o estoy aprendiendo a manejar, en el que pueda estar comodo haciendo lo que me gusta (preferiblemente en la 
                        parte de frontend, aunque como he dicho antes tambien puedo asumir la parte de backend)
                    </p>
                    <p>
                        Si piensas que puedo encajar en el perfil que buscas, puedes contactar conmigo a traves del formulario que hay en la pagina, <a href="tel:+34622881764">llamarme</a>, 
                        enviarme un <a href="mailto:19aidan99@gmail.com">correo</a> o simplemente escribirme un <a href="https://wa.me/+34622881764">WhatsApp</a>
                    </p>
                </AccordionItemPanel>
            </AccordionItem>
        </Accordion>
        </div>
    );
}