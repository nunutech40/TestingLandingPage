"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { X, Loader2 } from "lucide-react"
import { motion, AnimatePresence } from "framer-motion"

// ============================================
// DEMO MODE: Set to true to skip Midtrans
// ============================================
const DEMO_MODE = true // Change to false when Midtrans is ready

interface CheckoutModalProps {
    isOpen: boolean
    onClose: () => void
}

export function CheckoutModal({ isOpen, onClose }: CheckoutModalProps) {
    const [loading, setLoading] = useState(false)
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        phone: "",
    })

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault()
        setLoading(true)

        // ============================================
        // DEMO MODE: Skip Midtrans, go directly to Thank You
        // ============================================
        if (DEMO_MODE) {
            console.log("🎭 DEMO MODE: Simulating successful payment...")
            console.log("Customer Data:", formData)

            // Simulate API delay
            await new Promise(resolve => setTimeout(resolve, 1500))

            // Redirect to Thank You page
            window.location.href = "/thank-you"
            return
        }

        // ============================================
        // PRODUCTION MODE: Real Midtrans Integration
        // ============================================
        try {
            // Call API to get Snap token
            const response = await fetch("/api/midtrans/token", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({
                    customerName: formData.name,
                    customerEmail: formData.email,
                    customerPhone: formData.phone,
                }),
            })

            const data = await response.json()

            if (data.success && data.token) {
                // Load Midtrans Snap
                // @ts-ignore
                window.snap.pay(data.token, {
                    onSuccess: function () {
                        window.location.href = "/thank-you"
                    },
                    onPending: function () {
                        alert("Menunggu pembayaran Anda...")
                    },
                    onError: function () {
                        alert("Terjadi kesalahan. Silakan coba lagi.")
                    },
                    onClose: function () {
                        setLoading(false)
                    },
                })
            } else {
                alert("Gagal membuat pembayaran. Silakan coba lagi.")
                setLoading(false)
            }
        } catch (error) {
            console.error("Checkout error:", error)
            alert("Terjadi kesalahan. Silakan coba lagi.")
            setLoading(false)
        }
    }

    return (
        <AnimatePresence>
            {isOpen && (
                <>
                    {/* Backdrop */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={onClose}
                        className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50"
                    />

                    {/* Modal */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95, y: 20 }}
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        exit={{ opacity: 0, scale: 0.95, y: 20 }}
                        className="fixed inset-0 z-50 flex items-center justify-center p-4"
                    >
                        <div className="bg-white rounded-2xl shadow-2xl max-w-md w-full p-6 relative">
                            {/* Close Button */}
                            <button
                                onClick={onClose}
                                className="absolute top-4 right-4 text-slate-400 hover:text-slate-600 transition-colors"
                            >
                                <X className="h-6 w-6" />
                            </button>

                            {/* Header */}
                            <div className="mb-6">
                                <h2 className="text-2xl font-bold text-slate-900 mb-2">
                                    Checkout - Rp 297.000
                                </h2>
                                <p className="text-slate-600">
                                    Isi data Anda untuk melanjutkan pembayaran
                                </p>
                            </div>

                            {/* Form */}
                            <form onSubmit={handleSubmit} className="space-y-4">
                                <div>
                                    <label className="block text-sm font-medium text-slate-700 mb-2">
                                        Nama Lengkap
                                    </label>
                                    <input
                                        type="text"
                                        required
                                        value={formData.name}
                                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                                        className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all"
                                        placeholder="Budi Santoso"
                                    />
                                </div>

                                <div>
                                    <label className="block text-sm font-medium text-slate-700 mb-2">
                                        Email
                                    </label>
                                    <input
                                        type="email"
                                        required
                                        value={formData.email}
                                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                                        className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all"
                                        placeholder="budi@email.com"
                                    />
                                </div>

                                <div>
                                    <label className="block text-sm font-medium text-slate-700 mb-2">
                                        Nomor WhatsApp
                                    </label>
                                    <input
                                        type="tel"
                                        required
                                        value={formData.phone}
                                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                                        className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all"
                                        placeholder="08123456789"
                                    />
                                </div>

                                <Button
                                    type="submit"
                                    size="lg"
                                    className="w-full text-lg"
                                    disabled={loading}
                                >
                                    {loading ? (
                                        <>
                                            <Loader2 className="mr-2 h-5 w-5 animate-spin" />
                                            Memproses...
                                        </>
                                    ) : (
                                        "Lanjut ke Pembayaran"
                                    )}
                                </Button>
                            </form>

                            {/* Trust Badge */}
                            <div className="mt-6 pt-6 border-t border-slate-200">
                                <div className="flex items-center justify-center gap-2 text-sm text-slate-600">
                                    <span className="text-green-600">🔒</span>
                                    <span>Pembayaran aman dengan Midtrans</span>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                </>
            )}
        </AnimatePresence>
    )
}
