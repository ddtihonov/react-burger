import React, { FC, useMemo,  useCallback} from 'react';
import { useSelector, useDispatch } from '../../utils/hooks';
import { CurrencyIcon } from '@ya.praktikum/react-developer-burger-ui-components';
import style from './OrderInformation.module.css';
import { TIngredient } from '../../utils/tupes';
import { TFeedOrder } from '../../utils/tupes';
import { v4 as uuidv4 } from 'uuid';
import { SELECT_ORDER } from '../../services/actions/selectedOrder';


export const OrderInformation: FC<{order: TFeedOrder}> = ({order}) => {

    const ingredientsList = useSelector((state) => state.ingredientsState.ingredients);
    const dispatch = useDispatch();

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
        if(orderIngredients !== undefined){}
            const bun = orderIngredients.filter(item => (item !== undefined ? item.type === 'bun' : 0))[0]
            const ingredients = orderIngredients.filter(item => (item !== undefined ? item.type !== 'bun' : 0))
            const price = ingredients.reduce((x, item) => x + (item !== undefined ? item.price : 0), 0) + (bun !== undefined ? bun.price * 2 : 0)
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

    const orderClick = useCallback(() => {
        dispatch({
            type: SELECT_ORDER,
            payload: {order: order},
        });
    }, [dispatch, order]);


    return (
            <li className={style.main}  onClick={orderClick}>
                <div className={style.box}>
                    <p className={style.number}>{order.number}</p>
                    <p className={style.date}>{parseDate(order.createdAt)}</p>
                </div>
                <h3 className={style.title}>{order.name}</h3>
                <div className={style.box_ingredient}>
                    <ul className={style.list}>
                        {orderIngredients.length > 6 &&
                        (   <li className={style.cell}>
                                <p className={style.quantity}>+{orderIngredients.length - 5}</p>
                            </li>)
                        }
                        { orderIngredients?.slice(0, orderIngredients.length > 6 ? 5 : 6)
                                .map((item) => {
                                    const keyUid = uuidv4()
                                    if (item !== undefined){
                                        return (
                                            <li className={style.cell} key={keyUid}>
                                                <img className={style.image} src={item.image_mobile} alt={item.name} />
                                            </li>
                                        )
                                    } else {return ''}
                                })
                        }
                    </ul>
                    <div className={style.box_prise}>
                        <p className={style.price}>{orderAmount}</p>
                        <CurrencyIcon type="primary"/>
                    </div>
                </div>
            </li>
    );
};