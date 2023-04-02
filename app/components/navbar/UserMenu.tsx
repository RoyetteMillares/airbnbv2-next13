'use client'
import {AiOutlineMenu} from 'react-icons/ai'
import React, {useState, useCallback} from 'react'
import Avatar from '../Avatar'
import MenuItem from './MenuItem'

const UserMenu = () => {
    const [IsOpen, setOpen] = useState(false)

    const toggleBtn = useCallback(() => {
        setOpen((value) => !value)
    },[])
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
                <div onClick={toggleBtn}
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
            {IsOpen ? (
                <div className='absolute rounded-xl shadow-md w-[40vw] md:w-3/4 bg-white overflow-hidden right-0 top-12 text-sm'>
                    <div className='flex flex-col cursor-pointer'>
                        <>
                            <MenuItem
                                onClick={() => {}}
                                label='Login'
                            />
                             <MenuItem
                                onClick={() => {}}
                                label='Sign Up'
                            />
                        </>
                    </div>  
                </div>
            ): (
                 <div>
                    
                </div>   
            )}
      </div>
    );
}

export default UserMenu