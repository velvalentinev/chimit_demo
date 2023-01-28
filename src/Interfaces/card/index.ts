export interface ICardResponseItem {
    body: {
        en: string
        id: string
    }
    id: number
    link: string
    link_title: string
    title: {
        en: string
        id: string
    }
}

export interface ICardReselectedItem {
    id: number
    title: string
    link_title: string
    link: string
    text: string
}
