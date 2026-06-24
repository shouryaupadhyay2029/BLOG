import React, { forwardRef } from 'react';
import { cn } from '@/utils/cn';

/**
 * SectionWrapper is a semantic layout component that encapsulates consistent 
 * vertical section spacing, responsive maximum-width boundaries, and clean scoping.
 * 
 * Supports GSAP ScrollTrigger bindings via forwardRef.
 */
export const SectionWrapper = forwardRef(({
  id,
  children,
  className,
  containerClassName,
  as: Component = 'section',
  fullWidth = false,
  ...props
}, ref) => {
  return (
    <Component
      id={id}
      ref={ref}
      className={cn(
        "relative w-full py-section-gap overflow-hidden",
        className
      )}
      {...props}
    >
      {fullWidth ? (
        children
      ) : (
        <div className={cn("layout-container relative z-10", containerClassName)}>
          {children}
        </div>
      )}
    </Component>
  );
});

SectionWrapper.displayName = 'SectionWrapper';

export default SectionWrapper;
