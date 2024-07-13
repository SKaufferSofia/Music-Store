import Footer from "@/components/footer/Footer";
import RegisterForm from "@/components/forms/register/Register";

const Register = () => {
  return (
    <div className="flex items-center justify-center flex-col">
      <div className="absolute inset-0 z-0">
        <img
          src="/fondo-login-register.avif"
          alt=""
          className="max-h-screen w-screen object-cover bg-black opacity-50"
          style={{
            filter: "grayscale(70%)",
          }}
        />
      </div>
      <RegisterForm />
      <div style={{ marginTop: "100px" }}>
        <Footer />
      </div>
    </div>
  );
};

export default Register;
