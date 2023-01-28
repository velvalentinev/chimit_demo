import {ICardReselectedItem, ICardResponseItem} from '../Interfaces/card'
import {ILng} from '../Interfaces'

interface IPayload {
    lng: keyof typeof ILng
}

const DATA_URL = 'https://my-json-server.typicode.com/savayer/demo/posts'

const reselectResponse = (arr: ICardResponseItem[], lng: keyof typeof ILng) => {
    return arr.reduce((prev: ICardReselectedItem[], curr) => {
        const reselected = {
            id: curr.id,
            title: curr.title?.[lng] ?? 'ops...',
            link_title: curr.link_title,
            link: curr.link,
            text: curr.body?.[lng]?.substring(0, 50) ?? 'ops...'

        }
        return [...prev, reselected]
    }, [])
}

const getCardData = ({lng}: IPayload) => {
    return new Promise(async (resolve: (response: ICardReselectedItem[]) => void, reject) => {
        const response = await fetch(DATA_URL)
        const data = await response.json()
        const reselectedData:ICardReselectedItem[] = reselectResponse(data, lng)
        if (reselectedData) {
            resolve(reselectedData)
        } else {
            reject({error: 'ops...'})
        }
    })
}

export {
    getCardData
}
