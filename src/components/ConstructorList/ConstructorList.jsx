import React, {useCallback} from 'react';
import constructor_list from './ConstructorList.module.css';
import { ConstructorElement, DragIcon } from "@ya.praktikum/react-developer-burger-ui-components";
import PropTypes from "prop-types";
import {arrPropTypes} from '../../utils/tupes';
import {DELETE_BURGER_INGREDIENT} from '../../services/actions/actions'
import { useDispatch} from 'react-redux';

export default function ConstructorList({ingredients, bun}) {

    const dispatch = useDispatch();

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
                {ingredients.map((item, index) => {
                        return (<li className={constructor_list.item} key={index}>
                                    <div className={constructor_list.box}>
                                        <DragIcon type="primary" />
                                    </div>
                                    <ConstructorElement
                                        text={item.name}
                                        price={item.price}
                                        thumbnail={item.image}
                                        index={index}
                                        key={index}
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

ConstructorList.propTypes = {
    ingredients: PropTypes.arrayOf(arrPropTypes).isRequired,
    bun: PropTypes.object, 
};