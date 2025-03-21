// app/api/urls/route.js
import { MongoClient } from 'mongodb'

export async function GET() {
  const client = new MongoClient(process.env.MONGODB_URI)
  
  try {
    await client.connect()
    const db = client.db('linktweak') // Replace with your DB name
    const collection = db.collection('urls')

    const urls = await collection.find({})
      .sort({ _id: -1 }) // Sort by newest first
      .toArray()

    // Convert MongoDB ObjectId to string
    const transformedUrls = urls.map(url => ({
      ...url,
      _id: url._id.toString()
    }))

    return new Response(JSON.stringify(transformedUrls), {
      headers: { 'Content-Type': 'application/json' },
      status: 200
    })
  } catch (error) {
    console.error('GET error:', error)
    return new Response(JSON.stringify({ error: 'Failed to fetch URLs' }), {
      headers: { 'Content-Type': 'application/json' },
      status: 500
    })
  } finally {
    await client.close()
  }
}