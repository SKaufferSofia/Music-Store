import Footer from "@/components/footer/Footer";
import LandingComponent from "@/components/landing/landing";

export function Landing() {
  return (
    <div>
      <LandingComponent />
      <div className="relative z-10">
        <Footer />
      </div>
    </div>
  );
}

export default Landing;
