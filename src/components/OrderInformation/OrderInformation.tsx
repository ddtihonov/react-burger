import React, { FC, useMemo } from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from '../../utils/hooks';
import { useLocation } from 'react-router';
import { CurrencyIcon } from '@ya.praktikum/react-developer-burger-ui-components';
import style from './OrderInformation.module.css';
import { TIngredient } from '../../utils/tupes';
import { v4 as uuidv4 } from 'uuid';


export const OrderInformation: FC<{
    number: string;
    date: string;
    name: string;
    ingredients: string[];
    status: string;
    id: string;
}> = ({ name, number, date, ingredients, status, id }) => {
    const location = useLocation();

    const ingredientsList = useSelector((state) => state.ingredientsState.ingredients);

    console.log(status)


    const orderIngredients = useMemo(
        () => {
            let components  = [];
            for (let i = 0; i < ingredients.length; i++) {
                components.push(
                    ingredientsList.find((item: TIngredient) => item._id === ingredients[i])
                );
                }
            return components;
            },
            [ingredients, ingredientsList]
    );
    

const orderIngredient = ingredientsList

    // расчет стоимости заказов
    const orderAmount = useMemo(() =>{
            const price = orderIngredient.reduce((x: number, obj: TIngredient) => x + obj.price, 0)
            return  price
    }, [orderIngredient]);


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
        <Link
            className={style.link}
            to={`${location.pathname}/${id}`}
            state={{ background: location.pathname }}
        >
            <li className={style.main}>
                <div className={style.box}>
                    <p className={style.number}>{number}</p>
                    <p className={style.date}>{parseDate(date)}</p>
                </div>
                <h3 className={style.title}>{name}</h3>
                <div className={style.box_ingredient}>
                    <ul className={style.list}>
                        {orderIngredients.length > 6 &&
                        (   <li className={style.cell}>
                                <p className={style.quantity}>+{orderIngredients.length - 5}</p>
                            </li>)
                        }
                        { orderIngredient?.slice(0, orderIngredients.length > 6 ? 5 : 6)
                                .map((item) => {
                                    const keyUid = uuidv4()
                                    return (
                                        <li className={style.cell} key={keyUid}>
                                            <img className={style.image} src={item.image_mobile} alt={item.name} />
                                        </li>
                                    )
                                })
                        }
                    </ul>
                    <div className={style.box_prise}>
                        <p className={style.price}>{orderAmount}</p>
                        <CurrencyIcon type="primary"/>
                    </div>
                </div>
            </li>
        </Link>
    );
};