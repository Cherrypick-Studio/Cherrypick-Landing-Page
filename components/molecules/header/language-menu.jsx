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


const LanguageMenu = () =>
{
  const [language, setLanguage] = useState('en')
  return (
    <NavigationMenu className="border rounded-full border-[#DDDDDD]">
      <NavigationMenuList>
        <NavigationMenuItem>
          <NavigationMenuTrigger>
            <Image
              src='/images/british.svg'
              alt='language'
              title='language'
              height={20}
              width={26}
            />
            <Text
              size="h4"
              className="ml-3"
            >
              {language.toUpperCase()}
            </Text>
          </NavigationMenuTrigger>
          <NavigationMenuContent>
            <NavigationMenuLink>
              <Text
                variant='link'
                size='h4'
                className='block py-1'
              >
                English
              </Text>
            </NavigationMenuLink>
            <NavigationMenuLink>
              <Text
                variant='link'
                size='h4'
                className='block py-1'
              >
                French
              </Text>
            </NavigationMenuLink>
            <NavigationMenuLink>
              <Text
                variant='link'
                size='h4'
                className='block py-1'
              >
                Germany
              </Text>
            </NavigationMenuLink>
            <NavigationMenuLink>
              <Text
                variant='link'
                size='h4'
                className='block py-1'
              >
                Dutch
              </Text>
            </NavigationMenuLink>
          </NavigationMenuContent>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  )
}

export default LanguageMenu
