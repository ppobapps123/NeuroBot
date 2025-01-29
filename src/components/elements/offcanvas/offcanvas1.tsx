"use client";
import React from "react";
import Link from "next/link";

// icons
import { FaBars } from "react-icons/fa6";

// lib
import { cn } from "@/lib/utils";

// types
import { MenuDataType } from "@/types";

// shadcn components
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerTrigger,
} from "@/components/ui/drawer";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { scroller } from "react-scroll";

type Props = {
  headerNav: MenuDataType;
  actionBtnClassName?: string;
};

const Offcanvas1 = ({ headerNav, actionBtnClassName }: Props) => {
  const [isOpen, setIsOpen] = React.useState(false);

  return (
    <Drawer
      dismissible={false}
      open={isOpen}
      onOpenChange={setIsOpen}
      disablePreventScroll={true}
      direction="left"
    >
      <DrawerTrigger asChild>
        <button>
          <FaBars className={cn("w-8 h-8", actionBtnClassName)} />
        </button>
      </DrawerTrigger>
      <DrawerContent className="bg-primary flex flex-col justify-between items-start border-none rounded-none p-[30px] overflow-hidden top-0 mt-0 w-full md:w-1/2 z-[999]">
        <div>
          <button
            onClick={() => {
              setIsOpen(false);
            }}
            className="relative w-[30px] md:w-[50px] h-[30px] min-h-[30px] md:h-[50px] md:min-h-[50px] rounded-full bg-primary border border-[#333337]"
          >
            <span className="w-3 md:w-[22px] h-[1px] inline-block bg-white absolute left-[50%] top-[50%] -translate-x-[50%] rotate-45"></span>
            <span className="w-3 md:w-[22px] h-[1px] inline-block bg-white absolute left-[50%] top-[50%] -translate-x-[50%] -rotate-45"></span>
          </button>
          {headerNav && headerNav.length && (
            <nav className="mt-[30px] mb-[40px] overflow-y-scroll">
              {headerNav.map((item, i) => (
                <React.Fragment key={`offcanvas_nav-${i}`}>
                  {item.hasChildren ? (
                    <Accordion
                      type="single"
                      collapsible
                      className="w-full"
                    ></Accordion>
                  ) : (
                    <div
                      onClick={() => {
                        setIsOpen(false);
                        if (item.path.includes("#")) {
                          scroller.scrollTo(
                            `${item.path.split("#").join("")}`,
                            {
                              duration: 300,
                              smooth: true,
                            }
                          );
                        } else {
                          window.open(item.path, "_blank");
                        }
                      }}
                      className="cursor-pointer py-[15px] text-[#999999] text-[18px] font-medium border-b last:border-b-0 border-[#31313160] block"
                    >
                      {item.name}
                    </div>
                  )}
                </React.Fragment>
              ))}
            </nav>
          )}
        </div>

        {/* sosmed */}
        <div>
          <p className="mb-5 font-semibold">Follow Us</p>
          <ul className="flex gap-[24px]">
            {[
              {
                icon: (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 496 512"
                    className="w-8 h-8 text-white fill-white hover:fill-[#c8c8c8]"
                  >
                    <path d="M248 8C111 8 0 119 0 256S111 504 248 504 496 393 496 256 385 8 248 8zM363 176.7c-3.7 39.2-19.9 134.4-28.1 178.3-3.5 18.6-10.3 24.8-16.9 25.4-14.4 1.3-25.3-9.5-39.3-18.7-21.8-14.3-34.2-23.2-55.3-37.2-24.5-16.1-8.6-25 5.3-39.5 3.7-3.8 67.1-61.5 68.3-66.7 .2-.7 .3-3.1-1.2-4.4s-3.6-.8-5.1-.5q-3.3 .7-104.6 69.1-14.8 10.2-26.9 9.9c-8.9-.2-25.9-5-38.6-9.1-15.5-5-27.9-7.7-26.8-16.3q.8-6.7 18.5-13.7 108.4-47.2 144.6-62.3c68.9-28.6 83.2-33.6 92.5-33.8 2.1 0 6.6 .5 9.6 2.9a10.5 10.5 0 0 1 3.5 6.7A43.8 43.8 0 0 1 363 176.7z" />
                  </svg>
                ),
                url: "https://t.me/neurobotai",
              },
              {
                icon: (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 448 512"
                    className="w-8 h-8 text-white fill-white hover:fill-[#c8c8c8]"
                  >
                    <path d="M64 32C28.7 32 0 60.7 0 96V416c0 35.3 28.7 64 64 64H384c35.3 0 64-28.7 64-64V96c0-35.3-28.7-64-64-64H64zm297.1 84L257.3 234.6 379.4 396H283.8L209 298.1 123.3 396H75.8l111-126.9L69.7 116h98l67.7 89.5L313.6 116h47.5zM323.3 367.6L153.4 142.9H125.1L296.9 367.6h26.3z" />
                  </svg>
                ),
                url: "https://x.com/NeuroTradingBot",
              },
              {
                icon: (
                  <svg
                    viewBox="0 0 24 24"
                    className="w-8 h-8 text-white fill-white hover:fill-[#c8c8c8]"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M12.513 1.097c-.645 0-1.233.34-2.407 1.017L3.675 5.82A7.233 7.233 0 0 0 0 12.063v.236a7.233 7.233 0 0 0 3.667 6.238L7.69 20.86c2.354 1.36 3.531 2.042 4.824 2.042 1.292.001 2.47-.678 4.825-2.038l4.251-2.453c1.177-.68 1.764-1.02 2.087-1.579.323-.56.324-1.24.323-2.6v-2.63a1.04 1.04 0 0 0-1.558-.903l-8.728 5.024c-.587.337-.88.507-1.201.507-.323 0-.616-.168-1.204-.506l-5.904-3.393c-.297-.171-.446-.256-.565-.271a.603.603 0 0 0-.634.368c-.045.111-.045.282-.043.625.002.252 0 .378.025.494.053.259.189.493.387.667.089.077.198.14.416.266l6.315 3.65c.589.34.884.51 1.207.51.324 0 .617-.17 1.206-.509l7.74-4.469c.202-.116.302-.172.377-.13.075.044.075.16.075.392v1.193c0 .34.001.51-.08.649-.08.14-.227.224-.522.394l-6.382 3.685c-1.178.68-1.767 1.02-2.413 1.02-.646 0-1.236-.34-2.412-1.022l-5.97-3.452-.043-.025a4.106 4.106 0 0 1-2.031-3.52V11.7c0-.801.427-1.541 1.12-1.944a1.979 1.979 0 0 1 1.982-.001l4.946 2.858c1.174.679 1.762 1.019 2.407 1.02.645 0 1.233-.34 2.41-1.017l7.482-4.306a1.091 1.091 0 0 0 0-1.891L14.92 2.11c-1.175-.675-1.762-1.013-2.406-1.013Z"></path>
                  </svg>
                ),
                url: "https://docs.neuroaibot.io/",
              },
              {
                icon: (
                  <svg
                    role="img"
                    className="w-8 h-8 text-white fill-white hover:fill-[#c8c8c8] mt-1"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M0 0v24h24V0H0zm19.938 5.686L18.651 6.92a.376.376 0 0 0-.143.362v9.067a.376.376 0 0 0 .143.361l1.257 1.234v.271h-6.322v-.27l1.302-1.265c.128-.128.128-.165.128-.36V8.99l-3.62 9.195h-.49L6.69 8.99v6.163a.85.85 0 0 0 .233.707l1.694 2.054v.271H3.815v-.27L5.51 15.86a.82.82 0 0 0 .218-.707V8.027a.624.624 0 0 0-.203-.527L4.019 5.686v-.27h4.674l3.613 7.923 3.176-7.924h4.456v.271z" />
                  </svg>
                ),
              },
            ].map((item, i) => (
              <a
                href={item.url}
                target="_blank"
                key={`social_share-${i}`}
                className="leading-none text-secondary cursor-pointer"
              >
                {item.icon}
              </a>
            ))}
          </ul>
        </div>
      </DrawerContent>
    </Drawer>
  );
};

export default Offcanvas1;
