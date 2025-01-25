"use client";

// gsap
import { useGSAP } from "@gsap/react";
import gsap, { Power1 } from "gsap";
import ScrollTrigger from "gsap/dist/ScrollTrigger";

// lib
import { cn } from "@/lib/utils";
import { markdownify } from "@/lib/helper/convert";
import TitleSection2 from "@/components/shared/title-section/title-section2";
import numberSeparator from "@/lib/numberSeparator";
import { useEffect } from "react";

gsap.registerPlugin(ScrollTrigger);

type Props = {
  counter: {
    number: number;
    unit: string;
    text: string;
  }[];
};

const Child = ({
  unit,
  number,
  text,
  id,
}: {
  unit: string;
  number: number;
  text: string;
  id: string;
}) => {
  useEffect(() => {
    // Formatter untuk angka dengan koma
    const formatter = new Intl.NumberFormat("en-US");

    // Pastikan elemen yang dipilih adalah HTMLDivElement
    const elements = document.getElementById(`${id}`);

    // Animasi GSAP
    if (elements !== null) {
      gsap.fromTo(
      elements,
      { textContent: 0 }, // Nilai awal
      {
        textContent: number, // Nilai akhir
        duration: 1.5, // Durasi animasi
        ease: "power1.in",
        snap: { textContent: 1 }, // Menjaga angka bulat
        scrollTrigger: {
          trigger: ".counter__number",
        },
        onUpdate: function () {
          elements.textContent = formatter.format(Number(elements.textContent));
        },
      }
    );
    }
  }, []);

  return (
    <>
      <p className="mb-[18px]" dangerouslySetInnerHTML={markdownify(text)} />
      <h3 className="text-[20px] leading-none">
        {
          unit &&
          <span className="text-[#24DC87]">{unit}</span>
        }
        <span id={id} className="count text-[#24DC87]">
          {number}
        </span>
      </h3>
    </>
  );
};

const Counter2 = ({ counter }: Props) => {
  return (
    <section>
      {counter && counter.length && (
        <div className="overflow-hidden counter__number z-40 relative px-10">
          <TitleSection2
            title={"Statistics"}
            details={
              "Unparalleled Performance. Unrivalled Results. Experience the NeuroBot Difference."
            }
            titleClassName="max-w-[700px]"
            detailsClassName="max-w-[700px] mb-[20px]"
          />
          <div className="flex justify-center flex-wrap mx-0 md:-mx-[10px] gap-5">
            {counter.map((item, i) => (
              <div
                key={`counter_item-${i}`}
                className={
                  " bg-[#121B21] min-w-[300px] lg:w-fit w-full p-5 rounded-lg"
                }
              >
                <Child
                  text={item.text}
                  number={item.number}
                  unit={item.unit}
                  id={i.toString()}
                />
              </div>
            ))}
          </div>
        </div>
      )}
    </section>
  );
};

export default Counter2;
