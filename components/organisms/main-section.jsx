import Image from "next/image";
import Text from "@/components/ui/text";
import { Button } from "@/components/ui/button";

const MainSection = () => {
  return (
    <header className=" pt-24 md:pt-40 pb-56 md:pb-20 md:bg-cover bg-no-repeat md:bg-center md:bg-[url('/images/bg-mask.svg')] bg-[url('/images/bg-mask-3.svg')]">
      <div className="md:container md:mx-auto lg:flex space-y-16 lg:space-y-0">
        <div className="w-full lg:w-2/5 text-center lg:text-start">
          <Text
            variant="white"
            size="h0"
            weight="700"
            className="block !leading-[44px] md:!leading-[70px]"
          >
            <h1>Digitalize Your Products with Us</h1>
          </Text>
          <Text
            variant="white"
            size="h2"
            weight="400"
            className="block my-6 mx-4 md:mx-auto leading-9"
          >
            <h2>
              Create intuitive UI/UX designs aligned with client goals,
              delivering high-quality UI/UX Design & Development services.
            </h2>
          </Text>
          <Button variant="homepage" rounded="2xl">
            Create Together Now
          </Button>
        </div>
        <div className="w-full lg:w-3/5">
          <Image
            src="/images/vector-1.svg"
            alt="vector-jumbotron"
            title="vector-jumbotron"
            height={422}
            width={687}
            className="sm:ml-0 md:float-right"
          />
        </div>
      </div>
    </header>
  );
};

export default MainSection;
