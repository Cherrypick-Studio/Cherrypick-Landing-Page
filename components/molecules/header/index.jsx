'use client'
import Image from 'next/image'
import Text from '@/components/ui/text'
import LanguageMenu from '@/components/molecules/header/language-menu'
import { HiOutlineMenuAlt1 } from 'react-icons/hi'
import { HiMiniChevronDown } from 'react-icons/hi2'
import { RxCross2 } from 'react-icons/rx'
import { useState, useEffect } from 'react'

const Header = () => {
  const [showMenu, setShowMenu] = useState(false)
  const [languageDropdown, setLanguageDropdown] = useState(false)
  const [scroll, setScroll] = useState('')

  const listenScrollEvent = () => {
    if (window.scrollY > 25) {
      setScroll('bg-red-cherry-500 shadow-md')
    } else {
      setScroll('bg-transparent')
    }
  }

  useEffect(() => {
    window.addEventListener('scroll', listenScrollEvent)
  })

  return (
    <>
      <div className={`fixed top-0 inset-x-0 z-40 ${scroll} transition-all ease-in-out duration-300`}>
        <div className='relative flex items-center justify-between container mx-auto py-8'>
          <div>
            <Image
              src='/images/logo-white.svg'
              alt='cherry-pick'
              title='cherry-pick'
              height={40}
              width={176}
            />
          </div>
          <div>
            <div className='block lg:hidden'>
              <HiOutlineMenuAlt1
                className='h-6 w-6 text-white cursor-pointer'
                onClick={() => setShowMenu(true)}
              />
              <div data-menu={showMenu} className='fixed inset-0 p-4 bg-white data-[menu=true]:animate-in data-[menu=true]:zoom-in-90 data-[menu=true]:visible data-[menu=false]:invisible data-[menu=false]:animate-out data-[menu=false]:zoom-out-95'>
                <div className='flex items-center justify-between'>
                  <Image
                    src='/images/logo.svg'
                    alt='cherry-pick'
                    title='cherry-pick'
                    height={40}
                    width={192}
                  />
                  <RxCross2 className='h-6 w-6 text-black cursor-pointer' onClick={() => setShowMenu(false)}/>
                </div>
                <div className='flex flex-col justify-center items-center h-full'>
                  <div className='flex flex-col items-center space-y-5'>
                    <div className='flex items-center space-x-2 cursor-pointer'
                      onClick={() => setLanguageDropdown(!languageDropdown)}
                    >
                      <Image
                        src='/images/british.svg'
                        alt='language'
                        title='language'
                        height={20}
                        width={26}
                      />
                      <HiMiniChevronDown
                        data-dropdown={languageDropdown}
                        className='h-3 w-3 data-[dropdown=true]:rotate-180 transition-all duration-300 ease-in-out'
                      />
                    </div>
                    <div data-dropdown={languageDropdown} className='data-[dropdown=false]:hidden flex flex-col space-y-5 items-center'>
                      <Text
                        variant='black'
                        size='h5'
                      >
                        Bahasa Indonesia
                      </Text>
                      <Text
                        variant='black'
                        size='h5'
                      >
                        French
                      </Text>
                      <Text
                        variant='black'
                        size='h5'
                      >
                        Germany
                      </Text>
                      <Text
                        variant='black'
                        size='h5'
                      >
                        Dutch
                      </Text>
                      <div className='w-[94px] h-px bg-gray-50' />
                    </div>
                    <Text
                      variant='black'
                      size='h4'
                    >
                      Services
                    </Text>
                    <Text
                      variant='black'
                      size='h4'
                    >
                      Works
                    </Text>
                    <Text
                      variant='black'
                      size='h4'
                    >
                      Contact
                    </Text>
                  </div>
                </div>
              </div>
            </div>
            <div className='hidden lg:flex items-center space-x-10'>
              <LanguageMenu/>
              <Text
                variant='link'
                size='h4'
              >
                Work
              </Text>
              <Text
                variant='link'
                size='h4'
              >
                Contact
              </Text>
              <Text
                variant='link'
                size='h4'
              >
                Services
              </Text>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Header
