'use client'

import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { Loader2 } from 'lucide-react'

export default function AboutUs() {
    const [isLoading, setIsLoading] = useState(true)

    useEffect(() => {
        const timer = setTimeout(() => {
            setIsLoading(false)
        }, 1500)

        return () => clearTimeout(timer)
    }, [])

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                delay: 0.5,
                when: "beforeChildren",
                staggerChildren: 0.3
            }
        }
    }

    const itemVariants = {
        hidden: { y: 20, opacity: 0 },
        visible: {
            y: 0,
            opacity: 1
        }
    }

    if (isLoading) {
        return (
            <div className="flex items-center justify-center min-h-screen bg-black">
                <Loader2 className="w-12 h-12 text-yellow-400 animate-spin" />
            </div>
        )
    }

    return (
        <div className="min-h-screen bg-black text-white p-8">
            <motion.div
                className="max-w-3xl mx-auto"
                variants={containerVariants}
                initial="hidden"
                animate="visible"
            >
                <motion.h1
                    className="text-5xl font-bold text-yellow-400 mb-8 mt-16 md:mt-24 text-center md:text-start"
                    variants={itemVariants}
                >
                    About shawty
                </motion.h1>

                <motion.p
                    className="text-xl mb-6"
                    variants={itemVariants}
                >
                    At shawty, we believe in making the web more accessible and user-friendly. Our mission is to transform long, complex URLs into short, memorable links that are easy to share and quick to access.
                </motion.p>

                <motion.h2
                    className="text-3xl font-semibold text-yellow-400 mb-4 text-center md:text-start"
                    variants={itemVariants}
                >
                    Our Promise
                </motion.h2>

                <motion.ul
                    className="list-disc list-inside mb-6"
                    variants={itemVariants}
                >
                    <li className="mb-2">Simplicity: We keep our service straightforward and easy to use.</li>
                    <li className="mb-2">Speed: Generate short links in seconds, not minutes.</li>
                    <li className="mb-2">Reliability: Your shortened links will always redirect to the right destination.</li>
                    <li>Privacy: We respect your data and the data of your link visitors.</li>
                </motion.ul>

                <motion.p
                    className="text-xl"
                    variants={itemVariants}
                >
                    Whether you&apos;re a social media enthusiast, a marketing professional, or just someone who appreciates a tidy URL, shawty is here to make your online experience a little bit sweeter. Join us in our mission to make the internet a shorter, simpler place!
                </motion.p>
            </motion.div>
        </div>
    )
}