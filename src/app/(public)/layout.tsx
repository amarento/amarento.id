import Footer from "../_components/footer";
import Navbar from "../_components/navbar";

export default function PublicLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <section className="absolute font-lora">
      <Navbar />
      {children}
      {/* <Footer /> */}
    </section>
  );
}
