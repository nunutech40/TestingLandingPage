"use client"

import { Container } from "@/components/ui/container"
import { CheckCircle2, FileSpreadsheet, BookOpen, Video } from "lucide-react"
import Image from "next/image"
import { motion } from "framer-motion"

export function SolutionSection() {
    const features = [
        {
            icon: FileSpreadsheet,
            title: "Master Dashboard Aset (Excel/Google Sheets)",
            description: "Template siap pakai dengan rumus otomatis. Tinggal isi data aset Anda, total kekayaan bersih langsung terhitung."
        },
        {
            icon: BookOpen,
            title: "Buku Panduan Aset (PDF Printable)",
            description: "Versi cetak yang bisa diisi tulis tangan. Cocok untuk Anda yang lebih suka menulis fisik."
        },
        {
            icon: Video,
            title: "Video Tutorial Lengkap",
            description: "Panduan step-by-step dalam Bahasa Indonesia. Pelan, jelas, tanpa istilah teknis yang membingungkan."
        }
    ]

    const benefits = [
        "Semua aset tercatat rapi dalam 1 tempat",
        "Keluarga tahu persis lokasi dokumen penting",
        "Hemat waktu saat dokumen dibutuhkan mendadak",
        "Cegah konflik warisan di masa depan",
        "Tenang karena sudah ada 'peta harta' untuk keluarga"
    ]

    return (
        <section className="py-20 bg-white">
            <Container>
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-16"
                >
                    <div className="inline-block bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-semibold mb-4">
                        Solusi Praktis
                    </div>
                    <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-slate-900 mb-6">
                        Kenalkan: <span className="text-primary">JuraganVault</span>
                    </h2>
                    <p className="text-lg md:text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
                        Sistem pencatatan aset & warisan yang <span className="font-bold">mudah dipahami</span>,
                        bahkan untuk yang gaptek sekalipun.
                    </p>
                </motion.div>

                {/* Product Preview */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="mb-16 max-w-4xl mx-auto"
                >
                    <div className="relative rounded-2xl overflow-hidden shadow-2xl border-4 border-primary/20">
                        <Image
                            src="/product-excel.png"
                            alt="Preview Master Dashboard Aset Keluarga - Template Excel"
                            width={1200}
                            height={800}
                            className="w-full h-auto"
                        />
                    </div>
                    <p className="text-center text-sm text-slate-500 mt-4 italic">
                        Preview: Master Dashboard Aset Keluarga (Excel Template)
                    </p>
                </motion.div>

                {/* What's Inside */}
                <div className="grid md:grid-cols-3 gap-8 mb-16">
                    {features.map((feature, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            className="bg-gradient-to-br from-blue-50 to-white rounded-xl p-6 border border-blue-100 hover:shadow-lg transition-shadow"
                        >
                            <div className="bg-primary/10 w-14 h-14 rounded-lg flex items-center justify-center mb-4">
                                <feature.icon className="h-7 w-7 text-primary" />
                            </div>
                            <h3 className="text-xl font-bold text-slate-900 mb-3">
                                {feature.title}
                            </h3>
                            <p className="text-slate-600 leading-relaxed">
                                {feature.description}
                            </p>
                        </motion.div>
                    ))}
                </div>

                {/* Benefits */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="bg-gradient-to-r from-primary to-blue-700 text-white rounded-2xl p-8 md:p-12 max-w-4xl mx-auto"
                >
                    <h3 className="text-2xl md:text-3xl font-bold mb-8 text-center">
                        Manfaat Yang Anda Dapatkan:
                    </h3>
                    <div className="grid md:grid-cols-2 gap-4">
                        {benefits.map((benefit, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, x: -20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.4, delay: index * 0.1 }}
                                className="flex items-start gap-3"
                            >
                                <CheckCircle2 className="h-6 w-6 text-secondary flex-shrink-0 mt-1" />
                                <span className="text-lg">{benefit}</span>
                            </motion.div>
                        ))}
                    </div>
                </motion.div>
            </Container>
        </section>
    )
}
