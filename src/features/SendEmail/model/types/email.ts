export interface EmailTemplateParams {
    customerName: string;
    orderDate: string;
    totalAmount: string;
    items: string;
}

export interface EmailSchema {
    isLoading: boolean;
    error?: string;
    isEmailSent: boolean;
}

export type FormData = {
    name: string;
    email: string;
    phone: string;
};
