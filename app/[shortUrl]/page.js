
import { redirect } from "next/navigation"
import clientPromise from "@/lib/mongodb"

export default async function Page({ params }) {
  const shortUrl = (await params).shortUrl
  const client = await clientPromise
  const db = client.db('linktweak')
  const collection = db.collection('urls')

  // check if the short Url exist
  const checkShortUrl = await collection.findOne({ shortUrl: shortUrl })
  if (checkShortUrl) {
    redirect(checkShortUrl.url)
  }

  else {
    redirect(`{NEXT_PUBLIC_HOST}`)
  }


  return <div>My Post: {url}</div>
}

