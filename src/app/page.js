import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import Image from "next/image";

export default function Home() {
  return (
    <main>
      <Navbar />
      <div>
        <img src="/home.jpg" alt="error" className="mx-1" />
      </div>
      <Footer />
    </main>
  );
}
