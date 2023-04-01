'use client'
import {AiOutlineMenu} from 'react-icons/ai'
import React from 'react'
import Avatar from './Avatar'

const UserMenu = () => {
    return (
      <div className="relative">
            <div className="flex flex-row items-center gap-3">
                <div
                    onClick={() => {}}
                className='
                     hiddend md:block text-sm font-semibold py-3 px-4 rounded-full transition hover:bg-neutral-100
                    cursor-pointer
                '>
                      Airbnb your home
                </div>
                <div onClick={() => { }}
                    className='
                    p-4 md:py-1 md:px-2 border-radius-[1px] border-neutral-200
                    flex flex-row items-center gap-3 roundef-full cursor-pointer hover:shadow-md transition
                '>
                    <AiOutlineMenu />
                    <div className='hidded md:block '> 
                            <Avatar />
                    </div>
                </div>
            </div>
      </div>
    );
}

export default UserMenu