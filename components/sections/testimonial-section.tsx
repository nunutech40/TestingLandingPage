"use client"

import { Container } from "@/components/ui/container"
import { Star, Quote } from "lucide-react"
import { motion } from "framer-motion"
import Image from "next/image"

export function TestimonialSection() {
    const testimonials = [
        {
            name: "Pak Hendra Wijaya",
            role: "Pengusaha Properti, Jakarta",
            avatar: "👨‍💼",
            rating: 5,
            text: "Dulu saya punya 5 sertifikat tanah tapi istri gak tahu dimana aja lokasinya. Sekarang semua tercatat rapi di Excel. Istri jadi tenang, saya juga lega.",
        },
        {
            name: "Ibu Siti Rahayu",
            role: "Pensiunan PNS, Bandung",
            avatar: "👩",
            rating: 5,
            text: "Suami saya meninggal 2 tahun lalu. Untung dia sudah pakai template ini. Saya langsung tahu semua aset dan dokumen penting ada dimana. Sangat membantu!",
        },
        {
            name: "Pak Bambang Sutrisno",
            role: "Kontraktor, Surabaya",
            avatar: "👨‍🔧",
            rating: 5,
            text: "Saya gaptek banget soal Excel. Tapi template ini tinggal isi aja, rumusnya udah otomatis. Anak saya yang bantu isi, sekarang dia juga tahu aset keluarga.",
        },
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
                    <div className="inline-block bg-secondary/10 text-secondary px-4 py-2 rounded-full text-sm font-semibold mb-4">
                        ⭐ Testimoni Pengguna
                    </div>
                    <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-slate-900 mb-6">
                        Mereka Sudah Tenang, <span className="text-primary">Giliran Anda</span>
                    </h2>
                    <p className="text-lg md:text-xl text-slate-600 max-w-3xl mx-auto">
                        Lebih dari 500+ keluarga Indonesia sudah menggunakan JuraganVault
                    </p>
                </motion.div>

                <div className="grid md:grid-cols-3 gap-8">
                    {testimonials.map((testimonial, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            className="bg-gradient-to-br from-blue-50 to-white rounded-2xl p-6 border border-blue-100 relative"
                        >
                            {/* Quote Icon */}
                            <div className="absolute top-4 right-4 text-primary/10">
                                <Quote className="h-12 w-12" />
                            </div>

                            {/* Rating */}
                            <div className="flex gap-1 mb-4">
                                {[...Array(testimonial.rating)].map((_, i) => (
                                    <Star key={i} className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                                ))}
                            </div>

                            {/* Testimonial Text */}
                            <p className="text-slate-700 leading-relaxed mb-6 italic">
                                "{testimonial.text}"
                            </p>

                            {/* Author */}
                            <div className="flex items-center gap-3">
                                <div className="text-4xl">{testimonial.avatar}</div>
                                <div>
                                    <div className="font-bold text-slate-900">{testimonial.name}</div>
                                    <div className="text-sm text-slate-600">{testimonial.role}</div>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>

                {/* Trust Stats */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.4 }}
                    className="mt-16 grid grid-cols-3 gap-8 max-w-3xl mx-auto"
                >
                    <div className="text-center">
                        <div className="text-4xl font-bold text-primary mb-2">500+</div>
                        <div className="text-slate-600">Keluarga Terlindungi</div>
                    </div>
                    <div className="text-center">
                        <div className="text-4xl font-bold text-primary mb-2">4.9/5</div>
                        <div className="text-slate-600">Rating Pengguna</div>
                    </div>
                    <div className="text-center">
                        <div className="text-4xl font-bold text-primary mb-2">98%</div>
                        <div className="text-slate-600">Puas & Rekomen</div>
                    </div>
                </motion.div>
            </Container>
        </section>
    )
}
