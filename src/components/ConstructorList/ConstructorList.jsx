import React, {useCallback, useMemo} from 'react';
import constructor_list from './ConstructorList.module.css';
import { ConstructorElement } from "@ya.praktikum/react-developer-burger-ui-components";
import {DELETE_BURGER_INGREDIENT} from '../../services/actions/actions'
import { useDispatch, useSelector} from 'react-redux';
import ConstructorIngredient from '../ConstructorIngredient/ConstructorIngredient';

export default function ConstructorList() {

    const dispatch = useDispatch();

    const ingredientsConstructorList = useSelector(state => state.burgerConstructorIngredients.burgerIngredients);
    const bun = useSelector(state => state.burgerConstructorIngredients.burgerBun);
    const  keyUid = useSelector(state => state.burgerConstructorIngredients.keyUid);

    // удаляем ингридиент и перезаписываем массив в хранилище
    const handleDeleteIngredient = useCallback((Index) => {
            dispatch({ type: DELETE_BURGER_INGREDIENT, Index });
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
                {ingredientsConstructorList.map((item, index) => (
                <ConstructorIngredient   
                item={item} 
                deleteIngridient={handleDeleteIngredient}  
                index={index} 
                id={item._id}
                key={keyUid}
                />))}
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