import React from 'react';
import constructor_list from './ConstructorList.module.css';
import { ConstructorElement, DragIcon } from "@ya.praktikum/react-developer-burger-ui-components";
import PropTypes from "prop-types";
import {arrPropTypes} from '../../utils/tupes';

export default function ConstructorList({arrayInitialization}) {

        const bun = arrayInitialization[0];
        const ingredients = arrayInitialization.filter(item => item.type !== 'bun');

    return(
        <section className={constructor_list.container}>
            <div className={constructor_list.cell}>
                <ConstructorElement
                        type="top"
                        isLocked={true}
                        text={`${bun.name} (верх)`}
                        price={bun.price}
                        thumbnail={bun.image}
                    />
            </div>
            <ul className={`${constructor_list.list} ${constructor_list.scrollbar}`} >
                {ingredients.map((item, index) => {
                        return (<li className={constructor_list.item} key={item._id}>
                                    <div className={constructor_list.box}>
                                        <DragIcon type="primary" />
                                    </div>
                                    <ConstructorElement
                                        text={item.name}
                                        price={item.price}
                                        thumbnail={item.image}
                                    /> 
                                </li>)
                    })}
            </ul>
            <div className={constructor_list.cell}>
                <ConstructorElement
                    type="bottom"
                    isLocked={true}
                    text={`${bun.name} (низ)`}
                    price={bun.price}
                    thumbnail={bun.image}
                /> 
            </div>
            
        </section>
    
    );
};

ConstructorList.propTypes = {
    arrayInitialization: PropTypes.arrayOf(arrPropTypes).isRequired,
};