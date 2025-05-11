import { useRef, useEffect, useState, ReactNode } from "react";
import { useSpring, animated, SpringConfig } from "@react-spring/web";

interface AnimatedContentProps {
  children: ReactNode;
  distance?: number;
  direction?: "vertical" | "horizontal";
  reverse?: boolean;
  config?: SpringConfig;
  initialOpacity?: number;
  animateOpacity?: boolean;
  scale?: number;
  threshold?: number;
  delay?: number;
}

const AnimatedContent: React.FC<AnimatedContentProps> = ({ children, distance = 100, direction = "vertical", reverse = false, config = { tension: 50, friction: 25 }, initialOpacity = 0, animateOpacity = true, scale = 1, threshold = 0.1, delay = 0 }) => {
  const [inView, setInView] = useState(false);
  const ref = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        setTimeout(() => {
          setInView(entry.isIntersecting); // liên tục cập nhật vào/ra
        }, delay);
      },
      { threshold }
    );

    observer.observe(element);
    return () => observer.disconnect();
  }, [threshold, delay]);

  const directions: Record<"vertical" | "horizontal", string> = {
    vertical: "Y",
    horizontal: "X",
  };

  const springProps = useSpring({
    transform: `translate${directions[direction]}(${inView ? "0px" : reverse ? `-${distance}px` : `${distance}px`}) scale(${inView ? 1 : scale})`,
    opacity: animateOpacity ? (inView ? 1 : initialOpacity) : 1,
    config,
  });

  return (
    //@ts-ignore
    <animated.div ref={ref} style={springProps}>
      {children}
    </animated.div>
  );
};

export default AnimatedContent;
