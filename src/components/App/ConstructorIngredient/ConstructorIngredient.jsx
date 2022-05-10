import React, {useRef} from 'react';
import { useDispatch} from 'react-redux';
import { ConstructorElement, DragIcon } from "@ya.praktikum/react-developer-burger-ui-components";
import constructor_ingredirnt from './ConstructorIngredient.module.css';
import { useDrop, useDrag } from "react-dnd";
import PropTypes from 'prop-types';
import {ingredientPropTypes} from '../../../utils/tupes'

export default function ConstructorIngredient({item, deleteIngridient, index, id}) {

    const dispatch = useDispatch();
    const ref = useRef(null)

    const [, drop] = useDrop({
        accept: 'component',
        hover(item, monitor) {
            
        },
    });

    const [{ opacity }, drag] = useDrag({
        type: 'component',
        item: () => {
            return { id, index };
        },
        collect: monitor => ({
            opacity: monitor.isDragging() ? .1 : 1,
        })
    });

        const dragDropRef = drag(drop(ref));


    return(
        <li className={constructor_ingredirnt.item} ref={dragDropRef} style={{ opacity }}>
            <div className={constructor_ingredirnt.box}>
                <DragIcon type="primary" />
            </div>
        <ConstructorElement
            text={item.name}
            price={item.price}
            thumbnail={item.image}
            index={index}
            handleClose={() => {
                deleteIngridient(index)
            }}
            /> 
        </li>
    );
};

ConstructorIngredient.propTypes = {
    deleteIngridient: PropTypes.func,
    id: PropTypes.string,
    index: PropTypes.number,
    item: ingredientPropTypes.isRequired,
};