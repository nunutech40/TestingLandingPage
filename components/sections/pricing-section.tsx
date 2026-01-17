"use client"

import { useState } from "react"
import { Container } from "@/components/ui/container"
import { Button } from "@/components/ui/button"
import { CheckCircle2, ShoppingCart, MessageCircle, Shield, Download, HeadphonesIcon } from "lucide-react"
import { motion } from "framer-motion"
import { CheckoutModal } from "@/components/shared/checkout-modal"

export function PricingSection() {
    const [isCheckoutOpen, setIsCheckoutOpen] = useState(false)
    const whatsappNumber = "62878310251570"
    const whatsappMessage = encodeURIComponent(
        "Halo Admin, saya mau pesan JuraganVault. Bagaimana cara pembayarannya?"
    )

    const included = [
        "Master Dashboard Aset (Excel + Google Sheets)",
        "Buku Panduan Aset (PDF Printable)",
        "Video Tutorial Bahasa Indonesia",
        "Update Gratis Selamanya",
        "Akses Member Area",
        "Support via WhatsApp"
    ]

    const guarantees = [
        {
            icon: Shield,
            title: "Garansi 30 Hari",
            description: "Tidak puas? Uang kembali 100%"
        },
        {
            icon: Download,
            title: "Langsung Download",
            description: "Akses instan setelah pembayaran"
        },
        {
            icon: HeadphonesIcon,
            title: "Support Selamanya",
            description: "Tanya jawab via WA kapanpun"
        }
    ]

    return (
        <section id="pricing" className="py-20 bg-gradient-to-b from-slate-50 to-white">
            <Container>
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-16"
                >
                    <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-slate-900 mb-6">
                        Investasi Untuk <span className="text-primary">Ketenangan Keluarga</span>
                    </h2>
                    <p className="text-lg md:text-xl text-slate-600 max-w-3xl mx-auto">
                        Harga konsultasi notaris untuk urus warisan bisa jutaan rupiah.
                        Dengan JuraganVault, Anda cegah masalah sejak awal.
                    </p>
                </motion.div>

                {/* Pricing Card */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="max-w-2xl mx-auto"
                >
                    <div className="bg-white rounded-2xl shadow-2xl border-4 border-primary/20 overflow-hidden">
                        {/* Header */}
                        <div className="bg-gradient-to-r from-primary to-blue-700 text-white text-center py-8 px-6">
                            <div className="inline-block bg-secondary text-slate-900 px-4 py-1 rounded-full text-sm font-bold mb-4">
                                🔥 PROMO LAUNCHING
                            </div>
                            <h3 className="text-3xl font-bold mb-2">Paket JuraganVault Lengkap</h3>
                            <p className="text-blue-100">Sekali bayar, akses selamanya</p>
                        </div>

                        <div className="text-center py-8 bg-slate-50">
                            <div className="text-slate-500 text-lg mb-2">
                                <span className="line-through">Rp 497.000</span>
                            </div>
                            <div className="text-5xl md:text-6xl font-bold text-primary mb-2">
                                Rp 297.000
                            </div>
                            <div className="text-slate-600 font-semibold">
                                Hemat Rp 200.000 (40% OFF)
                            </div>
                            <div className="mt-4 text-sm text-red-600 font-semibold">
                                ⏰ Promo terbatas! Harga normal berlaku setelah 100 pembeli pertama
                            </div>
                        </div>

                        {/* What's Included */}
                        <div className="px-8 py-8">
                            <h4 className="text-xl font-bold text-slate-900 mb-6 text-center">
                                Yang Anda Dapatkan:
                            </h4>
                            <div className="space-y-4 mb-8">
                                {included.map((item, index) => (
                                    <div key={index} className="flex items-start gap-3">
                                        <CheckCircle2 className="h-6 w-6 text-green-600 flex-shrink-0 mt-0.5" />
                                        <span className="text-slate-700 text-lg">{item}</span>
                                    </div>
                                ))}
                            </div>

                            {/* CTA Buttons */}
                            <div className="space-y-4">
                                <Button
                                    size="lg"
                                    className="w-full text-lg h-14 group"
                                    onClick={() => setIsCheckoutOpen(true)}
                                >
                                    <ShoppingCart className="mr-2 h-5 w-5 group-hover:scale-110 transition-transform" />
                                    Pesan Sekarang - Rp 297.000
                                </Button>

                                <Button
                                    size="lg"
                                    variant="outline"
                                    className="w-full text-lg h-14 border-2 border-green-600 text-green-700 hover:bg-green-50"
                                    asChild
                                >
                                    <a
                                        href={`https://wa.me/${whatsappNumber}?text=${whatsappMessage}`}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                    >
                                        <MessageCircle className="mr-2 h-5 w-5" />
                                        Tanya Admin Dulu via WA
                                    </a>
                                </Button>
                            </div>
                        </div>
                    </div>
                </motion.div>

                {/* Guarantees */}
                <div className="grid md:grid-cols-3 gap-6 mt-16 max-w-4xl mx-auto">
                    {guarantees.map((item, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            className="text-center"
                        >
                            <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                                <item.icon className="h-8 w-8 text-primary" />
                            </div>
                            <h4 className="font-bold text-slate-900 mb-2">{item.title}</h4>
                            <p className="text-sm text-slate-600">{item.description}</p>
                        </motion.div>
                    ))}
                </div>
            </Container>

            <CheckoutModal isOpen={isCheckoutOpen} onClose={() => setIsCheckoutOpen(false)} />
        </section>
    )
}
