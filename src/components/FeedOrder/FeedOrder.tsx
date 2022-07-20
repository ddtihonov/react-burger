import React, {FC, useMemo, useEffect} from 'react';
import style from './FeedOrder.module.css';
import { CurrencyIcon } from '@ya.praktikum/react-developer-burger-ui-components';
import { useLocation, useParams } from 'react-router-dom';
import { useSelector, useDispatch } from '../../utils/hooks';
import { TIngredient,  TFeedOrder} from '../../utils/tupes';
import { v4 as uuidv4 } from 'uuid';
import { wsConnectionStart } from '../../services/actions/wsOrders';


export const FeedOrder: FC = () => {

    const { state } = useLocation();
    const dispatch = useDispatch();
    const { id } = useParams();

    useEffect(() => {
        dispatch(wsConnectionStart());
    }, [dispatch]);

    const orders  = useSelector((state) => state.orderHistory.feed.orders) || [];
    const ingredientsList = useSelector((state) => state.ingredientsState.ingredients);
    //const stat  = useSelector((state) => state);
    
    useEffect(() => {
        orders.length === 0  && dispatch(wsConnectionStart());
    }, [orders, dispatch, state]);

    const orderData:TFeedOrder | undefined = useMemo(() => {
        if(orders.length > 0){
            return orders.find((order:TFeedOrder) => order._id === id)}
        }, [orders, id]
    )

    const uniqueIngredients = useMemo( () =>{
        if(orderData){
        let arr = orderData.ingredients.filter((item: string, index: number) =>{
            return orderData.ingredients.indexOf(item) === index
        })

        return arr
        } else {
            return ''
        }
    }, [orderData]);




    const orderIngredients:(TIngredient | undefined)[]  = useMemo(
        () => {
            let components:(TIngredient | undefined)[]  = [];
            for (let i = 0; i < uniqueIngredients.length; i++) {
                components.push(
                    ingredientsList.find((item: TIngredient) => item._id === uniqueIngredients[i])
                );
                }
            return components;
            },
            [uniqueIngredients, ingredientsList]
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
                {orderData !== undefined ? (
                <>
                    <p className={style.number}>#{orderData.number}</p>
                    <h3 className={style.title}>{orderData.name}</h3>
                    {orderData.status === 'done' ?
                    (<p className={style.condition}>Выполнен</p>) :
                    (<p className={style.cook}>Готовится</p>)}
                    <p className={style.structure}>Состав:</p>
                    <ul className={orderIngredients.length > 3 ? ` ${style.list} ${style.scrollbar}`: style.list_min}>
                    { orderIngredients.map((item) => {
                                            const keyUid = uuidv4()
                                            if (item !== undefined){
                                                return (
                                                    <li className={style.cell} key={keyUid}>
                                                        <div className={style.box_prise}>
                                                            <div className={style.box_img}>
                                                                <img className={style.image} src={item.image_mobile} alt={item.name} />
                                                            </div>
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
                        <p className={style.date}>{parseDate(orderData.updatedAt)}</p>
                        <div className={style.box_prise}>
                            <p className={style.price}>{orderAmount}</p>
                            <CurrencyIcon type="primary"/>
                        </div>
                    </div>
                </>) :
                (
                    <></>
                )}
        </section>
    )
}