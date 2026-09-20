import { useLayoutEffect } from 'react';
import gsap from 'gsap';

export const useHeroEntrance = ({ contentRef, sceneWrapRef, sceneReady, reduceMotion }) => {
  useLayoutEffect(() => {
    if (!contentRef.current) return undefined;
    const items = contentRef.current.querySelectorAll('[data-hero-anim]');
    if (!items.length) return undefined;

    const tl = gsap.timeline({ defaults: { ease: 'power3.out' } });
    tl.from(items, {
      y: reduceMotion ? 0 : 20,
      opacity: 0,
      duration: reduceMotion ? 0.01 : 0.6,
      stagger: reduceMotion ? 0 : 0.09,
    });

    return () => tl.revert();
  }, [contentRef, reduceMotion]);

  useLayoutEffect(() => {
    if (!sceneReady || !sceneWrapRef.current) return undefined;

    const tween = gsap.to(sceneWrapRef.current, {
      opacity: 1,
      scale: 1,
      duration: reduceMotion ? 0.01 : 0.7,
      ease: 'power2.out',
    });

    return () => tween.revert();
  }, [sceneReady, sceneWrapRef, reduceMotion]);
};
