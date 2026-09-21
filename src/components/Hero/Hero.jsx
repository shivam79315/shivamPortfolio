import React, { Suspense, lazy, useEffect, useRef, useState } from 'react';
import { ChevronDown } from 'lucide-react';
import HeroContent from './HeroContent';
import HeroCanvasFallback from './HeroCanvasFallback';
import { useHeroEntrance } from './useHeroEntrance';

const HeroScene = lazy(() => import('./HeroScene'));
const GridBackground = lazy(() => import('./GridBackground'));

const getTier = () => {
  if (typeof window === 'undefined') return 'desktop';
  if (window.innerWidth < 640) return 'mobile';
  if (window.innerWidth < 1024) return 'tablet';
  return 'desktop';
};

const Hero = () => {
  const contentRef = useRef(null);
  const sceneWrapRef = useRef(null);
  const pointerRef = useRef({ x: 0, y: 0 });

  const [tier, setTier] = useState(getTier);
  const [sceneReady, setSceneReady] = useState(false);
  const [parallaxEnabled, setParallaxEnabled] = useState(false);
  const [reduceMotion, setReduceMotion] = useState(false);

  useEffect(() => {
    const pointerFineQuery = window.matchMedia('(pointer: fine)');
    const reduceMotionQuery = window.matchMedia('(prefers-reduced-motion: reduce)');

    const updateCapabilities = () => {
      setParallaxEnabled(pointerFineQuery.matches && !reduceMotionQuery.matches);
      setReduceMotion(reduceMotionQuery.matches);
    };
    updateCapabilities();

    const handleResize = () => setTier(getTier());

    pointerFineQuery.addEventListener('change', updateCapabilities);
    reduceMotionQuery.addEventListener('change', updateCapabilities);
    window.addEventListener('resize', handleResize);

    return () => {
      pointerFineQuery.removeEventListener('change', updateCapabilities);
      reduceMotionQuery.removeEventListener('change', updateCapabilities);
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  useEffect(() => {
    if (!parallaxEnabled) return undefined;

    const handlePointerMove = (event) => {
      pointerRef.current = {
        x: (event.clientX / window.innerWidth) * 2 - 1,
        y: (event.clientY / window.innerHeight) * 2 - 1,
      };
    };

    window.addEventListener('pointermove', handlePointerMove);
    return () => window.removeEventListener('pointermove', handlePointerMove);
  }, [parallaxEnabled]);

  useHeroEntrance({ contentRef, sceneWrapRef, sceneReady, reduceMotion });

  return (
    <section id="hero" className="relative overflow-hidden pt-28 md:pt-32 pb-16 md:pb-24">
      <div aria-hidden="true" className="pointer-events-none absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-b from-blue-50 via-white to-white" />
        <div className="absolute -top-24 -left-24 w-96 h-96 rounded-full bg-blue-200/40 blur-3xl" />
        <Suspense fallback={null}>
          <GridBackground reduceMotion={reduceMotion} />
        </Suspense>
        <div className="absolute top-0 inset-x-0 h-24 md:h-28 bg-gradient-to-b from-white via-white/80 to-transparent" />
      </div>

      <div className="relative max-w-[90rem] mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-8 items-center min-h-[70vh] lg:min-h-[80vh]">
          <div ref={contentRef} className="lg:col-span-5 order-1 text-center lg:text-left lg:pl-10 xl:pl-20 lg:-translate-y-12">
            <HeroContent />
          </div>

          <div className="lg:col-span-7 order-2 relative h-[320px] sm:h-[380px] md:h-[440px] lg:h-[520px] xl:h-[600px]">
            <div aria-hidden="true" className="pointer-events-none absolute -z-10" style={{ inset: '-20%' }}>
              {/* broad, diffuse ambient glow — no hard edge, fades to transparent */}
              <div
                className="absolute inset-0"
                style={{
                  background:
                    'radial-gradient(ellipse at 58% 48%, rgba(147, 197, 253, 0.30) 0%, rgba(191, 219, 254, 0.20) 30%, rgba(219, 234, 254, 0.10) 50%, transparent 72%)',
                  filter: 'blur(35px)',
                }}
              />
              {/* soft blue ambience reflected under the platform */}
              <div
                className="absolute left-1/2 rounded-full"
                style={{
                  bottom: '18%',
                  width: '55%',
                  height: '20%',
                  transform: 'translateX(-50%)',
                  background: 'rgba(96, 165, 250, 0.22)',
                  filter: 'blur(45px)',
                }}
              />
              {/* soft blue-gray contact shadow under the platform */}
              <div
                className="absolute left-1/2 rounded-full"
                style={{
                  bottom: '20%',
                  width: '48%',
                  height: '8%',
                  transform: 'translateX(-50%)',
                  background: 'rgba(100, 116, 139, 0.18)',
                  filter: 'blur(30px)',
                }}
              />
            </div>
            <div ref={sceneWrapRef} className="w-full h-full" style={{ opacity: 0, transform: 'scale(0.95)' }}>
              <Suspense fallback={<HeroCanvasFallback />}>
                <HeroScene
                  pointerRef={pointerRef}
                  parallaxEnabled={parallaxEnabled}
                  reduceMotion={reduceMotion}
                  tier={tier}
                  onReady={() => setSceneReady(true)}
                />
              </Suspense>
            </div>
          </div>
        </div>
      </div>

      <button
        type="button"
        onClick={() => document.getElementById('skills')?.scrollIntoView({ behavior: 'smooth' })}
        aria-label="Scroll down"
        className="absolute bottom-6 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1 text-gray-400 hover:text-blue-600 transition-colors"
      >
        <span className="text-xs">Scroll Down</span>
        <ChevronDown size={20} className="animate-bounce" />
      </button>
    </section>
  );
};

export default Hero;
