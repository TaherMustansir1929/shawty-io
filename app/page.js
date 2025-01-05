'use client'

import { useState, useEffect, useRef } from 'react'
import Link from 'next/link'
import { Github } from 'lucide-react'
import '@styles/custom.css'

export default function Home() {
  const [shortenedUrl, setShortenedUrl] = useState('')
  const blobRef = useRef(null)

  const [url, setUrl] = useState('')
  const [keyword, setKeyword] = useState('')
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    const handleMouseMove = (e) => {
      if (blobRef.current) {
        blobRef.current.style.left = `${e.clientX - 300}px`;
        blobRef.current.style.top = `${e.clientY - 300}px`;
      }
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    const req = await fetch(`${process.env.NEXT_PUBLIC_URL}/api/create-url`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ url: url, keyword: keyword }),
    });
    const res = await req.json();
    setLoading(false);
    setShortenedUrl(`${process.env.NEXT_PUBLIC_URL}/api/${res.data.keyword}`);
    setUrl('');
    setKeyword('');
  }

  return (
    <div className="min-h-screen bg-[var(--background-color)] text-white relative overflow-hidden">
      <div className="absolute inset-0 grid-background"></div>

      {/* Cursor Blob */}
      <div
        ref={blobRef}
        className="cursor-blob fixed w-[600px] h-[600px] rounded-full z-10"
        style={{ left: '-300px', top: '-300px' }}
      />

      {/* Navbar */}
      <nav className="slide-down fixed w-full z-50 glass-effect">
        <div className="container mx-auto px-4 py-3 flex items-center justify-between">
          <Link href="/" className="text-2xl font-bold neon-gold cursor-pointer">
            shawty <span className="text-gray-400">io</span>
          </Link>
          <div className="flex items-center space-x-6">
            <Link href="/about-us" className="hover:neon-gold transition-colors font-medium">
              About Us
            </Link>
            <Link
              href="https://github.com/TaherMustansir1929/shawty-io"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:neon-gold transition-colors"
            >
              <Github className="w-6 h-6" />
            </Link>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <main className="container mx-auto px-4 pt-32 pb-20 relative z-20">
        <div className="slide-up max-w-2xl mx-auto text-center space-y-6 mb-12">
          <h1 className="text-5xl md:text-6xl font-bold neon-gold">
            Make it short & sweet
          </h1>
          <p className="text-xl text-gray-300">
            Transform your long URLs into memorable links in seconds
          </p>
        </div>

        <div className="slide-up max-w-xl mx-auto glass-effect rounded-xl p-8">
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <input
                type="url"
                placeholder="Enter your long URL"
                required
                className="w-full p-3 rounded-lg bg-black/20 border border-gray-700 text-white placeholder-gray-400 transition-all focus:input-focus"
                value={url}
                onChange={(e) => setUrl(e.target.value)}
              />
            </div>
            <div>
              <input
                type="text"
                placeholder="Custom keyword (optional)"
                className="w-full p-3 rounded-lg bg-black/20 border border-gray-700 text-white placeholder-gray-400 transition-all focus:input-focus"
                value={keyword}
                onChange={(e) => setKeyword(e.target.value)}
              />
            </div>
            <button
              type="submit"
              className="w-full p-3 rounded-lg neon-gold-button text-[#ffd700] font-medium"
            >
              Shorten URL
            </button>
          </form>

          {loading ? (<div className="spinner mx-auto mt-6 p-3"></div>) : (
            shortenedUrl && (
              <div className="slide-up mt-6 p-3 rounded-lg bg-black/20 border border-gray-700">
                <Link
                  className="block text-center neon-gold hover:underline"
                  href={shortenedUrl}
                  rel='noreferrer noopener'
                  target='_blank'
                >
                  {shortenedUrl}
                </Link>
              </div>
            )
          )}
        </div>
      </main>
      <footer className='fixed bottom-0 right-0 glass-effect p-4 text-center text-gray-400 bg-black/20 footer'>
        <Link
        href="https://www.instagram.com/taher_m.16/"
        target='_blank'
        rel='noreferrer noopener'
        className='hover:neon-gold hover:underline transition-colors'
        > made by - ZeoXD </Link>
      </footer>
    </div>
  )
}

