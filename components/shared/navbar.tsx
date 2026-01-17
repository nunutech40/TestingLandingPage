import Link from "next/link"
import { Container } from "@/components/ui/container"
import { Button } from "@/components/ui/button"
import { ShieldCheck } from "lucide-react"

export function Navbar() {
    return (
        <header className="border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 sticky top-0 z-50">
            <Container>
                <div className="flex h-16 items-center justify-between">
                    <Link href="/" className="flex items-center gap-2 font-bold text-xl text-primary">
                        <ShieldCheck className="h-8 w-8 text-secondary" />
                        <span>JuraganVault</span>
                    </Link>

                    <nav className="flex items-center gap-4">
                        <Link href="#pricing" className="text-sm font-medium hover:text-primary transition-colors">
                            Harga Paket
                        </Link>
                    </nav>
                </div>
            </Container>
        </header>
    )
}
