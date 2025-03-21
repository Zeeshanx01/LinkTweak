'use client'
import { useState, useEffect } from 'react'
import { FaEdit, FaTrash, FaSpinner } from 'react-icons/fa'
// import EditUrlModal from '@/components/EditUrlModal'
import EditUrlModal from '../components/EditUrlModal'

const ManageUrls = () => {
  const [urls, setUrls] = useState([])
  const [selectedUrl, setSelectedUrl] = useState(null)
  const [showModal, setShowModal] = useState(false)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    fetchUrls()
  }, [])

  const fetchUrls = async () => {
    try {
      const response = await fetch('/api/urls')
      const data = await response.json()
      setUrls(data)
      setLoading(false)
    } catch (error) {
      console.error('Error fetching URLs:', error)
      setLoading(false)
    }
  }

  const handleDelete = async (id) => {
    if (confirm('Are you sure you want to delete this URL?')) {
      try {
        await fetch(`/api/urls/${id}`, { method: 'DELETE' })
        fetchUrls()
      } catch (error) {
        console.error('Delete error:', error)
      }
    }
  }

  if (loading) {
    return (
      <div className="duration-700 min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 dark:from-[#b4b7bf] dark:via-slate-200 dark:to-[#b4b7bf] flex items-center justify-center">
        <FaSpinner className="duration-700 animate-spin text-4xl text-sky-500" />
      </div>
    )
  }

  return (
    <div className="duration-700  min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 dark:from-[#b4b7bf] dark:via-slate-200 dark:to-[#b4b7bf] py-20 px-4">
      <div className="duration-700 max-w-6xl mx-auto">
        <h1 className="duration-700 text-4xl font-bold text-center mb-8 bg-gradient-to-r from-sky-400 to-teal-400 dark:from-sky-600 dark:to-teal-600 bg-clip-text text-transparent md:mt-10">
          Manage URLs
        </h1>

        <div className="duration-700 grid gap-4">
          {urls.map((url) => (
            <div
              key={url._id}
              className="duration-700 p-4 max-sm:px-2 bg-slate-800/30 dark:bg-slate-100/30 rounded-lg border border-slate-700/50 dark:border-slate-400/50"
            >
              <div className="duration-700 flex items-center justify-between max-md:w-[100%] ">
                <div className="duration-700 flex-1   max-md:w-10 overflow-hidden">
                  <p className="duration-700 truncate text-slate-300 dark:text-slate-600">
                    {url.url}
                  </p>
                  <p className="duration-700 text-sm text-sky-400 dark:text-sky-600 mt-1">
                    {process.env.NEXT_PUBLIC_HOST}/{url.shortUrl}
                  </p>
                </div>

                <div className="duration-700 flex gap-3 ml-4 max-sm:gap-1 max-sm:ml-1">
                  <button
                    onClick={() => {
                      setSelectedUrl(url)
                      setShowModal(true)
                    }}
                    className="duration-700 p-2 hover:bg-slate-700/20 rounded-lg text-emerald-400"
                  >
                    <FaEdit />
                  </button>
                  <button
                    onClick={() => handleDelete(url._id)}
                    className="duration-700 p-2 hover:bg-slate-700/20 rounded-lg text-rose-400"
                  >
                    <FaTrash />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {showModal && (
        <EditUrlModal
          url={selectedUrl}
          onClose={() => setShowModal(false)}
          onSave={fetchUrls}
        />
      )}
    </div>
  )
}

export default ManageUrls