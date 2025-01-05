import Link from 'next/link'
import { Github } from 'lucide-react'

const Nav = () => {
    return (< nav className="slide-down fixed w-full z-50 glass-effect" >
        <div className="container mx-auto px-4 py-3 flex items-center justify-between">
            <Link href="/" className="text-2xl font-bold neon-gold cursor-pointer">
                shawty
            </Link>
            <div className="flex items-center space-x-6">
                <Link href="/" className="neon-gold hover:text-yellow-100 transition-colors font-medium">
                    Try out
                </Link>
                <Link
                    href="https://github.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="neon-gold hover:text-yellow-100 transition-colors"
                >
                    <Github className="w-6 h-6" />
                </Link>
            </div>
        </div>
    </nav >
    )
}

export default Nav