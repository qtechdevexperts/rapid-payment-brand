import Lenis from '@studio-freight/lenis';
import { ReactNode, useEffect } from 'react';

interface ScrollProps {
  children: ReactNode;
}

const SmoothScrolling: React.FC<ScrollProps> = ({ children }) => {
  useEffect(() => {
    const lenis = new Lenis({
      duration: 0.8, // Decrease duration to make scrolling faster
      easing: (t) => 1 - Math.pow(2, -10 * t), // Keep easing same but you can tweak this for smoother experience
      touchMultiplier: 1.5, // Lower touchMultiplier if you want more responsive scrolling on touch
    });

    function scroll(time: number) {
      lenis.raf(time);
      requestAnimationFrame(scroll);
    }

    requestAnimationFrame(scroll);

    return () => {
      lenis.destroy();
    };
  }, []);

  return <>{children}</>;
};

export default SmoothScrolling;
