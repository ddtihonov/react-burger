import React, { useCallback} from 'react';
import {getOrderNumber} from '../../services/actions/actions'
import burger_constructor from './BurgerConstructor.module.css';
import ConstructorList from '../ConstructorList/ConstructorList';
import { CurrencyIcon, Button} from '@ya.praktikum/react-developer-burger-ui-components'
import { useDispatch, useSelector } from 'react-redux';
import {BURGER_INGREDIENT} from '../../services/actions/actions'
import { useDrop } from "react-dnd";


export default function BurgerConstructor() {
        // получаем из хранилища массив ингредиентов
        const ingredientsConstructorList = useSelector(state => state.burgerConstructorIngredients.burgerIngredients);
      
      console.log(ingredientsConstructorList)

        // получаем булку
        const bun = useSelector(state => state.burgerConstructorIngredients.burgerBun);
        const dispatch = useDispatch();


        //ловим перетаскиваемый элемент и сохраняем в хранилище
        const [{ isHover }, dropTarget] = useDrop({
          accept: 'ingredient',
          collect: monitor => ({
            isHover: monitor.isOver()
          }),
          drop(ingredient) {
              dispatch({ type: BURGER_INGREDIENT, payload: { ingredient } })
          },
        });

        //подсветка контейнера при перетаскивании
        const style = `${burger_constructor.border} ${burger_constructor.hover}`
        const borderColor = isHover ? style : burger_constructor.border

        // расчет стоимости заказа
        const orderAmount = useCallback(() =>{
          if (!bun) {
            return 0;
          }
          const amountIngredients = ingredientsConstructorList.reduce((sum, item) => {
              return sum + item.price
          }, 0)
            return amountIngredients + bun.price * 2
        }, [bun, ingredientsConstructorList]);

        // id ингредиентов для получения номера заказа
        const handleOrder = useCallback(() =>{
          let iDingredients = ingredientsConstructorList.map(item => item._id).concat([bun._id]);
          dispatch(getOrderNumber(iDingredients));
        }, [ingredientsConstructorList, bun, dispatch]);


    return (
      <section className={burger_constructor.container}>
        <div className={burger_constructor.list} ref={dropTarget}>
          { bun === null
          ? (
              <div className={borderColor}>
                <h2 className={burger_constructor.title}>ПРОГОЛОДАЛИСЬ?</h2>
                <p className={burger_constructor.text}>Выберите вкусную булку!</p>
              </div>
          )
          :   (bun && <ConstructorList
            bun ={bun}
            ingredients={ingredientsConstructorList}
          />)
          }
        </div>
        {(bun !== null) && (<div className={burger_constructor.box}>
          <p className={burger_constructor.price}>{orderAmount()}</p>
          <div className={burger_constructor.item}>
            <CurrencyIcon type="primary"/>
          </div>
          <div className={burger_constructor.cell}>
            <Button size='large' onClick={handleOrder}>Оформить заказ</Button>
          </div>
        </div>)}
      </section>
    );
  };