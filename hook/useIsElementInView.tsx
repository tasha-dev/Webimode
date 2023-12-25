'use client';

// Importing part
import {useState, useEffect, MutableRefObject, Dispatch} from 'react';

// Creating and exporting useIsElementInView custom hook ..
export default function useIsElementInView(ref:MutableRefObject<any>):boolean {
  // Defining state of hook
  const [isInView, setIsInView]:[boolean, Dispatch<boolean>] = useState(false);

  // Using useEffect hook to ...
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        // Update the state based on the entry's intersection ratio
        setIsInView(entry.isIntersecting);
      },
      {
        root: null, // Use the viewport as the root
        rootMargin: '0px', // No margin
        threshold: 0.5, // Trigger when 50% of the element is visible
      }
    );

    // Observe the target element
    if (ref.current) {
      observer.observe(ref.current);
    }

    // Cleanup the observer on unmount
    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, [ref]);

  // Returning state
  return isInView;
};