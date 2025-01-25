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
      question: "What is NeuroBot AI?",
      answer:
        "NeuroBot AI is a Solana trading bot powered by advanced AI technology, designed for speed, efficiency, and maximizing rewards. It scans on-chain data to identify promising tokens and executes trades with high precision.",
    },
    {
      question: "How does the Referral Program work?",
      answer:
        "The referral program rewards you with 50% of the fees whenever someone you refer makes a trade. It’s a great way to earn passive income.",
    },
    {
      question: "What is the Binary System?",
      answer:
        "The Binary System pairs points and has unlimited levels for massive growth. This means your rewards can increase exponentially as you level up.",
    },
    {
      question: "How can I earn exclusive rewards?",
      answer:
        "As you trade with NeuroBot AI, you'll accumulate points. These points can be redeemed for exclusive rewards, making your trading experience even more valuable.",
    },
    {
      question: "What is AutoSnip Leveling?",
      answer:
        "AutoSnip Leveling is a feature designed to optimize your bot's performance for the lowest Jito tip, ensuring your trades are fast and efficient.",
    },
    {
      question: "Does NeuroBot AI offer protection against malicious bots?",
      answer:
        "Yes! NeuroBot AI is equipped with advanced protection to secure your trades from MEV (Miner Extractable Value) bots, keeping your transactions safe.",
    },
    {
      question: "How do I get started with NeuroBot AI?",
      answer:
        "Simply add to your Telegram, start sniping tokens, and let the AI handle the rest! Begin maximizing your trading edge with NeuroBot AI today.",
    },
    {
      question: "Are there any fees associated with using NeuroBot AI?",
      answer:
        "Yes, there is a minimal fee of 1% on trades made using NeuroBot AI. This fee is the lowest in the industry to maximize your returns.",
    },
  ];

  const containerRef = useRef<HTMLDivElement>(null!);

  useGSAP(
    () => {
      hasFadeAnim();
    },
    { scope: containerRef }
  );

  console.log(items);

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
                        item.answer
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
