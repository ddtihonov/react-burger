import React, {FC} from 'react';
import { NavLink, Link } from 'react-router-dom';
import header from './header.module.css';
import {BurgerIcon, ListIcon, Logo, ProfileIcon,
} from "@ya.praktikum/react-developer-burger-ui-components";

export const AppHeader: FC = () => {

  const setActive =({isActive}: any) => isActive ? header.link_active : header.link;

    return (
      <header className={header.header}>
        <div className={header.box} >
          <nav className={header.nav}>
            <NavLink className={setActive}  to={'/'}>
              <BurgerIcon type='secondary'/>
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
          <Link className={header.link_logo}  to={'/'}><Logo /></Link>
          <NavLink className={setActive}  to={'/profile'}>
            <ProfileIcon type='secondary'/>
            <span className={header.text}>
                Личный кабинет
              </span>
          </NavLink>
        </div>
      </header>
    );
  };