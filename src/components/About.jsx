import { useGSAP } from "@gsap/react";
import gsap from "gsap";

import { ScrollTrigger } from "gsap/all";
import AnimatedTitle from "./AnimatedTitle";

gsap.registerPlugin(ScrollTrigger);

const About = () => {

    useGSAP(() => {
        const clipAnimation = gsap.timeline({
          scrollTrigger: {
            trigger: "#clip",
            start: "center center",
            end: "+=800 center",
            scrub: 0.5,
            pin: true,
            pinSpacing: true,
          },
        });
    
        clipAnimation.to(".mask-clip-path", {
          width: "100vw",
          height: "100vh",
          borderRadius: 0,
        });
      });

  return (
    <section id='about' className='min-h-screen w-screen'>
        <div className="relative mb-8 mt-36 flex flex-col items-center gap-5">
            <h2 className="font-general text-sm uppercase md:text-[16px]">Welcome to Gaming Zone</h2>

            <AnimatedTitle title="Disc<b>o</b>ver t<b>h</b>e w<b>o</b>rld&apos;s l<b>a</b>rgest sh<b>a</b>red <b>a</b>d<b>v</b>ent<b>u</b>re" containerClass=" mt-5 !text-black text-center" />

            <div className="about-subtext">
                <p>The Game of Games begins-your life, now an epic MMORPG</p>
                <p>Gaming unites every player from across the globe</p>
            </div>
        </div>
        <div className="h-dvh w-screen" id="clip">
            <div className="mask-clip-path about-image">
                <img src="./img/about.webp" alt="background" className="absolute top-0 left-0 size-full object-cover" />
            </div>

        </div>
    </section>
  )
}

export default About;