'use client' // This directive makes it a Client Component

import { useState } from 'react'
import { FaCopy } from 'react-icons/fa'

export default function CopyButton({ text }) {
  const [copied, setCopied] = useState(false)

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(text)
      setCopied(true)
      setTimeout(() => setCopied(false), 2000) // Reset after 2 seconds
    } catch (err) {
      console.error('Failed to copy:', err)
    }
  }

  return (
    <button
      onClick={handleCopy}
      className="duration-700 p-2 hover:bg-slate-800/40 dark:hover:bg-slate-200/40 rounded-lg"
      title={copied ? 'Copied!' : 'Copy to clipboard'}
    >
      <FaCopy className={`duration-700 ${copied ? 'text-teal-400 dark:text-teal-600' : 'text-slate-400 dark:text-slate-500'}`} />
    </button>
  )
}

// import React from 'react'

// const CopyButton = () => {
//   return (
//     <div>
      
//     </div>
//   )
// }

// export default CopyButton
