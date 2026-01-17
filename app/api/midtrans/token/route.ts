import { NextRequest, NextResponse } from 'next/server';
import { createSnapToken } from '@/lib/midtrans';

export async function POST(request: NextRequest) {
    try {
        const body = await request.json();
        const { customerName, customerEmail, customerPhone } = body;

        // Validate input
        if (!customerName || !customerEmail || !customerPhone) {
            return NextResponse.json(
                { error: 'Missing required fields' },
                { status: 400 }
            );
        }

        // Generate unique order ID
        const orderId = `JV-${Date.now()}-${Math.random().toString(36).substr(2, 9)}`;

        // Create Snap token
        const { token, redirectUrl } = await createSnapToken({
            orderId,
            grossAmount: 297000, // Rp 297.000
            customerName,
            customerEmail,
            customerPhone,
        });

        return NextResponse.json({
            success: true,
            token,
            redirectUrl,
            orderId,
        });
    } catch (error) {
        console.error('API Error:', error);
        return NextResponse.json(
            { error: 'Failed to create payment token' },
            { status: 500 }
        );
    }
}
