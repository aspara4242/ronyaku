import { type FC } from "react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

type RootLayoutProps = {
  children: React.ReactNode;
};

const RootLayout: FC<RootLayoutProps> = (props) => {
  return (
    <div>
      <Navigation />
      <main className="mx-auto mt-12 mb-32 w-[90%] max-w-180 md:mt-28">
        {props.children}
      </main>
      <Footer />
    </div>
  );
};

export default RootLayout;
