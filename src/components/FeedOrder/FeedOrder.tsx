import React, {FC, useMemo, useEffect} from 'react';
import style from './FeedOrder.module.css';
import { CurrencyIcon } from '@ya.praktikum/react-developer-burger-ui-components';
import { useParams, useLocation } from 'react-router-dom';
import { useSelector, useDispatch } from '../../utils/hooks';
import { TIngredient,  TFeedOrder} from '../../utils/tupes';
import { v4 as uuidv4 } from 'uuid';
import { wsConnectionStart, wsConnectionClosed } from '../../services/actions/wsOrders';


export const FeedOrder: FC = () => {

    const dispatch = useDispatch();
    const { id } = useParams();
    const { state } = useLocation();

    const orders  = useSelector((state) => state.orderHistory.feed.orders) || [];
    const ingredientsList = useSelector((state) => state.ingredientsState.ingredients);

    console.log(orders)
    console.log(ingredientsList)

    useEffect(() => {
        console.log('нету связи')
        dispatch(wsConnectionStart());
        return () => {
            dispatch(wsConnectionClosed())
        }
    }, [dispatch]);

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

    const counts  = useMemo(() => {
        let counts: (number | undefined)[] = [];
        for (let i = 0; i < uniqueIngredients.length; i++) {
            let count = orderData?.ingredients.filter(item => item === uniqueIngredients[i]).reduce((x: number) => x + 1, 0);
            counts.push(
                count
            );
        }
        return counts;
        },
        [uniqueIngredients, orderData]
);

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

    return (
        state && orderIngredients && orderData && orderData !== undefined ?
        (<section className={style.main}>
                    <p className={style.number}>#{orderData.number}</p>
                    <h3 className={style.title}>{orderData.name}</h3>
                    {orderData.status === 'done' ?
                    (<p className={style.condition}>Выполнен</p>) :
                    (<p className={style.cook}>Готовится</p>)}
                    <p className={style.structure}>Состав:</p>
                    <ul className={orderIngredients.length > 3 ? ` ${style.list} ${style.scrollbar}`: style.list_min}>
                    { orderIngredients.map((item, index) => {
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
                                                            {item.type === 'bun' ?
                                                            (<p className={style.price}>2 х </p>) :
                                                            (<p className={style.price}>{counts[index] + ' х '}</p>)
                                                            }
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
        </section>) : (<h3>Я тут был</h3>)
    )
}