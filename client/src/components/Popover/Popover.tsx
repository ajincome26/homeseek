import React, { type ElementType, useRef, useState } from 'react'
import {
  arrow,
  FloatingArrow,
  FloatingPortal,
  offset,
  type Placement,
  safePolygon,
  shift,
  useFloating,
  useHover,
  useInteractions
} from '@floating-ui/react'
import { AnimatePresence, motion } from 'framer-motion'

interface PopoverProps {
  children?: React.ReactNode
  popover?: React.ReactNode
  className?: string
  as?: ElementType
  placement?: Placement
  hoverClass?: string
  isFloatingArrow?: boolean
}

const Popover = ({
  children,
  popover,
  className,
  as: Element = 'div',
  placement,
  hoverClass,
  isFloatingArrow = true
}: PopoverProps) => {
  const [isOpen, setIsOpen] = useState(false)
  const arrowRef = useRef(null)
  const { refs, context, x, y, strategy, middlewareData } = useFloating({
    open: isOpen,
    onOpenChange: setIsOpen,
    transform: false,
    middleware: [
      shift(),
      offset(10),
      arrow({
        element: arrowRef
      })
    ],
    placement
  })
  const hover = useHover(context, {
    handleClose: safePolygon({
      requireIntent: false
    })
  })
  const { getReferenceProps, getFloatingProps } = useInteractions([hover])
  return (
    <Element
      className={`${hoverClass} flex items-center gap-1 transition cursor-pointer lg:gap-2`}
      ref={refs.setReference}
      {...getReferenceProps()}
    >
      {children}
      <FloatingPortal>
        <AnimatePresence>
          {isOpen && (
            <motion.div
              className={className}
              ref={refs.setFloating}
              style={{
                position: strategy,
                left: x,
                top: y,
                transformOrigin: `${middlewareData.arrow?.x}px top`
              }}
              {...getFloatingProps()}
              initial={{ opacity: 0, transform: 'scale(0)' }}
              animate={{ opacity: 1, transform: 'scale(1)' }}
              exit={{ opacity: 0, transform: 'scale(0)' }}
              transition={{ duration: 0.3 }}
            >
              {isFloatingArrow ? (
                <FloatingArrow
                  style={{
                    transform: 'translateY(-3%)'
                  }}
                  ref={arrowRef}
                  context={context}
                  fill='white'
                  tipRadius={1}
                />
              ) : null}

              {popover}
            </motion.div>
          )}
        </AnimatePresence>
      </FloatingPortal>
    </Element>
  )
}

export default Popover
