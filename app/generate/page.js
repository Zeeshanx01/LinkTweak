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


      <div className='duration-700 flex-col my-10 bg-slate-6000 pt-20 justify-center items-center w-[40vw] max-md:w-[80vw] h-fit mx-auto '>

        <div className='bg-black bg-opacity-30 backdrop-blur-lg  p-10 my-20 rounded-xl border border-gray-700 '>
          <div>
            <h1 className='duration-700  text-4xl font-bold mb-5 text-center text-slate-200 dark:text-slate-800'>Genrate you short URLs </h1>
          </div>
          <div>

            <div className='duration-700 flex flex-col gap-4'>
              <input
                className='duration-700 p-2 rounded-md bg-slate-700 border-2 border-gray-600 text-slate-300'
                type="text"
                placeholder='Enter URL'
                onChange={(e) => { seturl(e.target.value) }} />

              <input
                className='duration-700 p-2 rounded-md bg-slate-700 border-2 border-gray-600 text-slate-300'
                type="text"
                placeholder='Enter your preffered short URL text'
                onChange={(e) => { setshortUrl(e.target.value) }} />

              <button
                type="submit"
                className='duration-700 bg-sky-700 hover:bg-sky-800 text-white p-2 rounded-md'
                onClick={generate} >Generate</button>
            </div>
          </div>

          {Generated && <> <div className='duration-700 pt-5 text-sky-950'> <span className='duration-700     font-bold text-lg '>Your Link </span><code><Link target='_blank' href={Generated}>{Generated}</Link>
          </code></div>
          </>}



        </div>
      </div>


    </>
  )
}

export default Generated
