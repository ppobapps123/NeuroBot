import Footer3 from "@/components/elements/footer/footer3";
import Header6 from "@/components/elements/header/header6";
import ToolsComponent from "@/components/tools";
import ScrollSmootherComponent from "@/components/tools/scroll-smoother";
import ScrollTop from "@/components/tools/scroll-top";
import { AppContextProvider } from "@/context/app.context";
import navigation from "@/config/navigation.json";

// styles
import "@/style/globals.css";
import "@/style/main.scss";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, maximum-scale=5"
        />
        <meta
          name="format-detection"
          content="telephone=no, date=no, email=no, address=no"
        />
      </head>
      <body suppressHydrationWarning={true} dir="ltr">
        <AppContextProvider>
          <div className="has-smooth" id="has_smooth"></div>
          <div
            className="plus_jakarta_sans-medium root-layout"
            theme-setting="style-6"
          >
            <ScrollSmootherComponent />
            <ScrollTop />
            <ToolsComponent />
            <Header6
              headerNav={navigation.header}
              signUpBtnClassName="border border-transparent hover:border-[#41494D]"
            />

            <div id="smooth-wrapper">
              <div id="smooth-content">
                <div className="max-w-[1920px] overflow-hidden mx-auto bg-[#05111A] ">
                  {children}
                </div>
                <Footer3 footerNav={navigation.footer3} />
              </div>
            </div>
          </div>
        </AppContextProvider>
      </body>
    </html>
  );
}
