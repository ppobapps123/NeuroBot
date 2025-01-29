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
          <FaBars className={cn("w-6 h-6", actionBtnClassName)} />
        </button>
      </DrawerTrigger>
      <DrawerContent className="bg-primary rounded-none p-[30px] overflow-hidden top-0 mt-0 w-full md:w-1/2 z-[999]">
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
                  <Accordion type="single" collapsible className="w-full">
                    {/* <AccordionItem value={`item-${i}`} className="border-b-0">
                      <AccordionTrigger className="cursor-pointer py-[15px] text-[#999999] text-[14px] font-medium border-b border-[#31313160] hover:no-underline [&[data-state=open]]:text-[#D9D9D9]">
                        {item.name}
                      </AccordionTrigger>
                      <AccordionContent className="ml-[15px]">
                        {item.children &&
                          item.children.length &&
                          item.children.map((child, j) => (
                            <DrawerClose asChild key={`nav_child-${i}${j}`}>
                              <div
                                onClick={() => {
                                  console.log(child.path)
                                  if (child.path.includes("#")) {
                                    scroller.scrollTo(
                                      `${child.path.split("#").join("")}`,
                                      {
                                        duration: 300,
                                        smooth: true,
                                      }
                                    );
                                  } else {
                                    window.open(child.path, "_blank");
                                  }
                                }}
                                className="cursor-pointer py-[15px] text-[#D9D9D9] text-[14px] font-medium border-b last:border-b-0 border-[#31313160] block"
                              >
                                {child.name}
                              </div>
                            </DrawerClose>
                          ))}
                      </AccordionContent>
                    </AccordionItem> */}
                  </Accordion>
                ) : (
                  <div
                    onClick={() => {
                      setIsOpen(false);
                      if (item.path.includes("#")) {
                        scroller.scrollTo(`${item.path.split("#").join("")}`, {
                          duration: 300,
                          smooth: true,
                        });
                      } else {
                        window.open(item.path, "_blank");
                      }
                    }}
                    className="cursor-pointer py-[15px] text-[#999999] text-[14px] font-medium border-b last:border-b-0 border-[#31313160] block"
                  >
                    {item.name}
                  </div>
                )}
              </React.Fragment>
            ))}
          </nav>
        )}
      </DrawerContent>
    </Drawer>
  );
};

export default Offcanvas1;
