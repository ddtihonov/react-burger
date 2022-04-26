import React, { useContext } from 'react';
import constructor_list from './ConstructorList.module.css';
import { ConstructorElement, DragIcon } from "@ya.praktikum/react-developer-burger-ui-components";
import { BurgerContext } from '../../utils/BurgerContext';

export default function ConstructorList() {

        const ingredientsList  = useContext(BurgerContext);

        const bun = ingredientsList[0];
        const ingredients = ingredientsList.filter(item => item.type !== 'bun');

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