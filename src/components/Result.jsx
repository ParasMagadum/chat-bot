import React from 'react'

const Result = ({ result }) => {

  return (
    <div className="flex min-h-0 flex-1 flex-col overflow-hidden rounded-[28px] border border-[#CB2957]/20 bg-[#111111]/75 shadow-[0_18px_50px_rgba(0,0,0,0.28)]">
      <div className="border-b border-[#CB2957]/15 px-4 py-4 sm:px-6 sm:py-5">
        <div className="flex items-center justify-between">
          <div>
            <p className="text-sm font-semibold text-[#EEEEEE]">conversation</p>
            <p className="text-xs text-[#EEEEEE]/70">you will see messages here</p>
          </div>
          <div className="rounded-full border border-[#CB2957]/20 bg-[#CB2957]/10 px-3 py-1 text-[11px] font-medium text-[#DDDDDD]">
            Live Chat
          </div>
        </div>
      </div>
      <div className="min-h-0 flex-1 space-y-4 overflow-y-auto px-4 py-5 sm:px-6 sm:py-6">
      {result && result.length > 0 ? (
        result.map((item, index) => (
          <div key={index} className={`flex ${item.role === 'user' ? 'justify-end' : 'justify-start'}`}>
            <div className={`max-w-[90%] rounded-[22px] px-4 py-3 text-sm leading-7 shadow-lg transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_15px_35px_rgba(0,0,0,0.35)] sm:max-w-[78%] sm:px-5 sm:py-4 ${item.role === 'user' ? 'bg-gradient-to-br from-[#CB2957] to-[#a61f46] text-[#EEEEEE]' : 'border border-[#CB2957]/20 bg-[#DDDDDD]/10 text-[#EEEEEE]'}`}>
              <p className="mb-1 text-[11px] font-semibold uppercase tracking-[0.24em] opacity-75">
                {item.role === 'user' ? 'You' : 'Assistant'}
              </p>
              <p className="whitespace-pre-wrap">{item.content}</p>
            </div>
          </div>
        ))
      ) : (
        <div className="flex h-full items-center justify-center">
          <div className="max-w-lg rounded-[28px] border border-dashed border-[#CB2957]/20 bg-[#DDDDDD]/10 px-8 py-10 text-center shadow-[0_12px_35px_rgba(0,0,0,0.2)]">
            <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-2xl bg-[#CB2957]/15 text-2xl">
              <span className="text-[1.5rem] font-semibold tracking-[0.2em] text-[#6c3e26]">✧</span>
            </div>
            <p className="text-lg font-semibold text-[#EEEEEE]">Start a conversation!</p>
            <p className="mt-2 text-sm leading-6 text-[#EEEEEE]/70">What would you like to know?</p>
          </div>
        </div>
      )}
      </div>
    </div>
  )
}

export default Result