
export interface CardRechargeRequestDTO {
    trainCardNumber: string;
    paymentMethod: paymentMethod;
    cardHolder: string;
    cardNumber: string;
    expiryDate: string;
    cvv: string;
    rechargedAmount: number;
}
export interface RechargeResponseDTO {
    date: string;
    time: string;
    voucher: string;
    cardNumber: string;
    rechargedAmount: number;
    status: string;
}
export interface CardDetailsDTO {
    cardNumber: string;
    cardType: string;
    balance: string;
    blocked: boolean;
}

export enum paymentMethod  {
    CREDIT_CARD = 'CREDIT_CARD',
    DEBIT_CARD = 'DEBIT_CARD',
    YAPE = 'YAPE',
}