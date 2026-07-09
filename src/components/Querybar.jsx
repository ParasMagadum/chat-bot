import React,{useState} from 'react'
import fetchResult from '../api/Fetchresult.js';

const Querybar = ({ setResultHistory }) => {

    const [query, setQuery] = useState('');
  const [isSending, setIsSending] = useState(false);
    
    const handleQuerySubmit = async () => {
    const trimmedQuery = query.trim();

    if (!trimmedQuery || isSending) {
      return;
    }

        try {
      setIsSending(true);
      setResultHistory(prev => [...prev, { role: 'user', content: trimmedQuery }]);
      const result = await fetchResult(trimmedQuery);
      setResultHistory(prev => [...prev, { role: 'assistant', content: result }]);
      setQuery(''); 
        } catch (error) {
            console.error("Error fetching result:", error);
      setResultHistory(prev => [...prev, { role: 'assistant', content: 'I could not generate a response right now. Please try again.' }]);
    } finally {
      setIsSending(false);
        }
    }
    
  return (
  <div className="sticky bottom-0 mt-auto border-t border-[#CB2957]/15 bg-[#000000]/70 pt-4 backdrop-blur-md">
    <div className="flex flex-col gap-3 rounded-[28px] border border-[#CB2957]/20 bg-[#111111]/85 p-3 shadow-[0_15px_40px_rgba(0,0,0,0.32)] sm:flex-row sm:items-end sm:p-4">
     <textarea 
    className="min-h-16 flex-1 resize-none rounded-[20px] border border-[#CB2957]/20 bg-[#DDDDDD]/10 px-4 py-3 text-sm text-[#EEEEEE] outline-none transition-all duration-300 placeholder:text-[#EEEEEE]/50 focus:min-h-24 focus:border-[#CB2957] focus:ring-2 focus:ring-[#CB2957]/20"
    placeholder="Ask me anything, like code, writing, planning, or ideas..." 
    value={query}
    rows={1}
    onChange={(e) => setQuery(e.target.value)}
    onKeyDown={(e) => {
      if (e.key === 'Enter' && !e.shiftKey) {
        e.preventDefault();
        handleQuerySubmit();
      }
    }}
     />
     <button className="inline-flex h-14 items-center justify-center rounded-[20px] bg-gradient-to-r from-[#CB2957] to-[#e63d6d] px-6 text-sm font-semibold text-[#EEEEEE] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_12px_30px_rgba(203,41,87,0.35)] disabled:cursor-not-allowed disabled:from-[#DDDDDD]/15 disabled:to-[#DDDDDD]/10 disabled:text-[#EEEEEE]/50" onClick={handleQuerySubmit} disabled={!query.trim() || isSending}>
    {isSending ? 'Thinking...' : 'Send'}
     </button>
    </div>
    </div>
  )
}

export default Querybar