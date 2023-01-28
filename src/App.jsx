import R from "react";
import ForEveryoneHeader from "./Pages/ForEveryone/ForEveryoneHeader";
import ForEveryoneFooter from "./Pages/ForEveryone/ForEveryoneFooter";
import Header from "./Pages/Header/Header";
import Benefit from "./Pages/Benefit/Benefit";
import Price from "./Pages/Price/Price";
import Writer from "./Pages/Writer/Writer";
import Testimonials from "./Pages/Testimonials/Testimonials";
import BuyBook from "./Pages/BuyBook/BuyBook";
import Footer from "./Pages/Footer/Footer";
import Arrow from "./assets/svg/Benefit/right-arrow.svg";

export default function App() {
  const [scrolled, setScrolled] = R.useState(0);
  const scrollMaxY =
    document.documentElement.scrollHeight -
    document.documentElement.clientHeight;

  R.useEffect(() => {
    window.addEventListener("scroll", () => {
      setScrolled((window.scrollY / scrollMaxY) * 100);
    });

    return () =>
      window.removeEventListener("scroll", () => {
        setScrolled((window.scrollY / scrollMaxY) * 100);
      });
  }, []);

  return (
    <main className=" font-DM overflow-x-hidden text-dark">
      {scrolled >= 5 && (
        <a
          href="#"
          className="min-w-[50px] min-h-[50px] bg-dark-muted hover:bg-primary/30 active:bg-dark-muted  rounded-full duration-300 flex items-center justify-center fixed z-30 right-10 bottom-10"
        >
          <img
            src={Arrow}
            alt="->"
            className="w-[30px] h-[30px] transform -rotate-90"
          />
        </a>
      )}
      <Header />
      <ForEveryoneHeader />
      <ForEveryoneFooter />
      <Benefit />
      <Price />
      <Writer />
      <Testimonials />
      <BuyBook />
      <Footer />
    </main>
  );
}
