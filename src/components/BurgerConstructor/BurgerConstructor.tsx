import React, { useCallback, useMemo, FC} from 'react';
import { useNavigate } from 'react-router-dom';
import {getOrderNumber} from '../../services/actions/order';
import styles from './BurgerConstructor.module.css';
import {ConstructorList} from '../ConstructorList/ConstructorList';
import { CurrencyIcon} from '@ya.praktikum/react-developer-burger-ui-components';
import { useDispatch, useSelector } from '../../utils/hooks';
import {BURGER_INGREDIENT} from '../../services/actions/burgerConstructor';
import { useDrop } from "react-dnd";
import { v4 as uuidv4 } from 'uuid';
import {TIngredient} from '../../utils/tupes';


export const BurgerConstructor: FC = () => {

        const navigate = useNavigate();

        // получаем из хранилища массив ингредиентов
        const ingredientsConstructorList = useSelector((state) => state.burgerConstructorIngredients.burgerIngredients);
      
        // получаем булку
        const bun = useSelector((state) => state.burgerConstructorIngredients.burgerBun);
        const loggedIn = useSelector((state) => state.authData.loggedIn);
        const dispatch = useDispatch();

        //ловим перетаскиваемый элемент и сохраняем в хранилище
        const [{ isHover }, dropTarget] = useDrop({
          accept: 'ingredient',
          collect: monitor => ({
            isHover: monitor.isOver()
          }),
          drop: (ingredient: TIngredient) => {
            const keyUid = uuidv4()
            ingredient.keyUid = keyUid
              dispatch({ type: BURGER_INGREDIENT, payload: { ingredient} })
          },
        });

        //подсветка контейнера при перетаскивании
        const style = `${styles.border} ${styles.hover}`
        const borderColor = isHover ? style : styles.border

        // расчет стоимости заказа
        const orderAmount = useMemo(() =>{
          if (!bun) {
            return 0;
          }
          const amountIngredients = ingredientsConstructorList.reduce((sum: number, item: TIngredient) => {
              return sum + item.price
          }, 0)
            return amountIngredients + bun.price * 2
        }, [ingredientsConstructorList, bun]);


        // id ингредиентов для получения номера заказа
        const handleOrder = useCallback(() =>{
          if (loggedIn === true && bun !== null) {
            const iDingredients = ingredientsConstructorList.map((item: TIngredient) => item._id).concat([bun._id]);
            dispatch(getOrderNumber(iDingredients));
          } else {
              navigate('/login')
          }
          
        }, [ingredientsConstructorList, bun, dispatch, loggedIn, navigate]);

    return (
      <section className={styles.container}>
        <div className={styles.list} ref={dropTarget}>
          { bun === null
          ? (
              <div className={borderColor}>
                <h2 className={styles.title}>ПРОГОЛОДАЛИСЬ?</h2>
                <p className={styles.text}>Выберите вкусную булку!</p>
              </div>
          )
          : (bun && <ConstructorList/>)
          }
        </div>
        {(bun !== null) && (
        <div className={styles.box}>
          <p className={styles.price}>{orderAmount}</p>
          <div className={styles.item}>
            <CurrencyIcon type="primary"/>
          </div>
          <button
            className={styles.button}
            type='submit' 
            onClick={handleOrder}>
              Оформить заказ
          </button>
        </div>)}
      </section>
    );
  };