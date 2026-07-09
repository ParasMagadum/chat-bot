import React , {useState} from 'react'
import Navbar from './components/Navbar'
import Result from './components/Result'
import Querybar from './components/Querybar'

const App = () => {

  const [resultHistory, setResultHistory] = useState([]);
  return (
    <div className="relative min-h-screen overflow-hidden bg-[radial-gradient(circle_at_top_left,rgba(203,41,87,0.22),transparent_30%),radial-gradient(circle_at_bottom_right,rgba(221,221,221,0.12),transparent_35%),linear-gradient(135deg,#000000_0%,#111111_45%,#1a1a1a_100%)] text-[#EEEEEE]">
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_top,rgba(203,41,87,0.24),transparent_40%),radial-gradient(circle_at_bottom_right,rgba(221,221,221,0.12),transparent_30%)]" />
      <div className="absolute left-[-8%] top-[-10%] h-44 w-44 rounded-full bg-[#CB2957]/20 blur-3xl" />
      <div className="absolute bottom-[-4%] right-[-6%] h-48 w-48 rounded-full bg-[#DDDDDD]/10 blur-3xl" />
      <div className="mx-auto flex min-h-screen w-full max-w-7xl flex-col px-4 py-4 sm:px-6 lg:px-8">
        <Navbar />
        <main className="mt-5 flex min-h-0 flex-1 flex-col gap-5 rounded-[34px] border border-[#CB2957]/25 bg-[#000000]/75 p-4 shadow-[0_25px_70px_rgba(0,0,0,0.5)] backdrop-blur-2xl sm:p-6 lg:p-7">
          <Result result={resultHistory} />
          <Querybar setResultHistory={setResultHistory} />
        </main>
      </div>
    </div>
  )
}

export default App