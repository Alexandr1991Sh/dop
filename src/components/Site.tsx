import React from 'react';
import styles from './Site.module.css'
import {Navigate, NavLink, Route, Routes} from "react-router-dom";
import {PageOne} from "./pages/PageOne";
import {PageTwo} from "./pages/PageTwo";
import {PageThree} from "./pages/PageThree";
import {Error404} from "./pages/Error404";
import {Page} from "./pages/Page";
import {dataState} from "../data/dataStste";


export const Site = () => {
    return (
        <div>
            <div className={styles.header}><h1>HEADER</h1></div>
            <div className={styles.body}>
                <div className={styles.nav}>
                   <div><NavLink to={'/path/0'} className={({isActive})=> isActive ? styles.active : styles.navLink}>Page 1</NavLink></div>
                   <div><NavLink to={'/path/1'} className={({isActive})=> isActive ? styles.active : styles.navLink}>Page 2</NavLink></div>
                   <div><NavLink to={'/path/2'} className={({isActive})=> isActive ? styles.active : styles.navLink}>Page 3</NavLink></div>
                </div>
                <div className={styles.content}>

                    <Routes>
                        <Route path={'/'} element={<Navigate to={'/path1'}/>}/>

                        <Route path={'/path/:id'} element={<Page pages={dataState.pages}/>}/>

                        <Route path={'/*'} element={<Error404/>}/>
                    </Routes>

                </div>
            </div>
        </div>
    );
};

