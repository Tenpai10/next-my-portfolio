import type { NextPage } from "next"
import Head from "next/head"
import { useEffect, useRef, useState } from "react"

const tech = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15]
const titles = [
  "Software Developer",
  "Graphics Designer",
  "UI/UX Designer",
  "Solutions Architect",
]

const Home: NextPage = () => {
  const [index, setIndex] = useState<number>(0)
  const timeoutRef = useRef<any>(null)

  const resetTimeout = () => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current)
    }
  }

  useEffect(() => {
    resetTimeout()
    timeoutRef.current = setTimeout(
      () =>
        setIndex((prevIndex) =>
          prevIndex === titles.length - 1 ? 0 : prevIndex + 1
        ),
      2500
    )

    return () => {
      resetTimeout()
    }
  }, [index])

  return (
    <>
      <Head>
        <title>Arvae Portfolio</title>
        <meta name="description" content="Get to know me better" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="font-montserrat flex flex-col bg-[#fefefe] min-h-screen">
        <div className="flex justify-between h-28">
          <div className="px-4 py-1 flex flex-col justify-end">
            <p className="font-courier text-lg">Hello I am</p>
            <h1 className="text-4xl font-bold">Franz Arvae</h1>
          </div>
          <div className="bg-slate-600 h-full w-28" />
        </div>
        <div className="h-72 flex">
          <div className="w-28 h-full bg-gray-400"></div>
          <div className="flex-1">
            <div className="h-16 bg-cyan-600 grid p-2">
              <p className="text-xl text-white font-semibold place-self-end">
                {titles[index]}
              </p>
            </div>
            <div className="p-3 space-y-2">
              <p className="font-courier text-slate-600 text-sm">
                {`Technologies I'm familiar with`}
              </p>
              <div className="flex flex-wrap gap-2 justify-center">
                {tech.map((item) => (
                  <div
                    key={item}
                    className="w-12 h-12 rounded-full border"
                  ></div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  )
}

export default Home
