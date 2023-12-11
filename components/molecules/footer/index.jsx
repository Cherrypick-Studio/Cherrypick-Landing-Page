import Image from "next/image";
import Text from "@/components/ui/text";
import { Button } from "@/components/ui/button";
import CardIcon from "../card-icon";
import { Separator } from "@/components/ui/separator";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="mt-32">
      <div className="flex items-center justify-center">
        <Image
          src="/images/vector-client.svg"
          alt="vector-client"
          title="vector-client"
          height={398}
          width={790}
          className="-mb-2 lg:-mb-4"
        />
      </div>
      <div className="bg-center px-4 py-28 flex flex-col text-center space-y-6 bg-cover md:bg-auto justify-center items-center bg-[url('/images/bg-mask-footer-mobile.svg')] md:bg-[url('/images/bg-mask-footer.svg')]">
        <Text variant="white" size="h0" weight="700">
          Ready to work on your project?
        </Text>
        <Button variant="primary" rounded="2xl">
          Let's get to work
        </Button>
      </div>
      <div className="bg-gray-500 -mt-1">
        <div className="container mx-auto">
          <div className="flex flex-col lg:flex-row space-y-8 lg:space-y-0 items-center justify-between py-8">
            <Image
              src="/images/logo-white.svg"
              alt="cherry-pick-logo-white"
              title="cherry-pick-logo-white"
              height={40}
              width={176}
            />
            <div className="flex flex-col lg:flex-row items-center lg:space-x-10 space-y-8 lg:space-y-0">
              <div className="text-center lg:text-right">
                <Text variant="white" size="h5">
                  Find Us On
                </Text>
                <div className="flex items-center justify-center lg:justify-end space-x-5 mt-2">
                  <Link href={"#"}>
                    <CardIcon
                      image="/images/icon-footer/instagram.svg"
                      alt="instagram-icon"
                    />
                  </Link>
                  <Link href={"#"}>
                    <CardIcon
                      image="/images/icon-footer/dribbble.svg"
                      alt="dribbble-icon"
                    />
                  </Link>
                  <Link href={"#"}>
                    <CardIcon
                      image="/images/icon-footer/ri_behance-line.svg"
                      alt="behance-icon"
                    />
                  </Link>
                  <Link href={"#"}>
                    <CardIcon
                      image="/images/icon-footer/linkedin.svg"
                      alt="linkedin-icon"
                    />
                  </Link>
                  <Link href={"#"}>
                    <CardIcon
                      image="/images/icon-footer/mail.svg"
                      alt="mail-icon"
                    />
                  </Link>
                  <Link href={"#"}>
                    <CardIcon
                      image="/images/icon-footer/ic_baseline-whatsapp.svg"
                      alt="whatsapp-icon"
                    />
                  </Link>
                </div>
              </div>
              <div className="text-center lg:text-right">
                <Text variant="white" size="h5">
                  Payment Accepted
                </Text>
                <div className="flex items-center justify-center lg:justify-end space-x-5 mt-2">
                  <CardIcon image="/images/icon-footer/cib_cc-visa.svg" />
                  <CardIcon image="/images/icon-footer/simple-icons_wise.svg" />
                </div>
              </div>
            </div>
          </div>
          <Separator orientation="horizontal" className="my-2" />
          <div className="flex justify-center items-center py-8">
            <Text variant="white" size="h-6">
              &copy; {new Date().getFullYear()} Cherry Pick
            </Text>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
