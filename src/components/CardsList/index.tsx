import React, {FC} from "react";
import {ICardReselectedItem} from "../../Interfaces/card";
import {Card} from "../index";

import styles from './styles.module.scss'

interface IProps {
    cardsList: ICardReselectedItem[]
}

const CardsList: FC<IProps> = (props: IProps) => {
    const {cardsList} = props
    return (
        <div className={styles.cards_list}>
            {cardsList.map((card: ICardReselectedItem) => <Card key={card.id} card={card}/>)}
        </div>
    )
}
export default CardsList
