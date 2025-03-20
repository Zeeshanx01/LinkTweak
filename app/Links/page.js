import Link from 'next/link'
import clientPromise from '@/lib/mongodb'
import { FaExternalLinkAlt } from 'react-icons/fa'
// import CopyButton from '@/components/CopyButton' // Import the new component
import CopyButton from '../components/CopyButton'

export default async function UrlList() {
  try {
    const client = await clientPromise
    const db = client.db('linktweak')
    const collection = db.collection('urls')
    
    const urls = await collection.find({}).sort({ _id: -1 }).toArray()

    return (
      <div className="duration-700 min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 dark:from-[#b4b7bf] dark:via-slate-200 dark:to-[#b4b7bf] py-20 px-4">
        <div className="duration-700 max-w-6xl mx-auto">
          <div className="duration-700 mb-12 text-center">
            <h1 className="duration-700 text-4xl md:text-5xl font-bold bg-gradient-to-r from-sky-400 to-teal-400 dark:from-sky-600 dark:to-teal-600 bg-clip-text text-transparent mb-4">
              Your Generated Links
            </h1>
            <p className="duration-700 text-slate-400 dark:text-slate-500 text-lg">
              Track and manage all your shortened URLs
            </p>
          </div>

          <div className="duration-700 bg-slate-800/60 dark:bg-slate-200/60 backdrop-blur-xl rounded-2xl p-6 border border-slate-700/30 dark:border-slate-400/30 shadow-2xl">
            {urls.length === 0 ? (
              <div className="duration-700 text-center p-8 text-slate-400 dark:text-slate-500">
                <p>No URLs generated yet. Start shortening!</p>
                <Link
                  href="/generate"
                  className="duration-700 mt-4 inline-block text-sky-400 dark:text-sky-600 hover:underline"
                >
                  Create Your First Short Link
                </Link>
              </div>
            ) : (
              urls.map((url) => (
                <div
                  key={url._id.toString()}
                  className="duration-700 group flex flex-col md:flex-row items-center justify-between p-4 bg-slate-900/30 dark:bg-slate-100/30 rounded-xl border border-slate-700/50 dark:border-slate-400/50 hover:border-sky-400/30 dark:hover:border-sky-600/30 transition-all mb-4"
                >
                  <div className="duration-700 flex-1 truncate mb-2 md:mb-0 md:mr-4">
                    <p className="duration-700 text-slate-300 dark:text-slate-600 truncate text-sm">
                      {url.url}
                    </p>
                  </div>

                  <div className="duration-700 flex items-center space-x-3">
                    <Link
                      href={`/${url.shortUrl}`}
                      target="_blank"
                      className="duration-700 text-sky-400 dark:text-sky-600 hover:text-sky-300 dark:hover:text-sky-500 truncate font-mono flex items-center"
                    >
                      <span>{`${process.env.NEXT_PUBLIC_HOST}/${url.shortUrl}`}</span>
                      <FaExternalLinkAlt className="ml-2 text-sm" />
                    </Link>
                    <CopyButton text={`${process.env.NEXT_PUBLIC_HOST}/${url.shortUrl}`} />
                  </div>
                </div>
              ))
            )}
          </div>
        </div>
      </div>
    )
  } catch (e) {
    console.error(e)
    return (
      <div className="duration-700 min-h-screen flex items-center justify-center text-rose-500">
        Error loading URLs. Please try again later.
      </div>
    )
  }
}