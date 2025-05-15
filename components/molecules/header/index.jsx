/* eslint-disable react-hooks/exhaustive-deps */
"use client";
import Image from "next/image";
import Text from "@/components/ui/text";
import LanguageMenu from "@/components/molecules/header/language-menu";
import { HiOutlineMenuAlt1 } from "react-icons/hi";
import { RxCross2 } from "react-icons/rx";
import { useState, useEffect } from "react";
import Link from "next/link";
import { m, LazyMotion, domAnimation } from "framer-motion";
import { Button } from "@/components/ui/button";
import { usePathname } from "next/navigation";
import { ArrowLeft } from "lucide-react";
import { cn } from "@/lib/utils";

const Header = () => {
  const [showMenu, setShowMenu] = useState(false);
  // BE ABLE TO USE :could disabled when need it 
  // const [scroll, setScroll] = useState("");
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(10);
  const pathname = usePathname();
  const [activeHash, setActiveHash] = useState("");

 // BE ABLE TO USE :could disabled when need it 
  // const listenScrollEvent = () => {
  //   if (window.scrollY > 25) {
  //     setScroll("bg-white block");
  //   } else {
  //     setScroll("hidden");
  //   }
  // };

  // useEffect(() => {
  //   window.addEventListener("scroll", listenScrollEvent);
  // });

  const controlHeader = () => {
    if (typeof window !== 'undefined') {
      const currentScrollY = window.scrollY;
      
      // Determine scroll direction
      if (currentScrollY > lastScrollY) {
        // Scrolling down
        setIsVisible(false);
      } else {
        // Scrolling up
        setIsVisible(true);
      }
      
      // Update last scroll position
      setLastScrollY(currentScrollY);
    }
  };

  useEffect(() => {
    if (typeof window !== 'undefined') {
      window.addEventListener('scroll', controlHeader);
      
      // Cleanup
      return () => {
        window.removeEventListener('scroll', controlHeader);
      }
    }
  }, [lastScrollY]);

  // Add this useEffect to track hash changes
  // useEffect(() => {
  //   // Only run on client side
  //   if (typeof window !== 'undefined') {
  //     // Set initial hash
  //     setActiveHash(window.location.hash);
      
  //     // Function to handle hash changes
  //     const handleHashChange = () => {
  //       setActiveHash(window.location.hash);
  //     };
      
  //     // Add event listener for hash changes
  //     window.addEventListener('hashchange', handleHashChange);
      
  //     // Clean up event listener
  //     return () => {
  //       window.removeEventListener('hashchange', handleHashChange);
  //     };
  //   }
  // }, []);

  return (
    <>
    <header
      // className={`sticky bg-white top-0 inset-x-0 z-40 ${scroll} transition-all ease-in-out duration-300`}
      className={`sticky bg-white top-0 inset-x-0 z-40 transition-transform duration-300 ease-in-out ${
        pathname.split('/').length > 2 && ( isVisible ? 'translate-y-0' : '-translate-y-full')
  
      }`}
    >
      <LazyMotion features={domAnimation}>
        <m.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ ease: "easeOut", duration: 0.5, delay: 2 }}
          className={`relative flex items-center justify-between mx-auto py-3 px-6 lg:py-6 lg:px-20 container`}
        >
          <Link href="/">
            <Image
              src="/images/logo-noword.svg"
              alt="cherry-pick-logo"
              title="cherry-pick-logo"
              className="w-[90%] max-lg:w-[80%]"
              height={40}
              width={40}
            />
          </Link>
          <nav>
            <div className="block lg:hidden">
              <div className="flex flex-row-reverse gap-3">
              <div className="w-fit h-fit bg-red-cherry-500 rounded-full p-3">
                <HiOutlineMenuAlt1
                  className="h-6 w-6 text-white cursor-pointer"
                  onClick={() => setShowMenu(true)}
                  />
                
                </div>
                <div className="-z-10">
                  <LanguageMenu />
                </div>
              </div>
              <div
                data-menu={showMenu}
                className="fixed inset-0 py-4 px-10 bg-white h-[100vh] data-[menu=true]:animate-in data-[menu=true]:zoom-in-90 data-[menu=true]:visible data-[menu=false]:invisible data-[menu=false]:animate-out data-[menu=false]:zoom-out-95"
              >
                <div className="flex items-center justify-between">
                  <Image
                    src="/images/logo-noword.svg"
                    alt="cherry-pick"
                    title="cherry-pick"
                    height={40}
                    width={40}
                  />
                  <RxCross2
                    className="h-6 w-6 text-black cursor-pointer"
                    onClick={() => setShowMenu(false)}
                  />
                </div>
                <div className="flex flex-col justify-center items-center h-full">
                  <div className="flex flex-col items-center space-y-5">
                    {/* NOTE: commented temporary */}
                    {/* <Accordion
                    type="single"
                    collapsible={true}
                    className="text-center"
                  >
                    <AccordionItem value="item-1">
                      <AccordionTrigger>
                        <Image
                          src="/images/british.svg"
                          alt="language"
                          title="language"
                          height={20}
                          width={26}
                        />
                      </AccordionTrigger>
                      <AccordionContent>
                        <Text
                          variant="primary"
                          size="h4"
                          className="block py-1"
                        >
                          Bahasa Indonesia
                        </Text>
                        <Text
                          variant="primary"
                          size="h4"
                          className="block py-1"
                        >
                          French
                        </Text>
                        <Text
                          variant="primary"
                          size="h4"
                          className="block py-1"
                        >
                          Germany
                        </Text>
                        <Text
                          variant="primary"
                          size="h4"
                          className="block py-1"
                        >
                          Dutch
                        </Text>
                      </AccordionContent>
                    </AccordionItem>
                  </Accordion> */}
                      <Link href="/portfolio" >
                      <Text
                        variant="primary"
                        size="h4"
                          onClick={() => setShowMenu(false)}
                          className={cn(
                            'text-black',
                             {'text-red-cherry-500':pathname.includes('portfolio')},
                           )}
                      >
                        Portfolio
                      </Text>
                    </Link>
                      <Link href="/about-us" >
                      <Text
                        variant="primary"
                        size="h4"
                          onClick={() => setShowMenu(false)}
                          className={cn(
                            'text-black',
                             {'text-red-cherry-500':pathname.includes('about-us')},
                           )}
                      >
                        Services
                      </Text>
                    </Link>
                    <Link href="/about-us" >
                      <Text
                        variant="primary"
                        size="h4"
                          onClick={() => setShowMenu(false)}
                          className={cn(
                            'text-black',
                             {'text-red-cherry-500':pathname.includes('about-us')},
                           )}
                      >
                        About us
                      </Text>
                    </Link>
                    <Link href="/contact">
                      <Text
                        variant="primary"
                        size="h4"
                          onClick={() => setShowMenu(false)}
                          className={cn(
                            'text-black',
                             {'text-red-cherry-500':pathname.includes('contact')},
                           )}
                      >
                        Contact
                      </Text>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            <div className="hidden lg:flex items-center space-x-10">
              {/* NOTE: commented temporary */}
              {/* <LanguageMenu /> */}
              <Link href="/portfolio" >
                <Text variant="link" size="h4" className={cn(
                      'text-black',
                       {'text-red-cherry-500':pathname.includes('portfolio')},
                     )}>
                  Portofolio
                </Text>
              </Link>
              <Link href="/about-us" >
                <Text variant="link" size="h4" className={cn(
                      'text-black',
                       {'text-red-cherry-500':pathname.includes('about-us')},
                     )}>
                  Services
                </Text>
              </Link>
              <Link href="/about-us" >
                <Text variant="link" size="h4" className={cn(
                      'text-black',
                       {'text-red-cherry-500':pathname.includes('about-us')},
                     )}>
                  About Us
                </Text>
              </Link>
              <Link href="/contact" >
                <Text variant="link" size="h4" className={cn(
                      'text-black',
                       {'text-red-cherry-500':pathname.includes('contact')},
                     )}>
                  Contact
                </Text>
              </Link>
            </div>
          </nav>
          <div className="hidden lg:block">
          <LanguageMenu/>
         </div>
        </m.div>
      </LazyMotion>
    </header>

      {/* second navbar  */}
      {pathname.split('/').length > 2 && 
        <div className={`sticky border border-[#EBEBEB] top-0 inset-x-0 z-30 bg-white transition-transform duration-300 ease-in-out ${isVisible && lastScrollY !==0 ? 'translate-y-[70px]':'translate-y-0'}`}>
        <div className="container mx-auto py-3 px-6 lg:py-6 lg:px-20">
          <div className="flex justify-between items-center max-lg:flex-col max-lg:items-start gap-4">
              <Link href='/portfolio'>
              <Button variant="secondary" className='flex p-0 gap-4 border-none text-[#909090]'>
                    <ArrowLeft/>
              See List Portfolio
            </Button></Link>
            <div className="flex items-center space-x-8">
              {/* Secondary navbar right side content */}
              <Link href="#overview" onClick={()=>setActiveHash('#overview')}>
                  <Text variant="secondary" size="small" className={
                    cn(
                      'text-gray-150',
                      {'text-red-cherry-500':activeHash === "#overview" || activeHash === ""  },
                    )
                    }>
                    Overview
                    </Text>
                    </Link>
                    <Link href="#development" onClick={()=>setActiveHash('#development')}>
                  <Text variant="secondary" size="small" className={
                     cn(
                      'text-gray-150',
                      {'text-red-cherry-500':activeHash === "#development"},
                    )
                  }
                  >
                Development
                </Text>
                    </Link>
                    <Link href="#result" onClick={()=>setActiveHash('#result')}>
                <Text variant="secondary" size="small"  className={
                     cn(
                      'text-gray-150',
                      {'text-red-cherry-500':activeHash === "#result"},
                    )
                  }>
                Result
                </Text>
              </Link>
            </div>
          </div>
        </div>
      </div>}
    </>
  );
};

export default Header;
