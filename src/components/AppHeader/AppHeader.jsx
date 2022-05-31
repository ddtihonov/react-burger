import React from 'react';
import { NavLink } from 'react-router-dom';
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
            <NavLink className={header.link}  to={'/'} activeClassName={header.active}>
              <BurgerIcon type="secondary"/>
              <span className={header.text}>
                Конструктор
              </span>
            </NavLink>
            <button className={header.link}>
              <ListIcon type="secondary"/>
              <span
                className={`${header.text} ${header.color}`}
              >
                Лента заказов
              </span>
            </button>
          </nav>
          <Logo />
          <NavLink className={header.link}  to={'/profile'} activeClassName={header.active}>
            <ProfileIcon type="secondary"/>
            <span className={header.text}>
                Личный кабинет
              </span>
          </NavLink>
        </div>
      </header>
    );
  };