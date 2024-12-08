import { useRef } from "react";
import AnimatedTitle from "./AnimatedTitle";
import gsap from "gsap";
import RoundedCorners from "./RoundedCorners";
import Button from "./Button";

const Story = () => {
  const frameRef = useRef(null);

  const handleMouseLeave = () => {
    const element = frameRef.current;

    gsap.to(element, {
      duration: 0.3,
      rotationX: 0,
      rotationY: 0,
      ease: "power1.inOut",
    });
  };

  const handleMouseMove = (event) => {
    const { clientX, clientY } = event;
    const element = frameRef.current;

    if (!element) return;

    const rectangle = element.getBoundingClientRect();
    const x = clientX - rectangle.left;
    const y = clientY - rectangle.top;

    const centerX = rectangle.width / 2;
    const centerY = rectangle.height / 2;
    const rotateX = ((y - centerY) / centerY) * -10;
    const rotateY = ((x - centerX) / centerX) * 10;

    gsap.to(element, {
      duration: 0.3,
      rotationX: rotateX,
      rotationY: rotateY,
      transformPerspective: 500,
      ease: "power1.inOut",
    });
  };

  return (
    <section id="story" className="min-h-dvh w-screen bg-black text-blue-50">
      <div className=" flex flex-col size-full items-center py-10 pb-24 gap-5">
        <p className="font-general text-sm uppercase md:text-[16px]">
          the multiversal ip world
        </p>

        <div className="relative size-full">
          <AnimatedTitle
            title="T<b>h</b>e St<b>o</b>r<b>y</b> <b>o</b>f <b>a</b> hi<b>d</b>de<b>n</b> re<b>a</b>l<b>m</b>"
            sectionId="#story"
            containerClass="mt-5 !text-white pointer-events-none mix-blend-difference relative z-10"
          />

          <div className="story-img-container">
            <div className="story-img-mask">
              <div className="story-img-content cursor-pointer">
                <img
                  ref={frameRef}
                  onMouseLeave={handleMouseLeave}
                  onMouseUp={handleMouseLeave}
                  onMouseEnter={handleMouseLeave}
                  onMouseMove={handleMouseMove}
                  src="./img/entrance.webp"
                  alt="entrance"
                  className="object-contain"
                />
              </div>
            </div>

            <RoundedCorners />
          </div>
        </div>

        <div className="-mt-80 flex w-full justify-center md:-mt-64 md:me-44 md:justify-end">
          <div className="flex h-full w-fit flex-col items-center md:items-start">
            <p className="mt-3 max-w-sm text-center font-circular-web text-violet-50 md:text-start px-3 md:px-0">
              The story of the Gaming world is a tale of innovation and ambition, where the future is shaped
              by the present.
            </p>
            <Button id="realm-button" title="discover prologue" containerClass="mt-5 bg-violet-50" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Story;
