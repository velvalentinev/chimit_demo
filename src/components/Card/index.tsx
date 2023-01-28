import React, {FC, useMemo} from 'react';
import classnames from 'classnames'

import {ICardReselectedItem} from '../../Interfaces/card'
import {analyticsTrackClick} from '../../utils/anal'

import styles from './styles.module.scss';

const BLANK_LINK_IDS = [1]
const RED_LINK_IDS = [1]
const DEFAULT_REL = 'nofollow'

interface IProps {
    card: ICardReselectedItem;
    disableAnal?: boolean;
    handleClick?: () => void;
}

const Card: FC<IProps> = (props: IProps) => {
    const {disableAnal, handleClick} = props
    const {text, title, link, link_title, id} = props.card
    const onClick = () => {
        if (!disableAnal) {
            analyticsTrackClick(link);
        }
        if (handleClick) {
            handleClick()
        }
    }

    const getTarget = (checkId: number) => {
        if (BLANK_LINK_IDS.includes(checkId)) {
            return '_blank'
        }
        return ''
    }

    const getCardLinkStyle = (checkId: number) => {
        if (RED_LINK_IDS.includes(checkId)) {
            return styles.card__link_red
        }
        return ''
    }

    const memoizedTarget = useMemo(() => getTarget(id), [id]);
    const memoizedLinkStyle = useMemo(() => getCardLinkStyle(id), [id]);

    return (
        <div className={styles.card_container}>
            <div className="card__title">{title}</div>
            <div className="card__text">{text}</div>
            <a
                className={classnames(['default-link', styles.card__link, memoizedLinkStyle])}
                target={memoizedTarget}
                rel={DEFAULT_REL}
                href={link}
                onClick={onClick}
            >
                {link_title}
            </a>
        </div>
    )
}

export default Card
