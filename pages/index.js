// pages/index.js
import Header from '../components/layout/Header'
import Footer from '../components/layout/Footer'
import Link from 'next/link'

export default function Home() {
  return (
    <div className="min-h-screen bg-blue-50 text-blue-900">
      <Header />

      <main className="p-10 text-center">
        <h2 className="text-2xl font-semibold mb-6">Welcome to the future of startup investing</h2>
        <p className="max-w-2xl mx-auto text-blue-800 text-lg">
          A trustless, milestone-based funding system secured by blockchain. Join as an investor or
          list your startup to raise funds transparently.
        </p>
        <div className="mt-10">
        <Link
  href="/campaign"
  className="bg-blue-500 hover:bg-blue-600 text-white font-medium py-3 px-6 rounded-xl transition-all shadow"
>
  Get Started
</Link>

        </div>
      </main>

      <Footer />
    </div>
  )
}
