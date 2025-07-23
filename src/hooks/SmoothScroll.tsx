import { useEffect, useRef } from 'react';

export const useSmoothScroll = () => {
  const scrolling = useRef(false);
  const currentScrollRef = useRef(0);
  const targetScrollRef = useRef(0);
  const frameRef = useRef<number>();
  const previousTimeRef = useRef<number>();

  useEffect(() => {
    const smoothStep = (current: number, target: number, time: number) => {
      if (Math.abs(current - target) < 0.001) {
        return target;
      }
      const delta = (target - current) * Math.min(time * 6, 1);
      return current + delta;
    };

    const render = (time: number) => {
      if (previousTimeRef.current !== undefined) {
        const deltaTime = (time - previousTimeRef.current) / 1000;
        currentScrollRef.current = smoothStep(
          currentScrollRef.current,
          targetScrollRef.current,
          deltaTime
        );

        if (Math.abs(currentScrollRef.current - targetScrollRef.current) > 0.1) {
          window.scrollTo(0, currentScrollRef.current);
          frameRef.current = requestAnimationFrame(render);
        } else {
          scrolling.current = false;
        }
      }
      previousTimeRef.current = time;
    };

    const onScroll = () => {
      targetScrollRef.current = window.pageYOffset;
      if (!scrolling.current) {
        scrolling.current = true;
        currentScrollRef.current = window.pageYOffset;
        previousTimeRef.current = undefined;
        frameRef.current = requestAnimationFrame(render);
      }
    };

    // Set initial values
    currentScrollRef.current = window.pageYOffset;
    targetScrollRef.current = window.pageYOffset;

    // Add scroll listener
    window.addEventListener('scroll', onScroll, { passive: true });

    return () => {
      window.removeEventListener('scroll', onScroll);
      if (frameRef.current) {
        cancelAnimationFrame(frameRef.current);
      }
    };
  }, []);
};