import React, {useEffect, useState} from 'react';
import {CardsList} from '../../components'
import {getCardData} from '../../services/getCardData'
import {ICardReselectedItem} from "../../Interfaces/card";

import styles from './styles.module.scss';

const USER_LNG = 'en'

const Dashboard = () => {
    const [cardsList, setCardsList] = useState<ICardReselectedItem[]>([])

    const getData = () => {
        getCardData({lng: USER_LNG})
            .then((data) => {
                setCardsList(data)
            })
            .catch((err) => {
                console.log('err', err)
            })
    }

    useEffect(() => {
        getData()
    }, []);

    return (
        <div className={styles.dashboard_container}>
            <CardsList cardsList={cardsList}/>
        </div>
    );
}

export default Dashboard;
