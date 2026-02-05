import { Check, Palette } from 'lucide-react';
import React, { useState } from 'react'

const ColorPicker = ({seletedColor, onChange}) => {
    const colors = [
        { name: "Sky", value: "#0EA5E9" },
        { name: "Blue", value: "#3B82F6" },
        { name: "Indigo", value: "#6366F1" },
        { name: "Cyan", value: "#06B6D4" },
        { name: "Light Blue", value: "#60A5FA" },
        { name: "Violet", value: "#8B5CF6" },
        { name: "Purple", value: "#A855F7" },
        { name: "Fuchsia", value: "#D946EF" },
        { name: "Emerald", value: "#10B981" },
        { name: "Green", value: "#22C55E" },
        { name: "Teal", value: "#14B8A6" },
        { name: "Mint", value: "#34D399" },
        { name: "Amber", value: "#F59E0B" },
        { name: "Orange", value: "#F97316" },
        { name: "Sun", value: "#FACC15" },
        { name: "Rose", value: "#F43F5E" },
        { name: "Red", value: "#EF4444" },
        { name: "Pink", value: "#EC4899" },
        { name: "Coral", value: "#FB7185" },
        { name: "Mocha", value: "#78350F" },
        { name: "Caramel", value: "#C2410C" },
        { name: "Cocoa", value: "#854D0E" },
        { name: "Espresso", value: "#3A2E2A" },
        { name: "Slate", value: "#64748B" },
        { name: "Cool Gray", value: "#6B7280" },
        { name: "Stone", value: "#78716C" },
        { name: "Zinc Dark", value: "#18181B" },
        { name: "Charcoal", value: "#111827" }

    ]

    const [isOpen, setIsOpen] = useState(false);
  return (
    <div className='relative'>
        <button onClick={()=> setIsOpen(!isOpen)} className='flex items-center gap-1 text-sm text-purple-600 bg-gradient-to-br from-purple-50 to-purple-100 ring-purple-300 hover:ring transition-all px-3 py-2 rounded-lg'>
            <Palette size={16} /> <span className='max-sm:hidden'>Accent</span>
        </button>

        {isOpen && (
            <div className='grid grid-cols-4 w-60 gap-2 absolute top-full left-0 right-0 p-3 mt-2 z-10 bg-white rounded-md border border-gray-200 shadow-sm'>
                {colors.map((color)=> (
                    <div key={color.value} className='relative cursor-pointer group-flex flex-col' onClick={()=> {onChange(color.value); setIsOpen(false)}} >
                        <div className='w-10 h-10 rounded-full border-2 border-transparent group-hover:border-black/25 transition-colors' style={{backgroundColor : color.value}}>

                        </div>

                        {seletedColor === color.value && (
                            <div className='absolute top-0 left-0 right-1 bottom-0 flex items-center justify-center'>
                                <Check className='size-5 text-white'/>
                            </div>
                        )}

                        {/* <p className='text-xs text-center mt-1 text-gray-600'>{color.name}</p> */}

                    </div>
                ))}
            </div>
        )}

    </div>
  )
}

export default ColorPicker