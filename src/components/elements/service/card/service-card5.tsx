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
  const { title, short_description, image, color } = service.data;
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
      </div>
    </div>
  );
};

export default ServiceCard5;
