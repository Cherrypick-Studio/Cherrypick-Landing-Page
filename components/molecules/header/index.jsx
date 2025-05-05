"use client";
import Image from "next/image";
import Text from "@/components/ui/text";
import LanguageMenu from "@/components/molecules/header/language-menu";
import { HiOutlineMenuAlt1 } from "react-icons/hi";
import { RxCross2 } from "react-icons/rx";
import { useState, useEffect } from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import Link from "next/link";
import { m, LazyMotion, domAnimation } from "framer-motion";

const Header = () => {
  const [showMenu, setShowMenu] = useState(false);
  const [scroll, setScroll] = useState("");

  const listenScrollEvent = () => {
    if (window.scrollY > 25) {
      setScroll("bg-white shadow-md");
    } else {
      setScroll("bg-white");
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", listenScrollEvent);
  });

  return (
    <header
      className={`fixed top-0 inset-x-0 z-40 ${scroll} transition-all ease-in-out duration-300`}
    >
      <LazyMotion features={domAnimation}>
        <m.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ ease: "easeOut", duration: 0.5, delay: 2 }}
          className="relative flex items-center justify-between mx-auto py-3 px-10 lg:py-4 lg:px-20"
        >
          <Link href="#section-hero">
            <Image
              src="/images/logo-noword.svg"
              alt="cherry-pick-logo"
              title="cherry-pick-logo"
              className="w-"
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
                className="fixed inset-0 py-4 px-10 bg-white data-[menu=true]:animate-in data-[menu=true]:zoom-in-90 data-[menu=true]:visible data-[menu=false]:invisible data-[menu=false]:animate-out data-[menu=false]:zoom-out-95"
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
                     <Link href="#section-portofolio">
                      <Text
                        variant="primary"
                        size="h4"
                        onClick={() => setShowMenu(false)}
                      >
                        Portfolio
                      </Text>
                    </Link>
                    <Link href="#section-services">
                      <Text
                        variant="primary"
                        size="h4"
                        onClick={() => setShowMenu(false)}
                      >
                        Services
                      </Text>
                    </Link>
                    <Link href="#section-aboutus">
                      <Text
                        variant="primary"
                        size="h4"
                        onClick={() => setShowMenu(false)}
                      >
                        About us
                      </Text>
                    </Link>
                    <Link href="#footer">
                      <Text
                        variant="primary"
                        size="h4"
                        onClick={() => setShowMenu(false)}
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
              <Link href="#section-portofolio">
                <Text variant="link" size="h4">
                  Portofolio
                </Text>
              </Link>
              <Link href="#section-services">
                <Text variant="link" size="h4">
                  Services
                </Text>
              </Link>
              <Link href="#section-aboutus">
                <Text variant="link" size="h4">
                  About Us
                </Text>
              </Link>
              <Link href="#footer">
                <Text variant="link" size="h4">
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
      {/* <div className="relative flex items-center justify-between container mx-auto md:py-8 py-4">
        
      </div> */}
    </header>
  );
};

export default Header;
