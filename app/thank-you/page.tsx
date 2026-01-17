import { Container } from "@/components/ui/container"
import { Button } from "@/components/ui/button"
import { CheckCircle2, Download, MessageCircle } from "lucide-react"
import Link from "next/link"

export default function ThankYouPage() {
    const whatsappNumber = "62878310251570"
    const whatsappMessage = encodeURIComponent(
        "Halo Admin, saya sudah bayar JuraganVault. Kapan saya bisa download produknya?"
    )

    return (
        <main className="min-h-screen bg-gradient-to-b from-blue-50 to-white py-16">
            <Container>
                <div className="max-w-2xl mx-auto text-center">
                    {/* Success Icon */}
                    <div className="mb-8 flex justify-center">
                        <div className="bg-green-100 rounded-full p-6">
                            <CheckCircle2 className="h-20 w-20 text-green-600" />
                        </div>
                    </div>

                    {/* Heading */}
                    <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-slate-900 mb-4">
                        Pembayaran Berhasil! 🎉
                    </h1>
                    <p className="text-lg md:text-xl text-slate-600 mb-8">
                        Terima kasih telah mempercayai JuraganVault untuk mengamankan aset keluarga Anda.
                    </p>

                    {/* Download Section */}
                    <div className="bg-white rounded-2xl shadow-xl p-8 mb-8">
                        <h2 className="text-2xl font-bold text-slate-900 mb-4">
                            Download Produk Anda
                        </h2>
                        <p className="text-slate-600 mb-6">
                            Klik tombol di bawah untuk mengunduh Paket JuraganVault Lengkap.
                        </p>

                        <Button size="lg" className="text-lg mb-4" asChild>
                            <a href="#" download>
                                <Download className="mr-2 h-5 w-5" />
                                Download Paket Lengkap (ZIP)
                            </a>
                        </Button>

                        <p className="text-sm text-slate-500">
                            Link download juga sudah dikirim ke email Anda.
                        </p>
                    </div>

                    {/* What's Next */}
                    <div className="bg-primary/5 rounded-xl p-6 mb-8">
                        <h3 className="text-xl font-bold text-slate-900 mb-4">
                            Langkah Selanjutnya:
                        </h3>
                        <ol className="text-left space-y-3 text-slate-700">
                            <li className="flex items-start gap-3">
                                <span className="bg-primary text-white rounded-full w-6 h-6 flex items-center justify-center flex-shrink-0 text-sm font-bold">1</span>
                                <span>Download file ZIP dan ekstrak di komputer Anda.</span>
                            </li>
                            <li className="flex items-start gap-3">
                                <span className="bg-primary text-white rounded-full w-6 h-6 flex items-center justify-center flex-shrink-0 text-sm font-bold">2</span>
                                <span>Buka file Excel "Master Dashboard Aset" dan mulai isi data aset Anda.</span>
                            </li>
                            <li className="flex items-start gap-3">
                                <span className="bg-primary text-white rounded-full w-6 h-6 flex items-center justify-center flex-shrink-0 text-sm font-bold">3</span>
                                <span>Tonton video tutorial untuk panduan lengkap.</span>
                            </li>
                            <li className="flex items-start gap-3">
                                <span className="bg-primary text-white rounded-full w-6 h-6 flex items-center justify-center flex-shrink-0 text-sm font-bold">4</span>
                                <span>Jika ada pertanyaan, hubungi kami via WhatsApp!</span>
                            </li>
                        </ol>
                    </div>

                    {/* Support */}
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <Button variant="outline" size="lg" asChild>
                            <Link href="/">
                                Kembali ke Beranda
                            </Link>
                        </Button>

                        <Button
                            size="lg"
                            variant="outline"
                            className="border-2 border-green-600 text-green-700 hover:bg-green-50"
                            asChild
                        >
                            <a
                                href={`https://wa.me/${whatsappNumber}?text=${whatsappMessage}`}
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <MessageCircle className="mr-2 h-5 w-5" />
                                Hubungi Admin
                            </a>
                        </Button>
                    </div>
                </div>
            </Container>
        </main>
    )
}
