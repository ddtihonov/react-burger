import React from 'react';
import header from './header.module.css';
import {BurgerIcon, ListIcon, Logo, ProfileIcon,
} from "@ya.praktikum/react-developer-burger-ui-components";

export default function AppHeader() {
    return (
      <header className={header.header}>
        <div className={header.box} >
          <nav className={header.nav}>
            <button className={header.navButton}>
              <BurgerIcon type="primary"/>
              <span className={header.text}>
                Конструктор
              </span>
            </button>
            <button className={header.navButton}>
              <ListIcon type="secondary"/>
              <span
                className={`${header.text} ${header.color}`}
              >
                Лента заказов
              </span>
            </button>
          </nav>
          <Logo />
            <button className={header.navButton}>
              <ProfileIcon type="secondary"/>
              <span
                  className={`${header.text} ${header.color}`}
              >
                Личный кабинет
              </span>
            </button>
        </div>
      </header>
    );
  };