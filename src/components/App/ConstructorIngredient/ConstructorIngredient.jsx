import React, {useRef} from 'react';
import { useDispatch} from 'react-redux';
import { ConstructorElement, DragIcon } from "@ya.praktikum/react-developer-burger-ui-components";
import constructor_ingredirnt from './ConstructorIngredient.module.css';
import { useDrop, useDrag } from "react-dnd";
import PropTypes from 'prop-types';
import {ingredientPropTypes} from '../../../utils/tupes'
import {MOVE_CONSTRUCTOR_INGREDIENTS} from '../../../services/actions/actions'

export default function ConstructorIngredient({item, deleteIngridient, index, id}) {

    const dispatch = useDispatch();
    const ref = useRef(null)

    const [, drop] = useDrop({
        accept: 'component',
        hover(item, monitor) {
            if (!ref.current) {
                return;
            }
            const dragIndex = item.index;
            const hoverIndex = index;
            if (dragIndex === hoverIndex) {
                return;
            }
            const hoverBoundingRect = ref.current?.getBoundingClientRect();
            const hoverMiddleY = (hoverBoundingRect.bottom - hoverBoundingRect.top) / 2;
            const clientOffset = monitor.getClientOffset();
            const hoverClientY = clientOffset.y - hoverBoundingRect.top;
            if (dragIndex < hoverIndex && hoverClientY < hoverMiddleY) {
                return;
            }
            if (dragIndex > hoverIndex && hoverClientY > hoverMiddleY) {
                return;
            }

            moveIngredient(dragIndex, hoverIndex);

            item.index = hoverIndex;
        },
    });

    const moveIngredient = (dragIndex, hoverIndex) => {
        dispatch({
            type: MOVE_CONSTRUCTOR_INGREDIENTS,
            dragIndex,
            hoverIndex
        });
    }

    //захватываем элемент
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