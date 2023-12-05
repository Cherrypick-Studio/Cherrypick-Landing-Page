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

const LanguageMenu = () => {
  return (
    <NavigationMenu>
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
          </NavigationMenuTrigger>
          <NavigationMenuContent>
            <NavigationMenuLink>
              <Text
                variant='link'
                size='h4'
                className='block py-1'
              >
                Bahasa Indonesia
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
