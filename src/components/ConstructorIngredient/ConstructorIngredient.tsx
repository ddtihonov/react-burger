import React, {useRef, FC} from 'react';
import { useDispatch} from '../../utils/hooks';
import { ConstructorElement, DragIcon } from "@ya.praktikum/react-developer-burger-ui-components";
import constructor_ingredirnt from './ConstructorIngredient.module.css';
import { useDrop, useDrag, DragObjectFactory, DropTargetMonitor } from "react-dnd";
import {MOVE_CONSTRUCTOR_INGREDIENTS} from '../../services/actions/burgerConstructor';
import {TConstructorIngredientData, TIngredient} from '../../utils/tupes';

export const ConstructorIngredient:FC<TConstructorIngredientData> = ({item, deleteIngridient, index, id}) => {

    const dispatch = useDispatch();
    const ref = useRef<HTMLLIElement>(null)

    const [, drop] = useDrop({
        accept: 'component',
        hover: (item: DragObjectFactory<TIngredient> & { index: number }, monitor: DropTargetMonitor) => {
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
            const clientOffset: any = monitor.getClientOffset();
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

    const moveIngredient = (dragIndex: number, hoverIndex: number) => {
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

        drag(drop(ref));


    return(
        <li className={constructor_ingredirnt.item} ref={ref} style={{ opacity }}>
            <div className={constructor_ingredirnt.box}>
                <DragIcon type="primary" />
            </div>
        <ConstructorElement
            text={item.name}
            price={item.price}
            thumbnail={item.image}
            handleClose={() => {
                deleteIngridient(index)
            }}
            /> 
        </li>
    );
};