import { Outlet, useNavigate } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";
import ScrollToTopButton from "../components/ScrollToTopButton";

export default function Layout() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen flex flex-col w-full bg-bg-soft dark:bg-[#0B1120] transition-colors duration-300">
      <Header />
      <main className="flex-grow w-full">
        <Outlet />
      </main>
      <div className="">
        <Footer />
      </div>
      <ScrollToTopButton />
    </div>
  );
}
