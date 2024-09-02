import { BackgroundCircles} from "./design/Hero";
import { ScrollParallax } from "react-just-parallax";
const Hero = () => {
  const parallaxRef = useRef(null);

  return (
    <Section
      className="pt-[12rem] -mt-[5.25rem]"
      crosses
      crossesOffset="lg:translate-y-[5.25rem]"
      customPaddings
      id="hero"
    >
      <div className="container relative" ref={parallaxRef}>
        
        <div className="relative max-w-[23rem] mx-auto md:max-w-5xl xl:mb-24">
          <div className="relative z-1 p-0.5 rounded-2xl bg-conic-gradient">
            
          </div>

          
        </div>
      </div>
      <BackgroundCircles />
      <BottomLine />
    </Section>
  );
};

export default Hero;
