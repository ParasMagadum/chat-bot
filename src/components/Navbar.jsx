import React from 'react'

const Navbar = () => {
  return (
    <div className="flex items-center justify-between rounded-[24px] border border-[#CB2957]/25 bg-[#111111]/80 px-4 py-4 shadow-[0_14px_35px_rgba(0,0,0,0.35)] backdrop-blur-xl sm:px-6 sm:py-5">
      <div className="flex items-center gap-3">
        <div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-[#CB2957]/25 bg-gradient-to-br from-[#CB2957] to-[#DDDDDD]/20 text-xl shadow-[0_10px_30px_rgba(203,41,87,0.25)]">
          <span className="text-[1rem] font-semibold tracking-[0.2em] text-[#EEEEEE]">✧</span>
        </div>
        <div>
          <p className="text-[11px] font-semibold uppercase tracking-[0.35em] text-[#CB2957]">Assistant</p>
          <h1 className="mt-1 text-xl font-semibold text-[#EEEEEE] sm:text-2xl">AI Chat Bot</h1>
        </div>
      </div>
      <div className="flex items-center gap-2 rounded-full border border-[#DDDDDD]/20 bg-[#DDDDDD]/10 px-3 py-2 text-xs font-medium text-[#DDDDDD]">
        <span className="h-2.5 w-2.5 rounded-full bg-[#CB2957] shadow-[0_0_12px_rgba(203,41,87,0.9)]" />
        Online
      </div>
    </div>
  )
}

export default Navbar