import { useEffect, useRef } from "react";
import Typed from "typed.js";

const Typewriter = () => {
  const typedElement = useRef(null);

  useEffect(() => {
    const typed = new Typed(typedElement.current, {
      strings: ["<b>Powerfull</b> Terminal", "Web Terminal", "raflyAsliGalek"],
      typeSpeed: 100,
      backSpeed: 100,
      fadeOut: true,
      loop: true,
    });

    return () => {
      typed.destroy();
    };
  }, []);

  return (
    <div className="flex justify-center items-center h-20 w-full text-center text-green-400 font-mono text-lg">
      <span ref={typedElement}></span>
    </div>
  );
};

export default Typewriter;
