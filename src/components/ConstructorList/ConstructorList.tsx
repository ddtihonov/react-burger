import React, {useCallback, FC} from 'react';
import constructor_list from './ConstructorList.module.css';
import { ConstructorElement } from "@ya.praktikum/react-developer-burger-ui-components";
import {DELETE_BURGER_INGREDIENT} from '../../services/actions/burgerConstructor'
import { useDispatch, useSelector} from '../../utils/hooks';
import {ConstructorIngredient} from '../ConstructorIngredient/ConstructorIngredient';
import { v4 as uuidv4 } from 'uuid';
import {TIngredient} from '../../utils/tupes'

export const ConstructorList: FC = () => {

    const dispatch = useDispatch();

    const ingredientsConstructorList = useSelector((state) => state.burgerConstructorIngredients.burgerIngredients);
    const bun = useSelector((state: any) => state.burgerConstructorIngredients.burgerBun);
    
    // удаляем ингридиент и перезаписываем массив в хранилище
    const handleDeleteIngredient = useCallback((Index: number) => {
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
                {ingredientsConstructorList.map((item: TIngredient, index: number) => {
                    const keyUid = uuidv4()
                return (<ConstructorIngredient   
                item={item} 
                deleteIngridient={handleDeleteIngredient}  
                index={index} 
                id={item._id}
                key={keyUid}
                />)
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