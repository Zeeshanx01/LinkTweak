'use client'
import React, { useState } from 'react'
import Link from 'next/link'
import { FaLink, FaCopy, FaMagic, FaRocket, FaRegStar } from 'react-icons/fa'

const Generated = () => {
  const [url, setUrl] = useState('')
  const [shortUrl, setShortUrl] = useState('')
  const [generated, setGenerated] = useState('')
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')

  const generate = async () => {
    if (!url) {
      setError('Please enter a URL to shorten')
      return
    }
    
    setLoading(true)
    try {
      const response = await fetch("/api/generate", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ url, shortUrl })
      })
      
      const result = await response.json()
      if (response.ok) {
        setGenerated(`${process.env.NEXT_PUBLIC_HOST}/${shortUrl || result.generatedId}`)
        setUrl('')
        setShortUrl('')
        setError('')
      } else {
        setError(result.message || 'Failed to generate URL')
      }
    } catch (err) {
      setError('Network error - please try again')
    } finally {
      setLoading(false)
    }
  }

  const copyToClipboard = () => {
    navigator.clipboard.writeText(generated)
  }

  return (
    <div className="duration-700 min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 dark:from-[#b4b7bf] dark:via-slate-200 dark:to-[#b4b7bf] py-20 px-4">
      <div className="duration-700 w-full max-w-2xl space-y-8">
        {/* Header Section */}
        <div className="duration-700 text-center space-y-6">
          <div className="duration-700 inline-flex items-center gap-3 bg-slate-800/60 dark:bg-slate-200/60 backdrop-blur-lg px-6 py-3 rounded-full border border-slate-700/50 dark:border-slate-400/50">
            <FaRegStar className="duration-700 text-teal-400 dark:text-teal-600 animate-pulse" />
            <span className="duration-700 text-slate-300 dark:text-slate-600 text-lg">Instant URL Shortener</span>
          </div>
          <h1 className="duration-700 text-4xl md:text-5xl font-bold bg-gradient-to-r from-sky-400 to-teal-400 dark:from-sky-600 dark:to-teal-600 bg-clip-text text-transparent">
            Shorten Links, Amplify Reach
          </h1>
        </div>

        {/* Main Card */}
        <div className="duration-700 bg-slate-800/60 dark:bg-slate-200/60 backdrop-blur-xl rounded-2xl p-8 dark:border-slate-400/30 shadow-2xl  border border-slate-700/50 transition-all hover:border-sky-500/30">
          <div className="duration-700 space-y-8">
            {/* Input Section */}
            <div className="duration-700 space-y-6">
              <div className="duration-700 relative group">
                <FaLink className="duration-700 absolute left-4 top-1/2 -translate-y-1/2 text-slate-500 dark:text-slate-400 group-focus-within:text-sky-400 dark:group-focus-within:text-sky-600 transition-colors" />
                <input
                  className="duration-700 w-full pl-12 pr-4 py-3.5 bg-slate-900/40 dark:bg-slate-100/40 rounded-xl border border-slate-700 dark:border-slate-400 focus:border-sky-400 dark:focus:border-sky-600 focus:ring-2 focus:ring-sky-400/20 dark:focus:ring-sky-600/20 text-slate-200 dark:text-slate-800 placeholder-slate-500 dark:placeholder-slate-400 transition-all"
                  type="url"
                  placeholder="Paste your long URL here"
                  value={url}
                  onChange={(e) => setUrl(e.target.value)}
                />
              </div>

              <div className="duration-700 relative group">
                <FaMagic className="duration-700 absolute left-4 top-1/2 -translate-y-1/2 text-slate-500 dark:text-slate-400 group-focus-within:text-teal-400 dark:group-focus-within:text-teal-600 transition-colors" />
                <input
                  className="duration-700 w-full pl-12 pr-4 py-3.5 bg-slate-900/40 dark:bg-slate-100/40 rounded-xl border border-slate-700 dark:border-slate-400 focus:border-teal-400 dark:focus:border-teal-600 focus:ring-2 focus:ring-teal-400/20 dark:focus:ring-teal-600/20 text-slate-200 dark:text-slate-800 placeholder-slate-500 dark:placeholder-slate-400 transition-all"
                  type="text"
                  placeholder="Custom short code (optional)"
                  value={shortUrl}
                  onChange={(e) => setShortUrl(e.target.value)}
                />
              </div>

              {/* Error Message */}
              {error && (
                <div className="duration-700 text-rose-400 dark:text-rose-600 text-sm flex items-center gap-2 px-4 py-3 bg-rose-900/20 dark:bg-rose-100/20 rounded-lg border border-rose-800/30 dark:border-rose-400/30">
                  <span>{error}</span>
                </div>
              )}

              {/* Generate Button */}
              <button
                onClick={generate}
                disabled={loading}
                className="duration-700 w-full py-4 bg-gradient-to-r from-sky-500 to-teal-500 dark:from-sky-600 dark:to-teal-600 hover:from-sky-600 dark:hover:from-sky-500 hover:to-teal-600 dark:hover:to-teal-500 rounded-xl font-semibold text-white dark:text-slate-100 flex items-center justify-center gap-2 transition-all hover:shadow-lg hover:scale-[1.02] disabled:opacity-70"
              >
                {loading ? (
                  <div className="duration-700 animate-spin rounded-full h-5 w-5 border-b-2 border-white dark:border-slate-800"></div>
                ) : (
                  <>
                    <FaRocket className="duration-700" />
                    <span>{generated ? 'Generate New' : 'Launch Short URL'}</span>
                  </>
                )}
              </button>
            </div>

            {/* Result Section */}
            {generated && (
              <div className="duration-700 space-y-4">
                <div className="duration-700 p-4 bg-slate-900/30 dark:bg-slate-100/30 rounded-xl border border-slate-700 dark:border-slate-400 flex items-center justify-between gap-4">
                  <Link
                    href={generated}
                    target="_blank"
                    className="duration-700 text-sky-400 dark:text-sky-600 hover:text-sky-300 dark:hover:text-sky-500 truncate font-mono text-sm md:text-base"
                  >
                    {generated}
                  </Link>
                  <button
                    onClick={copyToClipboard}
                    className="duration-700 p-2 hover:bg-slate-800/40 dark:hover:bg-slate-200/40 rounded-lg transition-colors"
                    title="Copy to clipboard"
                  >
                    <FaCopy className="duration-700 text-slate-400 dark:text-slate-500 hover:text-sky-400 dark:hover:text-sky-600" />
                  </button>
                </div>
                <p className="duration-700 text-center text-slate-500 dark:text-slate-400 text-sm">
                  Share your condensed link anywhere!
                </p>
              </div>
            )}
          </div>
        </div>

        {/* Illustration Section */}
        <div className="duration-700 flex justify-center opacity-50 hover:opacity-100 transition-opacity">
          <div className="duration-700 relative w-48 h-48">
            <div className="duration-700 absolute inset-0 bg-gradient-to-r from-sky-600/20 to-teal-600/20 dark:from-sky-400/20 dark:to-teal-400/20 rounded-full blur-xl animate-pulse"></div>
            <div className="duration-700 relative w-full h-full flex items-center justify-center">
              <svg viewBox="0 0 24 24" className="duration-700 w-3/4 h-3/4 text-sky-400 dark:text-sky-600">
                <path fill="currentColor" d="M8.465 11.293c1.133-1.133 3.109-1.133 4.242 0l.707.707 1.414-1.414-.707-.707c-.943-.944-2.199-1.465-3.535-1.465s-2.592.521-3.535 1.465L4.929 12a5.008 5.008 0 0 0 0 7.071 5.006 5.006 0 0 0 7.071 0l.707-.707-1.414-1.414-.707.707a3.007 3.007 0 0 1-4.242 0 3.005 3.005 0 0 1 0-4.243l2.122-2.121z"></path>
                <path fill="currentColor" d="m12 4.929-.707.707 1.414 1.414.707-.707a3.007 3.007 0 0 1 4.242 0 3.005 3.005 0 0 1 0 4.243l-2.122 2.121c-1.133 1.133-3.109 1.133-4.242 0L10.586 12l-1.414 1.414.707.707c.943.944 2.199 1.465 3.535 1.465s2.592-.521 3.535-1.465L19.071 12a5.008 5.008 0 0 0 0-7.071 5.006 5.006 0 0 0-7.071 0z"></path>
              </svg>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Generated