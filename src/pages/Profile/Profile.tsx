import React, { useEffect, useState, useCallback, FC, FormEvent } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styles from './Profile.module.css';
import {ProfileMenu} from '../../components/ProfileMnu/ProfileMenu';
import {onEditProfile} from '../../services/actions/updateUserInfo';
import {
    EmailInput,
    PasswordInput,
    Input,
} from '@ya.praktikum/react-developer-burger-ui-components';



export const Profile: FC = () => {

const dispatch: any = useDispatch(); 

const {name, email} = useSelector((store: any) => store.authData);
    
const [userEmail, setUserEmail] = useState<string>(email);
const [userPassword, setUserPassword] = useState<string>('');
const [userName, setUserName] = useState<string>(name);
const [isChange, setIsChange] = useState<boolean>(false);

useEffect(() => {
        if (!(userEmail === email && userPassword === '' && userName === name)) {
            setIsChange(true);
        } else {
            setIsChange(false);
        }
}, [userEmail, userPassword, userName, email, name]);

const handleChangeEmail = useCallback((value: string) => {
    setUserEmail(value);
}, []);

const handleChangePassword = useCallback((value: string) =>{
    setUserPassword(value);
}, []);

const handleChangeName = useCallback((value: string) => {
    setUserName(value);
}, []);

const onReset = useCallback(() => {
    setUserEmail(email)
    setUserName(name)
    setUserPassword('')
}, [email, name]);

const editProfile = useCallback((evt: FormEvent<HTMLFormElement>) => {
    evt.preventDefault();
    const token = localStorage.getItem('accessToken');
    dispatch(onEditProfile(userName, userEmail, userPassword, token));
    setUserEmail(email)
    setUserName(name)
    setUserPassword('')
}, [dispatch, userEmail, userPassword, userName, email, name]);
    
        return(
        <section className={styles.main}>
            <ProfileMenu/>
            <form className={styles.form} onSubmit={editProfile}>
                <div className={styles.input}>
                    <Input
                    value={userName}
                    onChange={(evt) => handleChangeName(evt.target.value)}
                    placeholder={'Имя'}
                    icon={'EditIcon'}
                    size={'default'}
                    />
                </div>
                <div className={styles.input}>
                    <EmailInput
                    name='email'
                    onChange={(evt) => handleChangeEmail(evt.target.value)}  
                    value={userEmail} 
                    size={'default'}
                    />
                </div>
                <div className={styles.input}>
                    <PasswordInput
                    name='password' 
                    onChange={(evt) => handleChangePassword(evt.target.value)}   
                    value={userPassword} 
                    size={'default'}
                    />
                </div>
                    {isChange && (
                    <div className={styles.box_button}>
                        <button
                            onClick={onReset}
                            type='button'
                            className={styles.button_reset}>Отмена
                        </button>
                        <button 
                            className={styles.button_reset} 
                            type='submit'>Сохранить
                        </button>
                    </div>
                )}
                </form>
        </section>
    )
}         