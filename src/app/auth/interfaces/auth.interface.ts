export interface AuthRequestDTO {
    email: string;
    password: string;
}

export interface AuthResponseDTO {
    token: string;
    refreshToken: string;
    user: UserProfileDTO;
}

export interface AuthRequestDTO {
    email: string;
    password: string;
}

export interface AuthResponseDTO {
    token: string;
    refreshToken: string;
    user: UserProfileDTO;
}
export interface CouponResponseDTO {
    code: string;
    type: string;
    discountValue: string;
    minAmount: string;
    startDate: string;
    expirationDate: string;
    description: string;
    maxUsageCount: number;
    isActive: boolean;
}

export interface PaymentAPIResponseDTO {
    success: boolean;
    transactionId: string;
    message: string;
}

export interface RechargeResponseDTO {
    date: string;
    time: string;
    voucher: string;
    cardNumber: string;
    rechargedAmount: string;
    status: string;
}


export interface RegisterRequestDTO {
    firstname: string; // Must contain only letters
    lastname: string;  // Must contain only letters
    dni: string;       // Must be exactly 8 digits
    email: string;     // Must be a valid email format
    password: string;  // Must be at least 8 characters long
}


export interface UserProfileDTO {
    firstname: string;
    lastname: string;
    email: string;
    dni: string;
    role: string;
}