import { cn } from "@/lib/utils";

const getVariant = (variant) => {
  switch (variant) {
    case "primary":
      return "text-gray-500";
    case "white":
      return "text-white";
    case "subtitle":
      return "text-red-cherry-500 bg-red-cherry-50 py-2 px-4 uppercase";
    case "flutix":
      return "text-[#503E9D]";
    case "link":
      return "text-white hover:text-red-cherry-50 cursor-pointer";
  }
};

const getWeight = (weight) => {
  switch (weight) {
    case "100":
      return "font-thin";
    case "200":
      return "font-extralight";
    case "300":
      return "font-light";
    case "400":
      return "font-normal";
    case "500":
      return "font-medium";
    case "600":
      return "font-semibold";
    case "700":
      return "font-bold";
    case "800":
      return "font-extrabold";
    case "900":
      return "font-black";
  }
};

const getDecoration = (decoration) => {
  switch (decoration) {
    case "underline":
      return "underline";
    case "italic":
      return "italic";
  }
};

const getSize = (size) => {
  switch (size) {
    case "banner":
      return "text-2xl md:text-5xl lg:text-6xl";
    case "h0":
      return "text-4xl lg:text-5xl";
    case "h1":
      return "text-2xl";
    case "h2":
      return "text-xl";
    case "h3":
      return "text-lg";
    case "h4":
      return "text-base";
    case "h5":
      return "text-sm";
    case "h6":
      return "text-xs";
    case "h7":
      return "text-[10px]";
  }
};

const Text = (props, ref) => {
  const {
    variant = "primary",
    weight = "400",
    size = "banner",
    decoration = "",
    className,
    children,
    ...rest
  } = props;

  const merged = cn(
    getVariant(variant),
    getWeight(weight),
    getDecoration(decoration),
    getSize(size),
    className,
    { ...rest }
  );

  return (
    <span className={merged} {...rest}>
      {children}
    </span>
  );
};

Text.displayName = "Text";
export default Text;
