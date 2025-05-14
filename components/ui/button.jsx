'use client'
import * as React from 'react'
import { Slot } from '@radix-ui/react-slot'
import { cn } from '@/lib/utils'

const getVariants = (variant) => {
  switch (variant) {
    case 'primary':
      return 'bg-red-cherry-500 text-white hover:bg-red-cherry-400 focus:bg-red-cherry-400'
    case 'secondary':
      return 'bg-white text-neutral-700 border border-neutral-200 hover:border-neutral-700 focus:bg-neutral-50 focus:border-neutral-600'
    case 'tertiery':
      return 'bg-white text-neutral-700 p-spacing-2 hover:bg-neutral-50 focus:bg-neutral-50'
    case 'homepage':
      return 'bg-[#3AA655] text-white'
    case 'bordered':
      return 'bg-transparent text-neutral-700 border-2 border-red-cherry-500 hover:bg-red-cherry-50'
    case 'disabled':
      return 'bg-neutral-200 text-white'
  }
}


const getSize = (size) => {
  switch (size) {
    case 'primary':
      return 'px-4 py-2 w-full'
    case 'default':
      return 'px-8 py-2'
    case 'auth':
      return 'w-full lg:w-[240px] py-2'
    case 'icon':
      return 'h-[40px] w-[40px]'
  }
}

const getRounded = (rounded) => {
  switch (rounded) {
    case 'sm':
      return 'rounded-sm'
    case 'md':
      return 'rounded-md'
    case 'lg':
      return 'rounded-lg'
    case 'xl':
      return 'rounded-xl'
    case '2xl':
      return 'rounded-2xl'
    case '3xl':
      return 'rounded-3xl'
    case 'full':
      return 'rounded-full'
  }
}

const Button = (
  ({ className, variant = 'primary', size = 'default', rounded = '', asChild = false, disabled = false, children, onClick = () => {}, ...props }, ref) => {
    const Comp = asChild ? Slot : 'button'

    const classname = cn(
      getVariants(disabled ? 'disabled' : variant),
      getSize(size),
      getRounded(rounded),
      className,
      'relative max-lg:text-sm cursor-pointer'
    )

    return (
      <Comp
        className={classname}
        // ref={ref}
        disabled={disabled}
        type='submit'
        onClick={() => onClick()}
        {...props}
      >
        { children }
      </Comp>
    )
  }
)
Button.displayName = 'Button'

export { Button }
