import Footer from "../_components/footer";
import Navbar from "../_components/navbar";

export default function PublicLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <section className="mx-5 mt-16 flex flex-col justify-center bg-black-default bg-white-default text-center font-lora text-black-default sm:py-20 md:mx-10 lg:mx-16 xl:mx-20">
      <Navbar />
      {children}
      <Footer />
    </section>
  );
}
