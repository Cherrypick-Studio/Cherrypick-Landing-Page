'use client'

import Image from 'next/image'
import Text from '@/components/ui/text'
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from '@/components/ui/navigation-menu'
import { useState } from 'react'
import { useLocale } from 'next-intl'
import { useRouter, usePathname } from 'next/navigation'

const languages = [
  {
    code: 'en',
    name: 'English',
    flag: '/images/british.svg',
    locale: 'en-US'
  },
  {
    code: 'ae',
    name: 'UEA',
    flag: '/images/uea.svg',
    locale: 'ae-AE'
  },
  {
    code: 'kr',
    name: 'South Korea',
    flag: '/images/korsel.svg',
    locale: 'kr-KR'
  },
  {
    code: 'cn',
    name: 'Tiongkok',
    flag: '/images/china.svg',
    locale: 'cn-CN'
  }
]

const LanguageMenu = () => {
  const router = useRouter()
  const pathname = usePathname()
  const locale = useLocale()
  const [isOpen, setIsOpen] = useState(false)

  // Find current language object
  const getCurrentLanguage = () => {
    return languages.find(lang => lang.code === locale) || languages[0]
  }

  // Handle language change
  const handleLanguageChange = (newLocale) => {
    // Remove the current locale from pathname and add new locale
    const pathWithoutLocale = pathname.replace(`/${locale}`, '') || '/'
    const newPath = `/${newLocale}${pathWithoutLocale}`
    
    setIsOpen(false)
    router.push(newPath)
  }

  const currentLang = getCurrentLanguage()

  return (
    <NavigationMenu className="border rounded-full border-[#DDDDDD] cursor-pointer">
      <NavigationMenuList>
        <NavigationMenuItem>
          <NavigationMenuTrigger 
            className="flex items-center gap-3 px-4 py-2 hover:bg-gray-50 transition-colors"
            onClick={() => setIsOpen(!isOpen)}
          >
            <Image
              src={currentLang.flag}
              alt={`${currentLang.name} flag`}
              title={currentLang.name}
              height={20}
              width={26}
              className="rounded-sm"
            />
            <Text
              size="h4"
              className="font-medium"
            >
              {currentLang.code.toUpperCase()}
            </Text>
          </NavigationMenuTrigger>
          
          <NavigationMenuContent className="min-w-[160px] p-2">
            {languages.map((language) => (
              <NavigationMenuLink
                key={language.code}
                className={`flex items-center gap-3 px-3 py-2 rounded-md cursor-pointer transition-colors hover:opacity-50 ${
                  locale === language.code 
                    ? 'bg-blue-50 text-blue-600' 
                    : 'text-gray-700'
                }`}
                onClick={() => handleLanguageChange(language.code)}
              >
                <Image
                  src={language.flag}
                  alt={`${language.name} flag`}
                  height={16}
                  width={20}
                  className="rounded-sm"
                />
                <Text
                  variant='link'
                  size='h4'
                  className={`${
                    locale === language.code 
                      ? 'font-semibold text-blue-600' 
                      : 'font-normal'
                  }`}
                >
                  {language.name}
                </Text>
                {locale === language.code && (
                  <span className="ml-auto text-blue-600">✓</span>
                )}
              </NavigationMenuLink>
            ))}
          </NavigationMenuContent>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  )
}

export default LanguageMenu
