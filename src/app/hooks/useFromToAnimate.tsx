import { useEffect, useRef, useState } from 'react'
import { gsap } from 'gsap'

interface IUseFromToAnimate {
  from?: GSAPTweenVars
  to?: GSAPTweenVars
  defAnimate?: boolean
}

const defaultAnimate: IUseFromToAnimate = {
  from: {
    x: -200,
    y: -100,
    opacity: 0
  },
  to: {
    x: 0,
    y: 0,
    opacity: 1,
    stagger: 0.05,
    duration: 1,
    ease: 'power4.out',
  },
  defAnimate: true
}

export const useFromToAnimate = <T extends HTMLElement>({
  from,
  to,
  defAnimate = true
}: IUseFromToAnimate = defaultAnimate) => {
  const ref = useRef<T | null>(null)
  const [isOnScreen, setIsOnScreen] = useState(false);


  useEffect(() => {
    const currentRef = ref.current

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsOnScreen(true);
          }
        });
      },
      {
        root: null,
        rootMargin: '0px',
        threshold: 0.3,
      },
    );


    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, []);

  useEffect(() => {
    if (isOnScreen) {
      if (ref.current && defAnimate) {
        gsap.fromTo(
          ref.current,
          { ...defaultAnimate.from, ...from },
          { ...defaultAnimate.to, ...to }
        )
      } else if (from && to) {
        gsap.fromTo(ref.current, from, to)
      }
    }
  }, [from, to, defAnimate, isOnScreen])

  return { ref, isOnScreen }
}
