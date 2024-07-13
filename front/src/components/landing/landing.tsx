import Link from "next/link";
import "./landing.css";

const LandingComponent = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <video autoPlay muted loop className="video-background">
        <source src="/music-landing.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <div className="content-container mx-auto max-w-2xl py-10 sm:py-10 text-center">
        <h1 className="text-4xl font-bold tracking-tight text-gray-200 sm:text-6xl poppins-bold">
          Elevate Your Musical Journey
        </h1>
        <p className="mt-6 text-lg leading-8 text-gray-300">
          Discover a world of instruments and accessories that inspire. From
          beginners to professionals, find everything you need to create
          beautiful music. Explore our collection and let your passion resonate.
        </p>
        <div className="mt-10 flex items-center justify-center gap-x-6">
          <Link href="/home">
            <button className="button">Get started</button>
          </Link>
          <Link
            href="/about"
            className="text-sm font-semibold leading-6 text-white"
          >
            Learn more
          </Link>
        </div>
        <div className="mt-10 flex flex-col md:flex-row items-center justify-center gap-6">
          <div className="landingCard" style={{ height: "200px" }}>
            <img
              src="icon/electric-guitar.svg"
              alt=""
              style={{ height: "100px" }}
            />
            <p>Musical Instruments </p>
          </div>
          <div className="landingCard" style={{ height: "200px" }}>
            <img
              src="icon/buffer-icon.svg"
              alt=""
              style={{ height: "100px" }}
            />
            <p>Audio Equipment </p>
          </div>
          <div className="landingCard" style={{ height: "200px" }}>
            <img src="icon/mic-icon.svg" alt="" style={{ height: "100px" }} />
            <p>Microphones</p>
          </div>
        </div>
      </div>
    </div>
  );
};
export default LandingComponent;
