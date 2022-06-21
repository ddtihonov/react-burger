import React, { useCallback, FC} from 'react';
import { NavLink} from 'react-router-dom';
import styles from './ProfileMenu.module.css';
import { useDispatch} from 'react-redux';
import {onSignOut} from '../../services/actions/singnOut';

export const ProfileMenu: FC = () => {

    const dispatch: any = useDispatch(); 

    const signOut = useCallback(() => {
        const refreshToken = localStorage.getItem('refreshToken');
        dispatch(onSignOut(refreshToken));
    }, [dispatch]);
    

    const setActive =({isActive}: any) => isActive ? styles.link_active : styles.link 

    return (
            <div className={styles.container}>
                <NavLink 
                to='/profile' 
                className={setActive} 
                >Профиль</NavLink>
                <NavLink 
                to='/profile/orders' 
                className={setActive}
                >История заказов</NavLink>
                <button
                    type="button" 
                    onClick={signOut} 
                    className={styles.button} 
                >Выход</button>
                <p className={styles.text}>
                В этом разделе вы можете изменить свои персональные данные
                </p>
            </div>
    )
}