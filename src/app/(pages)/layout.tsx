import { type FC } from "react";

import Footer from "@/components/common/Footer";
import Navigation from "@/components/common/Navigation";

type RootLayoutProps = {
  children: React.ReactNode;
};

const RootLayout: FC<RootLayoutProps> = (props) => {
  return (
    <div className="flex flex-col min-h-screen">
      <Navigation />
      <main className="mx-auto mt-12 mb-32 w-[90%] max-w-180 grow md:mt-28">
        {props.children}
      </main>
      <Footer />
    </div>
  );
};

export default RootLayout;
