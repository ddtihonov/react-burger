import React, {useState} from 'react';
import styles from './ConstructorList.module.css'
import { ConstructorElement, DragIcon } from "@ya.praktikum/react-developer-burger-ui-components";

export default function ConstructorList({arrayInitialization}) {
    
    const loaf = arrayInitialization[0];
    const ingredients = arrayInitialization.filter(item => item.type !== 'bun');
    console.log(loaf)


    return(
    <ul className={styles.list}>
          
    </ul>
    );
}

/*{ingredients.map(item => {
    return <li></li>
})}*/

/*<li>
<ConstructorElement
    type="top"
    isLocked={true}
    text={loaf.name}
    price={loaf.price}
    thumbnail={loaf.image}
/>
</li>

<li>
<ConstructorElement
        type="bottom"
        isLocked={true}
        text={loaf.name}
        price={loaf.price}
        thumbnail={loaf.image}
    /> 
</li>*/
