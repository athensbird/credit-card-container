export type CardDetailProps = {
    cardType: string,
    cardNumber: string,
    cardholderName: string,
    expirationDate: string,
    uiTheme: {
        backgroundGradient: string,
        textColor: string,
    }
}

export type Card = CardDetailProps & {
    id: string
}

export type CardList = Array<Card> | null;