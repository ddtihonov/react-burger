import React, {FC} from 'react';
import main from './main.module.css';
import BurgerConstructor from '../../components/BurgerConstructor/BurgerConstructor';
import {BurgerIngredients} from '../../components/BurgerIngredients/BurgerIngredients';
import { HTML5Backend } from 'react-dnd-html5-backend';
import { DndProvider } from 'react-dnd';

export const Main: FC = () => {

    return (
    <main className={main.main} >
        <DndProvider backend={HTML5Backend}>
            <BurgerIngredients/>
            <BurgerConstructor/>
        </DndProvider>
    </main>
    
);
}