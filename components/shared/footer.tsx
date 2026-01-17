import { Container } from "@/components/ui/container"

export function Footer() {
    return (
        <footer className="bg-slate-900 text-slate-300 py-12 mt-20">
            <Container>
                <div className="grid md:grid-cols-3 gap-8 mb-8">
                    <div>
                        <h3 className="text-xl font-bold text-white mb-4">JuraganVault</h3>
                        <p className="text-sm leading-relaxed">
                            Solusi keamanan aset dan warisan digital untuk keluarga Indonesia.
                            Dibuat dengan pendekatan praktis dan mudah dipahami.
                        </p>
                    </div>

                    <div>
                        <h4 className="font-semibold text-white mb-4">Link Penting</h4>
                        <ul className="space-y-2 text-sm">
                            <li><a href="#" className="hover:text-white transition-colors">Tentang Kami</a></li>
                            <li><a href="#" className="hover:text-white transition-colors">Hubungi Admin</a></li>
                            <li><a href="#" className="hover:text-white transition-colors">Syarat & Ketentuan</a></li>
                            <li><a href="#" className="hover:text-white transition-colors">Kebijakan Privasi</a></li>
                        </ul>
                    </div>

                    <div>
                        <h4 className="font-semibold text-white mb-4">Kantor</h4>
                        <p className="text-sm leading-relaxed">
                            Jakarta Selatan, Indonesia<br />
                            Email: help@juraganvault.com<br />
                            WA: +62 812-3456-7890
                        </p>
                    </div>
                </div>

                <div className="border-t border-slate-800 pt-8 text-center text-sm text-slate-500">
                    © {new Date().getFullYear()} JuraganVault. All rights reserved.
                </div>
            </Container>
        </footer>
    )
}
