"use client";

import { useRef } from "react";

// gsap
import { useGSAP } from "@gsap/react";
import hasFadeAnim from "@/lib/animation/hasFadeAnim";

// shadcn components
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

// components
import TitleSection2 from "@/components/shared/title-section/title-section2";
import TitleSection1 from "@/components/shared/title-section/title-section1";

type Props = {
  faq: {
    data: {
      title: string;
      details: string;
      items: {
        question: string;
        answer: string | any;
      }[];
    };
    content: string;
  };
};

const MainFAQ = ({ faq }: Props) => {
  const { title, details } = faq.data;

  const items = [
    {
      question: "What is NeuroBot?",
      extra: "",
      answer:
        "NeuroBot is an advanced Solana trading bot designed to simplify token trading with features like auto-sniping, notifications, and customizable filters.",
    },
    {
      question: "How does the Auto Sniper feature work?",
      extra: "",
      answer:
        "The Auto Sniper automatically schedules token purchases as soon as new tokens are launched, giving you a competitive edge in trading.",
    },
    {
      question: "Is NeuroBot compatible with all wallets?",
      extra: "",
      answer:
        "Yes, NeuroBot supports most Solana-based wallets. You can set your default wallet for a seamless trading experience.",
    },
    {
      question: "What are Filters and Filter Condition Types?",
      extra:
        "AND: Only matches tokens that meet all the enabled criteria.| OR: Matches tokens that meet at least one enabled criterion.",
      answer:
        "Filters allow you to customize the tokens you want notifications for. The Filter Condition Type lets you choose between:",
    },
    {
      question: "Does NeuroBot support multiple Solana-based DEXs?",
      extra: "",
      answer:
        "Yes, NeuroBot integrates with major Solana DEXs like Raydium, Orca, and Jupiter to provide flexibility in token trading.",
    },
    {
      question: "Are there any subscription fees?",
      extra: "",
      answer:
        "NeuroBot operates on a one-time payment model. No recurring subscription fees are required.",
    },
    {
      question: "Can I test my strategies before trading?",
      extra: "",
      answer:
        "Absolutely! NeuroBot includes a backtesting feature, allowing you to test your strategies on historical data before live trading.",
    },
    {
      question: "What happens if I miss a notification?",
      extra: "",
      answer:
        "All missed notifications are logged in your dashboard, so you can review them anytime and take action accordingly.",
    },
  ];

  const containerRef = useRef<HTMLDivElement>(null!);

  useGSAP(
    () => {
      hasFadeAnim();
    },
    { scope: containerRef }
  );

  return (
    <section className="pt-[5px] md:pt-[35px] xl:pt-[65px] 2xl:pt-[135px] mt-10">
      <div className="container" ref={containerRef}>
        <div className="max-w-[1070px] mx-auto">
          <div>
            <TitleSection2
              title={title}
              details={details}
              titleClassName="max-w-[700px]"
              detailsClassName="max-w-[700px] mb-[20px]"
            />
          </div>
          <div className="mt-[33px] md:mt-[43px] 2xl:mt-[63px]">
            {items && items.length && (
              <Accordion
                type="single"
                collapsible
                className="w-full has_fade_anim"
                data-delay="0.45"
                defaultValue="item-2"
              >
                {items.map((item, i) => (
                  <AccordionItem
                    key={`accordion_item-${i}`}
                    value={`item-${i + 1}`}
                    className="border-b-0 mb-[7px] rounded-theme overflow-hidden"
                  >
                    <AccordionTrigger className="bg-[#121B21] text-xl leading-tight text-primary shadow-none text-start font-semibold pt-[21px] lg:pt-[25px] pb-[15px] lg:pb-5 px-[25px] md:px-[30px] hover:no-underline">
                      {item.question}
                    </AccordionTrigger>
                    <AccordionContent className="bg-[#121B21] text-lg leading-[1.44] text-secondary pt-0 pb-[23px] lg:pb-6 px-[25px] md:px-[30px]">
                      {typeof item.answer === "object" ? (
                        <p>hello</p>
                      ) : (
                        <>
                          {item.answer}

                          {item.extra !== "" && (
                            <ul className="list-disc ml-5">
                              <li>
                                <p className="mt-3 text-sm group-hover:text-white">
                                  <span></span>
                                  <span className="font-bold text-white">
                                    {item.extra.split("|")[0].split(":")[0]}
                                  </span>
                                  :{item.extra.split("|")[0].split(":")[1]}
                                </p>
                              </li>
                              <li>
                                <p className="mt-3 text-sm group-hover:text-white">
                                  <span className="font-bold text-white">
                                    {item.extra.split("|")[1].split(":")[0]}
                                  </span>
                                  :{item.extra.split("|")[1].split(":")[1]}
                                </p>
                              </li>
                            </ul>
                          )}
                        </>
                      )}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default MainFAQ;
