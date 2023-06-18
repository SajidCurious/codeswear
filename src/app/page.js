import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import Image from "next/image";

export default function Home() {
  return (
    <main>
      <Navbar />
      <div>
        <img src="/home.jpg" alt="" />
      </div>
      <Footer />
    </main>
  );
}
