'use client'
import React, { useState } from 'react'
import Link from 'next/link'
const Generated = () => {
  const [url, seturl] = useState('')
  const [shortUrl, setshortUrl] = useState('')
  const [Generated, setGenerated] = useState('')


  const generate = () => {
    const myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

    const raw = JSON.stringify({
      "url": url,
      "shortUrl": shortUrl
    });

    const requestOptions = {
      method: "POST",
      headers: myHeaders,
      body: raw,
      redirect: "follow"
    };

    fetch("/api/generate", requestOptions)
      .then((response) => response.json())
      .then((result) => {
        setGenerated(`${process.env.NEXT_PUBLIC_HOST}/${shortUrl}`)
        seturl('')
        setshortUrl('')
        console.log(result)
        alert(result.message)
      })
      .catch((error) => console.error(error));
  }

  return (
    <>
      {/* form to enter url */}
      <div className='flex-col bg-slate-6000 pt-20 justify-center items-center w-[60%] h-[80vh] mx-auto '>
        <div>
          <h1>Genrate you short URLs </h1>
        </div>
        <div>

          <div className='flex flex-col gap-4'>
            <input
              className='p-2 rounded-md border-2 border-gray-300'
              type="text"
              placeholder='Enter URL'
              onChange={(e) => { seturl(e.target.value) }} />

            <input
              className='p-2 rounded-md border-2 border-gray-300'
              type="text"
              placeholder='Enter your preffered short URL text'
              onChange={(e) => { setshortUrl(e.target.value) }} />

            <button
              type="submit"
              className='bg-sky-700 text-white p-2 rounded-md'
              onClick={generate} >Generate</button>
          </div>
        </div>

        {Generated && <> <div className='pt-5 text-sky-950'> <span className='font-bold text-lg '>Your Link </span><code><Link target='_blank' href={Generated}>{Generated}</Link>
        </code></div>
        </>}

      </div>
    </>
  )
}

export default Generated
