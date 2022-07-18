import React, {FC, useMemo} from 'react';
import style from './FeedOrder.module.css';
import { CurrencyIcon } from '@ya.praktikum/react-developer-burger-ui-components';
import { useLocation, useParams } from 'react-router-dom';
import { useSelector, useDispatch } from '../../utils/hooks';
import { TIngredient } from '../../utils/tupes';
import { v4 as uuidv4 } from 'uuid';


export const FeedOrder: FC = () => {
    const order = useSelector((state: any) => state.orderDetals.selectedOrder);
    const ingredientsList = useSelector((state) => state.ingredientsState.ingredients);
    console.log(order)
    
    /*const orderIngredients  = useMemo(
        () => {
            let components  = [];
            for (let i = 0; i < order.ingredients.length; i++) {
                components.push(
                    ingredientsList.find((item: TIngredient) => item._id === order.ingredients[i])
                );
                }
            return components;
            },
            [order, ingredientsList]
    );*/

    const orderIngredients:(TIngredient | undefined)[]  = useMemo(
        () => {
            let components:(TIngredient | undefined)[]  = [];
            for (let i = 0; i < order.ingredients.length; i++) {
                components.push(
                    ingredientsList.find((item: TIngredient) => item._id === order.ingredients[i])
                );
                }
            return components;
            },
            [order, ingredientsList]
    );

    // расчет стоимости заказов
    const orderAmount = useMemo(() =>{
        const price = orderIngredients.reduce((x, item) => x + (item !== undefined ? item.price : 0), 0)
        return  price
    }
, [orderIngredients]);


    function parseDate(date: string) {
        const currentDate = new Date();
        const regex = /-/g;
        const orderDay = Number(date.replace(regex, '').split('T')[0].slice(-2));
        const orderTime = date.slice(11, -8);
        const term = currentDate.getDate() - orderDay;
        return term === 0
            ? `Ceгодня ${orderTime} i-GMT+3`
            : term === 1
            ? `Вчера, ${orderTime} i-GMT+3`
            : term < 5
            ? `${term} дня назад, ${orderTime} i-GMT+3`
            : `${term} дней назад, ${orderTime} i-GMT+3`;
    }

    return (
        <section className={style.main}>
            <p className={style.number}>#{order.number}</p>
            <h3 className={style.title}>{order.name}</h3>
            {order.status === 'done' ?
            (<p className={style.condition}>Выполнен</p>) :
            (<p className={style.cook}>Готовится</p>)}
            <p className={style.structure}>Состав:</p>
            <ul className={`${style.list} ${style.scrollbar}`}>
            { orderIngredients.map((item) => {
                                    const keyUid = uuidv4()
                                    if (item !== undefined){
                                        return (
                                            <li className={style.cell} key={keyUid}>
                                                <div className={style.box_prise}>
                                                    <img className={style.image} src={item.image_mobile} alt={item.name} />
                                                    <p className={style.text}>{item.name}</p>
                                                </div>
                                                <div className={style.box_prise}>
                                                    <p className={style.price}>{item.price}</p>
                                                    <CurrencyIcon type="primary"/>
                                                </div>
                                            </li>
                                        )
                                    } else {return ''}
                                })
                        }
            </ul>
            <div className={style.box}>
                <p className={style.date}>{parseDate(order.updatedAt)}</p>
                <div className={style.box_prise}>
                    <p className={style.price}>{orderAmount}</p>
                    <CurrencyIcon type="primary"/>
                </div>
            </div>
            
        </section>
    )
}

/*{order.ingredients.map(item =>{
    return (
        <li className={style.list}>
            <div>
                <ing/>
            </div>

        </li>
    )
})}*/