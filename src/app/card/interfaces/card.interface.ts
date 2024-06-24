export interface CardAddRequestDTO {
    cardNumber: string;
}
export interface CardStateChangeDTO {
    cardNumber: string;
    password: string;
}
export interface CardCreateRequestDTO {
    cardNumber: string;
    cardType: CardType;
}

export interface CardDetailsDTO {
    cardNumber: string;
    cardType: string;
    balance: string;
    blocked: boolean;
}

export enum CardType {
    NORMAL= 'NORMAL',
    ESCOLAR='ESCOLAR',
    UNVERSITARIO = 'UNIVERSITARIO'
    // Agrega otros tipos de tarjeta según sea necesario
}