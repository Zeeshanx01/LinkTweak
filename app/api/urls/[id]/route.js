import { MongoClient, ObjectId } from 'mongodb'

export async function PUT(request, { params }) {
  const { id } = params
  const { originalUrl, shortUrl } = await request.json()
  const client = new MongoClient(process.env.MONGODB_URI)

  try {
    await client.connect()
    const db = client.db('linktweak')
    const collection = db.collection('urls')

    // Check for duplicate short URL
    const existing = await collection.findOne({
      shortUrl,
      _id: { $ne: new ObjectId(id) }
    })

    if (existing) {
      return new Response(JSON.stringify({ error: 'Short URL already exists' }), {
        status: 400,
        headers: { 'Content-Type': 'application/json' }
      })
    }

    // Update document
    const result = await collection.updateOne(
      { _id: new ObjectId(id) },
      { $set: { url: originalUrl, shortUrl } }
    )

    if (result.matchedCount === 0) {
      return new Response(JSON.stringify({ error: 'URL not found' }), {
        status: 404,
        headers: { 'Content-Type': 'application/json' }
      })
    }

    return new Response(JSON.stringify({ success: true }), {
      headers: { 'Content-Type': 'application/json' }
    })
  } catch (error) {
    console.error('Update error:', error)
    return new Response(JSON.stringify({ error: 'Server error' }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' }
    })
  } finally {
    await client.close()
  }
}

export async function DELETE(request, { params }) {
  const { id } = params
  const client = new MongoClient(process.env.MONGODB_URI)

  try {
    await client.connect()
    const db = client.db('linktweak')
    const collection = db.collection('urls')

    const result = await collection.deleteOne({ _id: new ObjectId(id) })

    if (result.deletedCount === 0) {
      return new Response(JSON.stringify({ error: 'URL not found' }), {
        status: 404,
        headers: { 'Content-Type': 'application/json' }
      })
    }

    return new Response(JSON.stringify({ success: true }), {
      headers: { 'Content-Type': 'application/json' }
    })
  } catch (error) {
    console.error('Delete error:', error)
    return new Response(JSON.stringify({ error: 'Server error' }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' }
    })
  } finally {
    await client.close()
  }
}