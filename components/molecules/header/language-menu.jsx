"use client";
import Text from "@/components/ui/text";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import { useLocale } from "next-intl";
import { usePathname, useRouter } from "@/i18n/navigation";
import { useParams } from "next/navigation";

const LOCALES = [
  { code: "en", label: "English" },
  { code: "id", label: "Bahasa Indonesia" },
];

const LanguageMenu = () => {
  const locale = useLocale();
  const pathname = usePathname();
  const router = useRouter();
  const params = useParams();

  const switchTo = (nextLocale) => {
    if (nextLocale === locale) return;
    // Keep the user on the same page, just in the other locale.
    router.replace({ pathname, params }, { locale: nextLocale });
  };

  return (
    <NavigationMenu className="border rounded-full border-[#DDDDDD]">
      <NavigationMenuList>
        <NavigationMenuItem>
          <NavigationMenuTrigger>
            <Text size="h4" className="ml-3">
              {locale.toUpperCase()}
            </Text>
          </NavigationMenuTrigger>
          <NavigationMenuContent>
            {LOCALES.map((l) => (
              <NavigationMenuLink
                key={l.code}
                onClick={() => switchTo(l.code)}
                className="cursor-pointer"
              >
                <Text
                  variant="link"
                  size="h4"
                  className={`block py-1 ${
                    l.code === locale ? "text-red-cherry-500" : ""
                  }`}
                >
                  {l.label}
                </Text>
              </NavigationMenuLink>
            ))}
          </NavigationMenuContent>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  );
};

export default LanguageMenu;
