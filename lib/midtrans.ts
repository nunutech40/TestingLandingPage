import midtransClient from 'midtrans-client';

// Initialize Snap API client
export const snap = new midtransClient.Snap({
    isProduction: false, // Set to true for production
    serverKey: process.env.MIDTRANS_SERVER_KEY || '',
    clientKey: process.env.NEXT_PUBLIC_MIDTRANS_CLIENT_KEY || '',
});

export interface OrderDetails {
    orderId: string;
    grossAmount: number;
    customerName: string;
    customerEmail: string;
    customerPhone: string;
}

export async function createSnapToken(orderDetails: OrderDetails) {
    const parameter = {
        transaction_details: {
            order_id: orderDetails.orderId,
            gross_amount: orderDetails.grossAmount,
        },
        customer_details: {
            first_name: orderDetails.customerName,
            email: orderDetails.customerEmail,
            phone: orderDetails.customerPhone,
        },
        item_details: [
            {
                id: 'juraganvault-paket-lengkap',
                price: orderDetails.grossAmount,
                quantity: 1,
                name: 'Paket JuraganVault Lengkap',
            },
        ],
    };

    try {
        const transaction = await snap.createTransaction(parameter);
        return {
            token: transaction.token,
            redirectUrl: transaction.redirect_url,
        };
    } catch (error) {
        console.error('Midtrans error:', error);
        throw new Error('Failed to create payment token');
    }
}
