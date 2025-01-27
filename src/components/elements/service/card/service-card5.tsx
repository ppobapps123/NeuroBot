import Image from "next/image";
import Link from "next/link";

// icons
import { FaArrowRight } from "react-icons/fa6";

// lib
import { cn } from "@/lib/utils";
import { markdownify } from "@/lib/helper/convert";
import { ServiceDetailsType } from "@/types";

// shadcn components
import { buttonVariants } from "@/components/ui/button";

type Props = {
  service: {
    data: ServiceDetailsType;
  };
};

const ServiceCard5 = ({ service }: Props) => {
  const { title, short_description, image, color, extra } = service.data;
  return (
    <div className="px-[30px] xl:px-[60px] text-center">
      <div
        className={`flex justify-center ${color} w-fit m-auto p-3 rounded-lg`}
      >
        {image && (
          <Image width={25} height={25} src={image} alt="feature icon" />
        )}
      </div>
      <div className="mt-[30px] xl:mt-[40px]">
        <h3
          className="text-[22px] xl:text-[24px] leading-tight xl:leading-[1.45]"
          dangerouslySetInnerHTML={markdownify(title)}
        />

        <p className="mt-[25px] group-hover:text-white">{short_description}</p>

        {extra !== "" && (
          <>
            <p className="mt-3 text-sm group-hover:text-white">
              <span className="text-[#24DC87] group-hover:text-[#05111A]">❝ </span>
              <span className="font-bold text-white">
                {extra.split("|")[0].split(":")[0]}
              </span>
              :{extra.split("|")[0].split(":")[1]}
              <span className="text-[#24DC87] group-hover:text-[#05111A]"> ❞</span>
            </p>
            <p className="mt-3 text-sm group-hover:text-white">
              <span className="text-[#24DC87] group-hover:text-[#05111A]">❝ </span>
              <span className="font-bold text-white">
                {extra.split("|")[1].split(":")[0]}
              </span>
              :{extra.split("|")[1].split(":")[1]}
              <span className="text-[#24DC87] group-hover:text-[#05111A]"> ❞</span>
            </p>
          </>
        )}
      </div>
    </div>
  );
};

export default ServiceCard5;
