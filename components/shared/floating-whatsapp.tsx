"use client"

import { MessageCircle } from "lucide-react"
import { motion } from "framer-motion"

export function FloatingWhatsApp() {
    const whatsappNumber = "62878310251570"
    const whatsappMessage = encodeURIComponent(
        "Halo Admin JuraganVault, saya mau tanya-tanya dulu."
    )

    return (
        <motion.a
            href={`https://wa.me/${whatsappNumber}?text=${whatsappMessage}`}
            target="_blank"
            rel="noopener noreferrer"
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.3, delay: 1 }}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            className="fixed bottom-6 right-6 z-50 bg-green-600 hover:bg-green-700 text-white rounded-full p-4 shadow-2xl flex items-center gap-3 group"
        >
            <MessageCircle className="h-6 w-6" />
            <span className="hidden md:block font-semibold pr-2 group-hover:pr-3 transition-all">
                Chat Admin
            </span>

            {/* Pulse Animation */}
            <span className="absolute inset-0 rounded-full bg-green-600 animate-ping opacity-20"></span>
        </motion.a>
    )
}
