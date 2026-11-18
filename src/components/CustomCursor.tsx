import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';

export const CustomCursor: React.FC = () => {
  const cursorRef = useRef<HTMLDivElement>(null);
  const followerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (window.matchMedia('(pointer: coarse)').matches) {
      return;
    }

    const cursor = cursorRef.current;
    const follower = followerRef.current;
    if (!cursor || !follower) return;

    const xTo = gsap.quickTo(cursor, 'x', { duration: 0.1, ease: 'power3' });
    const yTo = gsap.quickTo(cursor, 'y', { duration: 0.1, ease: 'power3' });
    const fxTo = gsap.quickTo(follower, 'x', { duration: 0.35, ease: 'power3' });
    const fyTo = gsap.quickTo(follower, 'y', { duration: 0.35, ease: 'power3' });

    const handleMouseMove = (e: MouseEvent) => {
      xTo(e.clientX);
      yTo(e.clientY);
      fxTo(e.clientX);
      fyTo(e.clientY);
    };

    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (
        target.tagName === 'A' ||
        target.tagName === 'BUTTON' ||
        target.closest('a') ||
        target.closest('button') ||
        target.getAttribute('role') === 'button' ||
        target.classList.contains('interactive')
      ) {
        gsap.to(follower, {
          scale: 2.2,
          backgroundColor: 'rgba(255, 84, 0, 0.15)',
          borderColor: 'rgba(255, 84, 0, 0.7)',
          duration: 0.3,
        });
        gsap.to(cursor, { scale: 0.5, duration: 0.2 });
      } else {
        gsap.to(follower, {
          scale: 1,
          backgroundColor: 'transparent',
          borderColor: 'rgba(255, 84, 0, 0.4)',
          duration: 0.3,
        });
        gsap.to(cursor, { scale: 1, duration: 0.2 });
      }
    };

    window.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseover', handleMouseOver);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseover', handleMouseOver);
    };
  }, []);

  return (
    <>
      <div
        ref={cursorRef}
        className="fixed top-0 left-0 w-2.5 h-2.5 bg-[#ff5400] rounded-full pointer-events-none z-[9999] -translate-x-1/2 -translate-y-1/2 hidden md:block shadow-[0_0_12px_#ff5400]"
      />
      <div
        ref={followerRef}
        className="fixed top-0 left-0 w-8 h-8 rounded-full border border-[#ff5400]/40 pointer-events-none z-[9998] -translate-x-1/2 -translate-y-1/2 hidden md:block transition-transform duration-75"
      />
    </>
  );
};
