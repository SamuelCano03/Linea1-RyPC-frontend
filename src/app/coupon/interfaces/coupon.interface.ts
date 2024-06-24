export interface CouponResponseDTO {
    code: string;
    type: string;
    discountValue: string;
    minAmount: string;
    startDate: string;
    expirationDate: string;
    description: string;
    maxUsageCount: number;
    active: boolean;
}

export interface CardDetailsDTO {
    cardNumber: string;
    cardType: string;
    balance: string;
    blocked: boolean;
}

