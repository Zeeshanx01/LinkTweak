
import clientPromise from "@/lib/mongodb"

export async function POST(request) {

  // const { url, shortUrl } = request.body
  const body = await request.json()
  const client = await clientPromise
  const db = client.db('linktweak')
  const collection = db.collection('urls')

  // check if the short Url exist
  const checkShortUrl = await collection.findOne({ shortUrl: body.shortUrl })
  if(checkShortUrl){
    return Response.json({ success: false, error: true, message: 'Short URL already exist' })
  }

  const result = await collection.insertOne({
    url: body.url,
    shortUrl: body.shortUrl
  })
  return Response.json({ success: true, error: false, message: 'Finished..!' })

}