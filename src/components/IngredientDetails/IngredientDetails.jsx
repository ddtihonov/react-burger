import React from 'react';
import ingredient_detals from './IngredientDetails.module.css'
import Modal from '../Modal/Modal';


export default function IngredientDetails({isOpen, onClose, card}) {

    return(
        <Modal  isOpen={isOpen} onClose={onClose}>
            <div className={ingredient_detals.box} >
                <h2 className={ingredient_detals.title}>Детали ингредиента</h2>
                <img className={ingredient_detals.image} src={card.image} alt={card.name}></img>
                <h3 className={ingredient_detals.subtitle}>{card.name}</h3>
                <ul className={ingredient_detals.list} >
                    <li className={ingredient_detals.item} >
                        <p className={ingredient_detals.text}>Калории,ккал</p>
                        <p className={ingredient_detals.number}>{card.calories}</p>
                    </li>
                    <li className={ingredient_detals.item}>
                        <p className={ingredient_detals.text} >Белки, г</p>
                        <p className={ingredient_detals.number}>{card.proteins}</p>
                    </li>
                    <li className={ingredient_detals.item}>
                        <p className={ingredient_detals.text}>Жиры, г</p>
                        <p className={ingredient_detals.number}>{card.fat}</p>
                    </li>
                    <li className={ingredient_detals.item}>
                        <p className={ingredient_detals.text}>Углеводы, г</p>
                        <p className={ingredient_detals.number}>{card.carbohydrates}</p>
                    </li>
                </ul>
            </div>
        </Modal>
    
    );
}