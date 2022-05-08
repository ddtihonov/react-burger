import React, {useCallback} from 'react';
import constructor_list from './ConstructorList.module.css';
import { ConstructorElement, DragIcon } from "@ya.praktikum/react-developer-burger-ui-components";
import {DELETE_BURGER_INGREDIENT} from '../../services/actions/actions'
import { useDispatch, useSelector} from 'react-redux';
import { v4 as uuidv4 } from 'uuid'

export default function ConstructorList() {

    const dispatch = useDispatch();

    const ingredientsConstructorList = useSelector(state => state.burgerConstructorIngredients.burgerIngredients);///
    const bun = useSelector(state => state.burgerConstructorIngredients.burgerBun);///

    // удаляем ингридиент и перезаписываем массив в хранилище
    const handleDeleteIngredient = useCallback((deleteIndex, ) => {
            dispatch({ type: DELETE_BURGER_INGREDIENT, payload: { deleteIndex } });
        }, [dispatch]
    );

    return(
        <>
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
                {ingredientsConstructorList.map((item, index) => {
                        return (<li className={constructor_list.item} key={uuidv4()}>
                                    <div className={constructor_list.box}>
                                        <DragIcon type="primary" />
                                    </div>
                                    <ConstructorElement
                                        text={item.name}
                                        price={item.price}
                                        index={index}
                                        thumbnail={item.image}
                                        handleClose={() => handleDeleteIngredient(index)}
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
        </>
    
    );
};