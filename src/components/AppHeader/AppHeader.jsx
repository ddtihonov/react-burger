import React from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import header from './header.module.css';
import {BurgerIcon, ListIcon, Logo, ProfileIcon,
} from "@ya.praktikum/react-developer-burger-ui-components";

export default function AppHeader() {

  const navigate = useNavigate();
  const location = useLocation();

    return (
      <header className={header.header}>
        <div className={header.box} >
          <nav className={header.nav}>
            <button className={header.navButton} onClick={() => { navigate('/')}}>
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
            <button className={header.navButton} onClick={() => { navigate('/login') }}>
              <ProfileIcon type="primary"/>
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