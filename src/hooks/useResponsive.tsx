import { useState, useEffect } from 'react';

interface UseResponsiveProps {
  query: string;
}

function useResponsive({ query }: UseResponsiveProps): boolean {
  const [matches, setMatches] = useState<boolean>(false);

  useEffect(() => {
    if (typeof window.matchMedia === 'function') {
      const mql: MediaQueryList = window.matchMedia(query);

      setMatches(mql.matches);

      const handler = (event: MediaQueryListEvent) => {
        setMatches(event.matches);
      };

      mql.addEventListener('change', handler);

      return () => {
        mql.removeEventListener('change', handler);
      };
    } else {
      console.warn('window.matchMedia is not supported');
    }
  }, [query]);

  return matches;
}

export default useResponsive;