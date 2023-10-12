import { RefObject, useEffect, useState } from "react";

const usePointTracker = (ref: RefObject<HTMLElement>) => {
  const [points, setPoints] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handlePointerMove = ({ clientX, clientY }: MouseEvent) => {
      const element = ref.current!;

      const x = clientX - element.offsetLeft - element.offsetWidth / 2;
      const y = clientY - element.offsetTop - element.offsetHeight / 2;
      setPoints({ x, y });
    };

    window.addEventListener("pointermove", handlePointerMove);

    return () => window.removeEventListener("pointermove", handlePointerMove);
  }, []);

  return points;
};

export default usePointTracker;
