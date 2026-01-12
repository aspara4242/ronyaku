import { type FC } from "react";

import Footer from "@/components/common/Footer";
import Navigation from "@/components/common/Navigation";

type RootLayoutProps = {
  children: React.ReactNode;
};

const RootLayout: FC<RootLayoutProps> = (props) => {
  return (
    <div className="flex min-h-screen flex-col">
      <Navigation />
      <main className="mx-auto mt-12 mb-32 w-[90%] max-w-180 md:mt-28">
        {props.children}
      </main>
      <Footer />
    </div>
  );
};

export default RootLayout;
