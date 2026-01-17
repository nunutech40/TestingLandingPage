"use client"

import { Container } from "@/components/ui/container"
import { AlertTriangle, FileQuestion, Lock, Clock } from "lucide-react"
import { motion } from "framer-motion"

export function ProblemSection() {
    const problems = [
        {
            icon: FileQuestion,
            title: "Dokumen Berantakan",
            description: "Sertifikat tanah di lemari, BPKB di laci, deposito entah dimana. Keluarga tidak tahu harus cari kemana."
        },
        {
            icon: Lock,
            title: "Password Terlupakan",
            description: "PIN ATM, password email, akun investasi... Semua ada di kepala Anda. Bagaimana jika tiba-tiba lupa atau terjadi sesuatu?"
        },
        {
            icon: Clock,
            title: "Waktu Terbuang",
            description: "Saat dibutuhkan mendadak, keluarga harus menghabiskan berhari-hari bahkan berminggu-minggu mencari dokumen penting."
        },
        {
            icon: AlertTriangle,
            title: "Risiko Hilang/Sengketa",
            description: "Tanpa pencatatan jelas, aset bisa hilang begitu saja atau memicu konflik antar ahli waris di kemudian hari."
        }
    ]

    return (
        <section className="py-20 bg-slate-50">
            <Container>
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-16"
                >
                    <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-slate-900 mb-6">
                        Apakah Ini Yang Anda Rasakan?
                    </h2>
                    <p className="text-lg md:text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
                        Anda sudah bekerja keras mengumpulkan aset. Tapi apakah keluarga Anda tahu
                        <span className="font-bold text-primary"> dimana saja aset tersebut berada</span>?
                    </p>
                </motion.div>

                <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
                    {problems.map((problem, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            className="bg-white rounded-xl p-6 shadow-md hover:shadow-xl transition-shadow border-l-4 border-red-500"
                        >
                            <div className="flex items-start gap-4">
                                <div className="bg-red-50 p-3 rounded-lg flex-shrink-0">
                                    <problem.icon className="h-6 w-6 text-red-600" />
                                </div>
                                <div>
                                    <h3 className="text-xl font-bold text-slate-900 mb-2">
                                        {problem.title}
                                    </h3>
                                    <p className="text-slate-600 leading-relaxed">
                                        {problem.description}
                                    </p>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>

                {/* Emotional Story */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.4 }}
                    className="mt-16 bg-gradient-to-r from-slate-800 to-slate-900 text-white rounded-2xl p-8 md:p-12 max-w-4xl mx-auto"
                >
                    <div className="text-center">
                        <p className="text-xl md:text-2xl font-semibold mb-4 italic">
                            "Saat Pak Budi meninggal mendadak, keluarganya baru tahu dia punya 3 deposito
                            dan 2 tanah di luar kota..."
                        </p>
                        <p className="text-lg text-slate-300 mb-6">
                            Sayangnya, tidak ada yang tahu nomor rekening dan lokasi persisnya.
                            Butuh 8 bulan untuk melacak semuanya.
                        </p>
                        <p className="text-secondary font-bold text-xl">
                            Jangan biarkan ini terjadi pada keluarga Anda.
                        </p>
                    </div>
                </motion.div>
            </Container>
        </section>
    )
}
