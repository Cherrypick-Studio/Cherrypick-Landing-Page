import React from "react";
import { cn } from "@/lib/utils";

const BadgeVariants = {
    default: "flex border border-[#DDDDDD] items-center px-2 py-1 h-fit gap-3 rounded-full",
    'bg-gray': "flex border-none items-center px-2 py-1 h-fit gap-3 rounded-full bg-[#F2F2F2]",
    red: "bg-red-cherry-500 text-white px-2 py-1 h-fit rounded-full",
}
const Badge = React.forwardRef(({ 
  className, 
    children, 
  variant = "default",
  showRedDot = true,
  htmlFor,
  ...props 
}, ref) => {
    return (
        <div className={cn(BadgeVariants[variant])}>
            {showRedDot && <div className="w-2 h-2 bg-red-cherry-500 rounded-full" />}
            <label
                ref={ref}
                htmlFor={htmlFor}
                className={cn(
                "text-sm font-light text-center leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70",
                className
                )}
                {...props}
            >
                {children}
            </label>
        </div>
  );
});

Badge.displayName = "Badge";

export { Badge };