"use client"

import { Container } from "@/components/ui/container"
import { Button } from "@/components/ui/button"
import { MessageCircle, ShoppingCart } from "lucide-react"
import Image from "next/image"
import { motion } from "framer-motion"

export function HeroSection() {
    const whatsappNumber = "6281234567890" // Ganti dengan nomor asli
    const whatsappMessage = encodeURIComponent(
        "Halo Admin JuraganVault, saya tertarik dengan Template Aset & Warisan. Bisa bantu saya?"
    )

    return (
        <section className="relative bg-gradient-to-b from-blue-50 to-white py-16 md:py-24">
            <Container>
                <div className="grid md:grid-cols-2 gap-12 items-center">
                    {/* Left Content */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                    >
                        <div className="inline-block bg-secondary/10 text-secondary px-4 py-2 rounded-full text-sm font-semibold mb-6">
                            ✨ Solusi #1 untuk Keluarga Indonesia
                        </div>

                        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-slate-900 leading-tight mb-6">
                            Anak & Istri Sudah Tahu{" "}
                            <span className="text-primary">Lokasi Semua Aset</span> Anda?
                        </h1>

                        <p className="text-lg md:text-xl text-slate-600 mb-4 leading-relaxed">
                            Jangan biarkan keluarga bingung mencari sertifikat tanah, password bank,
                            atau deposito saat Anda tidak ada.
                        </p>

                        <p className="text-base md:text-lg text-slate-700 font-semibold mb-8">
                            Rapikan semua dokumen penting dalam <span className="text-primary">1 sistem sederhana</span> yang
                            mudah dipahami keluarga Anda.
                        </p>

                        {/* CTA Buttons */}
                        <div className="flex flex-col sm:flex-row gap-4">
                            <Button size="lg" className="text-lg group">
                                <ShoppingCart className="mr-2 h-5 w-5 group-hover:scale-110 transition-transform" />
                                Pesan Sekarang - Rp 197.000
                            </Button>

                            <Button
                                size="lg"
                                variant="outline"
                                className="text-lg border-2 border-green-600 text-green-700 hover:bg-green-50"
                                asChild
                            >
                                <a
                                    href={`https://wa.me/${whatsappNumber}?text=${whatsappMessage}`}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    <MessageCircle className="mr-2 h-5 w-5" />
                                    Chat Admin WA
                                </a>
                            </Button>
                        </div>

                        {/* Trust Badge */}
                        <div className="mt-8 flex items-center gap-4 text-sm text-slate-600">
                            <div className="flex items-center gap-2">
                                <span className="text-green-600 text-2xl">✓</span>
                                <span>Garansi 30 Hari</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <span className="text-green-600 text-2xl">✓</span>
                                <span>Langsung Download</span>
                            </div>
                        </div>
                    </motion.div>

                    {/* Right Image */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="relative"
                    >
                        <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                            <Image
                                src="/hero-family.png"
                                alt="Keluarga Indonesia yang tenang mengelola aset bersama"
                                width={600}
                                height={600}
                                className="w-full h-auto"
                                priority
                            />
                        </div>

                        {/* Floating Badge */}
                        <motion.div
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.8 }}
                            className="absolute -bottom-6 -left-6 bg-white rounded-xl shadow-lg p-4 border-2 border-secondary"
                        >
                            <div className="text-sm text-slate-600">Sudah dipercaya</div>
                            <div className="text-2xl font-bold text-primary">500+ Keluarga</div>
                        </motion.div>
                    </motion.div>
                </div>
            </Container>
        </section>
    )
}
