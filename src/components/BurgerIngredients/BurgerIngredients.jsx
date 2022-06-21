import React, {useState, useRef, useCallback, useEffect} from 'react';
import burger_ingredients from './BurgerIngredients.module.css';
import IngredientsList from '../IngredientsList/IngredientsList';
import { Tab } from '@ya.praktikum/react-developer-burger-ui-components';
import { useDispatch, useSelector } from 'react-redux';
import {
  LOADING_START,
  LOADING_FINISH,
}
from '../../services/actions/loading';


export const BurgerIngredients = () => {

  const ingredientsList = useSelector(state => state.ingredientsState.ingredients);
    const dispatch = useDispatch(); 

    useEffect(() => {
      if(ingredientsList.length === 0){
        dispatch({
          type: LOADING_START,
        });
      } else {
        dispatch({
          type: LOADING_FINISH,
        });
      }
      }, [dispatch, ingredientsList]);  


    const buns = ingredientsList.filter(item => item.type === 'bun');
    const sauce = ingredientsList.filter(item => item.type === 'sauce');
    const main = ingredientsList.filter(item => item.type === 'main');

  const bunRef = useRef(null)
  const sauceRef = useRef(null)
  const mainRef = useRef(null)

  const [current, setCurrent] = useState('bun')


// скролл при клике
  const handleBunClick = useCallback(() => {
    bunRef.current.scrollIntoView({behavior: 'smooth'});
    setCurrent('bun')
  },[setCurrent]);

  const handleSauceClick = useCallback(() => {
    sauceRef.current.scrollIntoView({behavior: 'smooth'});
    setCurrent("sauce")
  },[setCurrent]);

  const handleMainClick = useCallback(() => {
    mainRef.current.scrollIntoView({behavior: 'smooth'});
    setCurrent("main")
  },[setCurrent]);


//выделяем кнопку при скролле
  const handleBunScroll = useCallback(() => {
    setCurrent('bun')
  },[setCurrent]);

  const handleSauceScroll = useCallback(() => {
    setCurrent("sauce")
  },[setCurrent]);

  const handleMainScroll = useCallback(() => {
    setCurrent("main")
  },[setCurrent]);

  const handleScroll = useCallback(
    (evt) => {
      const container = evt.target;
      const scrollPosition = container.scrollTop;
      const saucePosition = sauceRef.current.offsetTop;
      const mainPosition = mainRef.current.offsetTop;
      if (scrollPosition + 350 <= saucePosition) {
        handleBunScroll();
      } else if (scrollPosition + 300 <= mainPosition) {
        handleSauceScroll();
      } else {
        handleMainScroll();
      }
    },
    [handleBunScroll, handleSauceScroll, handleMainScroll]
  ); 

  return (
      <section className={burger_ingredients.container}>
        <h2 className={burger_ingredients.title}>Соберите бургер</h2>
        <div className={burger_ingredients.tab}>
          <Tab active={current === 'bun'} value='bun' onClick={handleBunClick}>Булки</Tab>
          <Tab active={current === 'sauce'} value='sauce' onClick={handleSauceClick}>Соусы</Tab>
          <Tab active={current === 'main'} value='main' onClick={handleMainClick}>Начинки</Tab>
        </div>
        <div 
        className={`${burger_ingredients.scrollbox} ${burger_ingredients.scrollbar}`}
        onScroll={handleScroll}
        >
          <IngredientsList ingredients={buns} title='Булки' ref={bunRef}/>
          <IngredientsList ingredients={sauce} title='Соусы' ref={sauceRef}/>
          <IngredientsList ingredients={main} title='Начинки' ref={mainRef}/>
        </div>
      </section>
    );
  };