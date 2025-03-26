import { Noto_Sans_KR } from "next/font/google"

const notoSansKR = Noto_Sans_KR({
  subsets: ["latin"],
  weight: ["400", "700"],
})

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-gradient-to-r from-pink-100 to-blue-100">
      <div className="text-center p-8 bg-white rounded-xl shadow-lg max-w-md w-full">
        <h1 className={`${notoSansKR.className} text-4xl font-bold text-gray-800 mb-4`}>샘 오늘도 화이팅^^</h1>
        <p className="text-gray-600 mt-2">Have a wonderful day!</p>
      </div>
    </main>
  )
}

