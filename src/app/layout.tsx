import Footer3 from "@/components/elements/footer/footer3";
import Header6 from "@/components/elements/header/header6";
import ToolsComponent from "@/components/tools";
import ScrollSmootherComponent from "@/components/tools/scroll-smoother";
import ScrollTop from "@/components/tools/scroll-top";
import { AppContextProvider } from "@/context/app.context";
import navigation from "@/config/navigation.json";
import LottieGenerator from "@/components/extra/LottieGenerator";

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
        <script
          dangerouslySetInnerHTML={{
            __html: `
            window._ow = window._ow || {};
  window.__ow.organizationId = "e59959fd-b9d4-44d7-80e7-5876dcd30cb2";
  window.__ow.template_id = "25196731-6890-4414-9545-c17bed9d907c";
  window.__ow.integration_name = "manual_settings";
  window.__ow.product_name = "chatbot";   
  ;(function(n,t,c){function i(n){return e.h?e._h.apply(null,n):e._q.push(n)}var e={_q:[],_h:null,_v:"2.0",on:function(){i(["on",c.call(arguments)])},once:function(){i(["once",c.call(arguments)])},off:function(){i(["off",c.call(arguments)])},get:function(){if(!e._h)throw new Error("[OpenWidget] You can't use getters before load.");return i(["get",c.call(arguments)])},call:function(){i(["call",c.call(arguments)])},init:function(){var n=t.createElement("script");n.async=!0,n.type="text/javascript",n.src="https://cdn.openwidget.com/openwidget.js",t.head.appendChild(n)}};!n._ow.asyncInit&&e.init(),n.OpenWidget=n.OpenWidget||e}(window,document,[].slice))
          `,
          }}
        />
        <noscript>
          You need to{" "}
          <a
            href="https://www.chatbot.com/help/chat-widget/enable-javascript-in-your-browser/"
            rel="noopener nofollow"
          >
            enable JavaScript
          </a>{" "}
          in order to use the AI chatbot tool powered by{" "}
          <a
            href="https://www.chatbot.com/"
            rel="noopener nofollow"
            target="_blank"
          >
            ChatBot
          </a>
        </noscript>
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
                <div className="overflow-hidden mx-auto bg-[#05111A] relative">
                  <div className="z-10 relative">{children}</div>
                  {/* lottie */}
                  <div className="absolute bottom-[-50px] right-0 -z-[1px]">
                    {/* <LottieGenerator /> */}
                  </div>
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
