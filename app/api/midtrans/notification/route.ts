import { NextRequest, NextResponse } from 'next/server';
import crypto from 'crypto';

export async function POST(request: NextRequest) {
    try {
        const body = await request.json();

        // Verify notification authenticity
        const serverKey = process.env.MIDTRANS_SERVER_KEY || '';
        const signatureKey = body.signature_key;
        const orderId = body.order_id;
        const statusCode = body.status_code;
        const grossAmount = body.gross_amount;

        const hash = crypto
            .createHash('sha512')
            .update(`${orderId}${statusCode}${grossAmount}${serverKey}`)
            .digest('hex');

        if (hash !== signatureKey) {
            return NextResponse.json(
                { error: 'Invalid signature' },
                { status: 403 }
            );
        }

        // Handle different transaction statuses
        const transactionStatus = body.transaction_status;
        const fraudStatus = body.fraud_status;

        console.log('Midtrans Notification:', {
            orderId,
            transactionStatus,
            fraudStatus,
        });

        if (transactionStatus === 'capture') {
            if (fraudStatus === 'accept') {
                // Payment successful
                // TODO: Send email with download link
                console.log(`✅ Payment successful for order: ${orderId}`);
            }
        } else if (transactionStatus === 'settlement') {
            // Payment successful
            // TODO: Send email with download link
            console.log(`✅ Payment settled for order: ${orderId}`);
        } else if (
            transactionStatus === 'cancel' ||
            transactionStatus === 'deny' ||
            transactionStatus === 'expire'
        ) {
            // Payment failed
            console.log(`❌ Payment failed for order: ${orderId}`);
        } else if (transactionStatus === 'pending') {
            // Payment pending
            console.log(`⏳ Payment pending for order: ${orderId}`);
        }

        return NextResponse.json({ success: true });
    } catch (error) {
        console.error('Webhook Error:', error);
        return NextResponse.json(
            { error: 'Webhook processing failed' },
            { status: 500 }
        );
    }
}
