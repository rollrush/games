import Benefits from "./Benefits";

import Heading from "./Heading";
import Section from "./Section";
import { BackgroundCircles, BottomLine, Gradient } from "./design/Hero";
import { useRef } from "react";

const Hero = () => {
  const parallaxRef = useRef(null);

  return (
    <Section
      className="pt-[12rem] -mt-[5.25rem] overflow-y-hidden "
      crosses
      crossesOffset="lg:translate-y-[5.25rem]"
      customPaddings
      id="hero"
    >
      <div className="container relative" ref={parallaxRef}>
        {/* <div className="relative z-1 max-w-[62rem] mx-auto text-center mb-[3.2rem] md:mb-1 lg:mb-[2 rem]">
          <h1 className="h1 mb-4">
            Playfulness&nbsp;Is&nbsp;{` `}
            <span className="inline-block relative">
              Decentralized{" "}
              <img
                src={curve}
                className="absolute top-full left-0 w-full xl:-mt-2"
                width={624}
                height={28}
                alt="Curve"
              />
            </span>
          </h1>
        </div> */}
        <Heading
          className="md:max-w-md lg:max-w-2xl"
          title="Level Up Your Gaming with Rollrush"
        />
        <div className="relative max-w-[23rem] mx-auto md:max-w-5xl xl:mb-24">
          <Gradient />

          <BackgroundCircles parallaxRef={parallaxRef} />
        </div>

        {/* <CompanyLogos className="hidden relative z-10 mt-20 lg:block" /> */}
      </div>

      <Benefits />
      {/* </ScrollParallax> */}
      <BottomLine />
    </Section>
  );
};

export default Hero;
