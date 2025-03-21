'use client'
import { useState, useEffect } from 'react'
import { FaTimes } from 'react-icons/fa'

const EditUrlModal = ({ url, onClose, onSave }) => {
  const [formData, setFormData] = useState({
    originalUrl: '',
    shortUrl: ''
  })

  useEffect(() => {
    if (url) {
      setFormData({
        originalUrl: url.url,
        shortUrl: url.shortUrl
      })
    }
  }, [url])

  const handleSubmit = async (e) => {
    e.preventDefault()
    try {
      const response = await fetch(`/api/urls/${url._id}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData)
      })

      if (response.ok) {
        onSave()
        onClose()
      }
    } catch (error) {
      console.error('Update error:', error)
    }
  }

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 backdrop-blur-sm">
      <div className="bg-slate-800 dark:bg-slate-100 rounded-xl p-6 w-full max-w-md">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-xl font-bold text-slate-100 dark:text-slate-800">
            Edit URL
          </h2>
          <button
            onClick={onClose}
            className="text-slate-400 dark:text-slate-600 hover:text-slate-300 dark:hover:text-slate-500"
          >
            <FaTimes className="text-xl" />
          </button>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-sm font-medium mb-2 text-slate-300 dark:text-slate-600">
              Original URL
            </label>
            <input
              type="url"
              value={formData.originalUrl}
              onChange={(e) => setFormData({ ...formData, originalUrl: e.target.value })}
              className="w-full p-2 rounded-lg bg-slate-700/50 dark:bg-slate-200/50 border border-slate-600/30 dark:border-slate-400/30 text-slate-100 dark:text-slate-800"
              required
            />
          </div>

          <div>
            <label className="block text-sm font-medium mb-2 text-slate-300 dark:text-slate-600">
              Short Code
            </label>
            <input
              type="text"
              value={formData.shortUrl}
              onChange={(e) => setFormData({ ...formData, shortUrl: e.target.value })}
              className="w-full p-2 rounded-lg bg-slate-700/50 dark:bg-slate-200/50 border border-slate-600/30 dark:border-slate-400/30 text-slate-100 dark:text-slate-800"
              required
            />
          </div>

          <div className="flex justify-end gap-3">
            <button
              type="button"
              onClick={onClose}
              className="px-4 py-2 rounded-lg text-slate-300 dark:text-slate-600 hover:bg-slate-700/30 dark:hover:bg-slate-200/30"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="px-4 py-2 bg-sky-500 hover:bg-sky-600 rounded-lg text-white"
            >
              Save Changes
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default EditUrlModal