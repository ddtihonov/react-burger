import React, {useCallback, useRef} from 'react';
import constructor_list from './ConstructorList.module.css';
import { ConstructorElement, DragIcon } from "@ya.praktikum/react-developer-burger-ui-components";
import {DELETE_BURGER_INGREDIENT} from '../../services/actions/actions'
import { useDispatch, useSelector} from 'react-redux';
import { v4 as uuidv4 } from 'uuid'
import { useDrag, useDrop } from "react-dnd";

export default function ConstructorList() {

    const dispatch = useDispatch();
    const ref = useRef(null)

    const ingredientsConstructorList = useSelector(state => state.burgerConstructorIngredients.burgerIngredients);///
    const bun = useSelector(state => state.burgerConstructorIngredients.burgerBun);///
    const burgerIngredient = ingredientsConstructorList.map((item, index) => (
        <li className={constructor_list.item} key={uuidv4()} ref={ref}>
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
        </li>
    ))


    // удаляем ингридиент и перезаписываем массив в хранилище
    const handleDeleteIngredient = useCallback((deleteIndex, ) => {
            dispatch({ type: DELETE_BURGER_INGREDIENT, payload: { deleteIndex } });
        }, [dispatch]
    );

    /*const [{isDragging}, drag] = useDrag({
        type: 'component',
        item: { burgerIngredient },
        collect: monitor => ({
            isDragging: monitor.isDragging(),
        })
    });

    const [, drop] = useDrop({
        accept: 'component', 
    
    drag(drop(ref))*/


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
                {burgerIngredient}
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