'use client'
import Image from 'next/image'
import Text from '@/components/ui/text'
import LanguageMenu from '@/components/molecules/header/language-menu'
import { HiOutlineMenuAlt1 } from 'react-icons/hi'
import { RxCross2 } from 'react-icons/rx'
import { useState, useEffect } from 'react'
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"

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
        <div className='relative flex items-center justify-between container mx-auto md:py-8 py-4'>
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
                    <Accordion type="single" collapsible={true} className='text-center'>
                      <AccordionItem value="item-1">
                        <AccordionTrigger>
                          <Image
                            src='/images/british.svg'
                            alt='language'
                            title='language'
                            height={20}
                            width={26}
                          />
                        </AccordionTrigger>
                        <AccordionContent>
                            <Text
                              variant='primary'
                              size='h4'
                              className='block py-1'
                            >
                              Bahasa Indonesia
                            </Text>
                            <Text
                              variant='primary'
                              size='h4'
                              className='block py-1'
                            >
                              French
                            </Text>
                            <Text
                              variant='primary'
                              size='h4'
                              className='block py-1'
                            >
                              Germany
                            </Text>
                            <Text
                              variant='primary'
                              size='h4'
                              className='block py-1'
                            >
                              Dutch
                            </Text>
                        </AccordionContent>
                      </AccordionItem>
                    </Accordion>
                    <Text
                      variant='primary'
                      size='h4'
                    >
                      Services
                    </Text>
                    <Text
                      variant='primary'
                      size='h4'
                    >
                      Works
                    </Text>
                    <Text
                      variant='primary'
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
