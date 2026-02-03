import { FiZap } from "react-icons/fi";

export default function Features () {
    return (
        <div id='features' className=" flex flex-col items-center">

              <div className="mt-10 flex items-center gap-2 text-sm text-[#5b0e61] bg-[#681a5f77]/10 border rounded-full px-6 py-1.5">

            <FiZap width={14}/> 
            <span>Simple process</span>
        </div>
            <h2 className=" mt-5 text-3xl text-center mx-auto">Build your resume</h2>
            <p className="text-md text-slate-500 text-center mt-2 max-w-130 mx-auto">Our streamlined process helps you create a professional resume in minutes with intelligent AI-powered tools and features.</p>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 justify-center flex-wrap gap-8 mt-20 px-4 md:px-0 ">
                <div className="flex flex-col text-center items-center justify-center rounded-xl p-6 border border-violet-200 gap-6 max-w-sm hover:bg-violet-200/30">
                    <div className="p-6 aspect-square bg-violet-100 rounded-full">
                        <svg
  className="w-7 h-7 text-indigo-400"
  viewBox="0 0 24 24"
  fill="none"
  stroke="currentColor"
  strokeWidth="2"
  strokeLinecap="round"
  strokeLinejoin="round"
>
  <rect x="4" y="3" width="14" height="18" rx="2" />
  <path d="M7 8h8M7 12h8M7 16h5" />
  <circle cx="18.5" cy="8.5" r="2.5" />
  <path d="M18.5 6v5M16 8.5h5" />
</svg>

                    </div>
                    <div className="space-y-2">
                        <h3 className="text-base font-semibold text-slate-700">AI-Powered Resume Builder</h3>
                        <p className="text-sm text-slate-600">Create professional resumes instantly with smart AI suggestions tailored to your role, skills, and experience. </p>
                    </div>
                </div>
                <div className=" flex flex-col text-center items-center justify-center rounded-xl p-6 border border-green-200 gap-6 max-w-sm hover:bg-green-200/20">
                    <div className="p-6 aspect-square bg-green-100 rounded-full">
                       <svg
  className="w-7 h-7 text-green-600"
  viewBox="0 0 24 24"
  fill="none"
  stroke="currentColor"
  strokeWidth="2"
  strokeLinecap="round"
  strokeLinejoin="round"
>
  <rect x="3" y="4" width="18" height="14" rx="2" />
  <path d="M3 9h18M9 9v9" />

  <path d="M15 14c0 1.1-.9 2-2 2s-2-.9-2-2c0-1.5 2-3 2-3s2 1.5 2 3z" />
</svg>

                    </div>
                    <div className="space-y-2">
                        <h3 className="text-base font-semibold text-slate-700">Customizable Modern Templates</h3>
                        <p className="text-sm text-slate-600">Choose from recruiter-approved templates and customize fonts, colors, and layouts to match your personal brand.</p>
                    </div>
                </div>
                </div>
                
                <div className="mt-7 flex flex-col text-center items-center justify-center rounded-xl p-6 border border-orange-200 gap-6 max-w-sm hover:bg-orange-200/30">
                    <div className="p-6 aspect-square bg-orange-100 rounded-full">
                      <svg
  className="w-7 h-7 text-orange-400"
  viewBox="0 0 24 24"
  fill="none"
  stroke="currentColor"
  strokeWidth="2"
  strokeLinecap="round"
  strokeLinejoin="round"
>
  <rect x="3" y="4" width="18" height="16" rx="2" />
  <path d="M12 4v16" />
  <path d="M6 9h3M6 13h3" />
  <path d="M15 10h3M15 14h3" />
</svg>



                    </div>
                    <div className="space-y-2">
                        <h3 className="text-base font-semibold text-slate-700">Real-Time Preview</h3>
                        <p className="text-sm text-slate-600">See changes instantly as you edit—no reloads, no guessing. What you see is exactly what you download.</p>
                    </div>
                
            </div>
        </div>
    );
};