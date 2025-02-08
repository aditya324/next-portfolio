import SkillCard from '@/components/SkillCard'
import { Poppins } from 'next/font/google'
import React from 'react'

const poppins = Poppins({ subsets: ['latin'], weight: '400' })
//todo:mapping skills and alligning last card
const Page = () => {
  return (
    <div className='bg-white  flex flex-col w-full'>
      <div className='w-full'>
        <p className='text-4xl  mt-4 text-black p-12 text-center' style={{ fontFamily: poppins.style.fontFamily }}>
          My Skill Stack: Crafting <span className='text-[#F87B00]'>Digital</span> Solutions
        </p>
      </div>
      
      <div className='flex flex-wrap justify-center gap-10'>
        <SkillCard />
        <SkillCard />
        <SkillCard />
        <SkillCard />
        <SkillCard />
        <SkillCard />
        <SkillCard />
      </div>
    </div>
  )
}

export default Page
