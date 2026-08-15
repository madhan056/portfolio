import { useEffect, useRef, useState } from "react";
import { motion, useMotionValue, useReducedMotion, useSpring, useTransform } from "framer-motion";

const CustomCursor = () => {
  const [isHovering, setIsHovering] = useState(false);
  const [enabled, setEnabled] = useState(false);
  const prefersReducedMotion = useReducedMotion();

  // Raw pointer position, updated outside React state so mousemove never
  // triggers a component re-render (previously every pixel of movement
  // caused a full re-render of both cursor rings via setState).
  // Framer Motion's `style={{ x, y }}` builds its own `transform`, which
  // replaces (rather than composes with) the Tailwind -translate-1/2
  // utility classes below — so the half-width/height centering offset has
  // to be baked into the motion values themselves, same as upstream did
  // via `animate={{ x: mousePosition.x - 6, ... }}`.
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const dotXRaw = useSpring(x, { stiffness: 1000, damping: 28, mass: 0.1 });
  const dotYRaw = useSpring(y, { stiffness: 1000, damping: 28, mass: 0.1 });
  const ringXRaw = useSpring(x, { stiffness: 400, damping: 28, mass: 0.2 });
  const ringYRaw = useSpring(y, { stiffness: 400, damping: 28, mass: 0.2 });
  const dotX = useTransform(dotXRaw, (v) => v - 6);
  const dotY = useTransform(dotYRaw, (v) => v - 6);
  const ringX = useTransform(ringXRaw, (v) => v - 20);
  const ringY = useTransform(ringYRaw, (v) => v - 20);

  const styleRef = useRef<HTMLStyleElement | null>(null);

  useEffect(() => {
    // Skip the custom cursor entirely for touch/coarse-pointer devices and
    // whenever the user has asked the OS for reduced motion.
    const isFinePointer = window.matchMedia("(pointer: fine)").matches;
    if (!isFinePointer || prefersReducedMotion) {
      setEnabled(false);
      return;
    }
    setEnabled(true);

    const mouseMove = (e: MouseEvent) => {
      x.set(e.clientX);
      y.set(e.clientY);
    };

    const mouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      setIsHovering(Boolean(target.closest("a") || target.closest("button")));
    };

    document.body.style.cursor = "none";
    const style = document.createElement("style");
    style.appendChild(document.createTextNode(`a, button, [role="button"] { cursor: none !important; }`));
    document.head.appendChild(style);
    styleRef.current = style;

    window.addEventListener("mousemove", mouseMove);
    window.addEventListener("mouseover", mouseOver);

    return () => {
      window.removeEventListener("mousemove", mouseMove);
      window.removeEventListener("mouseover", mouseOver);
      document.body.style.cursor = "auto";
      styleRef.current?.remove();
    };
  }, [prefersReducedMotion, x, y]);

  if (!enabled) return null;

  return (
    <>
      <motion.div
        className="fixed top-0 left-0 w-3 h-3 rounded-full bg-primary pointer-events-none z-[9999] mix-blend-screen hidden md:block"
        style={{ x: dotX, y: dotY }}
        animate={{ scale: isHovering ? 0.5 : 1 }}
        transition={{ type: "spring", stiffness: 1000, damping: 28, mass: 0.1 }}
      />
      <motion.div
        className="fixed top-0 left-0 w-10 h-10 rounded-full border border-primary pointer-events-none z-[9998] hidden md:block"
        style={{ x: ringX, y: ringY }}
        animate={{
          scale: isHovering ? 1.5 : 1,
          backgroundColor: isHovering ? "rgba(16, 185, 129, 0.1)" : "rgba(16, 185, 129, 0)",
          borderColor: isHovering ? "rgba(16, 185, 129, 0.5)" : "rgba(16, 185, 129, 0.8)",
        }}
        transition={{ type: "spring", stiffness: 400, damping: 28, mass: 0.2 }}
      />
    </>
  );
};

export default CustomCursor;
