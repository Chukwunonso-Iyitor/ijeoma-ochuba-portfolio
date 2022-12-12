import styled from "@emotion/styled";
import Link from "next/link";
import Image from "next/image";

const Hero = styled.section`
  height: 580px;
  background-image: url("/images/dots.svg");
  background-size: 20%;
  background-repeat: repeat;
  .introduction {
    h1 {
      font-weight: 700;
    }
    p {
      font-size: 22px;
    }
  }
  .hero-image {
    object-fit: cover;
    mix-blend-mode: multiply;
  }
`;
const HeroBanner = () => {
  const caseStudies = () => {
    document
      .getElementById("case-studies")
      .scrollIntoView({ behavior: "smooth" });
  };
  return (
    <Hero className="py-5 d-flex align-items-center">
      <div className="container">
        <div className="row">
          <div className="col introduction pe-5 mt-5">
            <h1>
              <em className="me-3">Hello! 👋</em> I&apos;m Ijeoma{" "}
            </h1>
            <p className="text-grey mt-4">
              I am a driven and thorough UX designer who thoroughly enjoys
              engaging in all steps of the product life cycle. My main goal is
              to create products that look beautiful and function intuitively
              for the user.
            </p>
            <div className="mt-5">
              <Link href="/contact" className="btn-grey me-2">
                Hire me
              </Link>
              <button
                type="button"
                className="btn-grey-alt"
                onClick={caseStudies}
              >
                See work
              </button>
            </div>
          </div>
          <div className="col d-flex justify-content-center">
            <Image
              src="/images/ux-hero.svg"
              alt="UX design models"
              width={600}
              height={400}
              className="hero-image"
            />
          </div>
        </div>
      </div>
    </Hero>
  );
};

export default HeroBanner;
