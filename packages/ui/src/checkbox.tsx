'use client'

import * as CheckboxPrimitive from '@radix-ui/react-checkbox'
import { cn } from '@tszhong0411/utils'
import { CheckIcon } from 'lucide-react'

export const Checkbox = (props: React.ComponentProps<typeof CheckboxPrimitive.Root>) => {
  const { className, ...rest } = props

  return (
    <CheckboxPrimitive.Root
      className={cn(
        'border-primary ring-offset-background peer size-4 shrink-0 rounded-sm border',
        'focus-visible:ring-ring focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2',
        'data-[state=checked]:bg-primary data-[state=checked]:text-primary-foreground',
        'disabled:cursor-not-allowed disabled:opacity-50',
        className
      )}
      {...rest}
    >
      <CheckboxPrimitive.Indicator className={cn('flex items-center justify-center text-current')}>
        <CheckIcon className='size-4' />
      </CheckboxPrimitive.Indicator>
    </CheckboxPrimitive.Root>
  )
}

Checkbox.displayName = CheckboxPrimitive.Root.displayName
