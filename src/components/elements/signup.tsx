"use client";

import Image from "next/image";
import Link from "next/link";

// form
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";

// lib
import { cn } from "@/lib/utils";

// shadcn components
import { Dialog, DialogContent, DialogHeader } from "../ui/dialog";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "../ui/form";
import { Input } from "../ui/input";
import { Button } from "../ui/button";
import { Checkbox } from "../ui/checkbox";
import { ScrollArea } from "../ui/scroll-area";

type Props = {
  isOpen: boolean;
  close: () => void;
  open: () => void;
};

const formSchema = z
  .object({
    email: z
      .string()
      .min(1, { message: "This field has to be filled." })
      .email("This is not a valid email."),
    name: z.string().min(2, {
      message: "Username must be at least 2 characters.",
    }),
    username: z.string().min(2, {
      message: "Username must be at least 2 characters.",
    }),
    password: z
      .string()
      .min(8, { message: "Password must be minimum 8 character" }),
    confirm_password: z
      .string()
      .min(8, { message: "Password must be minimum 8 character" }),
    agree: z.boolean().default(false).optional(),
  })
  .refine(
    (data) => {
      return data.password === data.confirm_password;
    },
    {
      message: "Password do not match",
    }
  );

const Signup = ({ isOpen, close, open }: Props) => {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
      name: "",
      username: "",
      password: "",
      confirm_password: "",
      agree: false,
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    console.log(values);
    close();
  }

  return (
    <Dialog onOpenChange={close} open={isOpen} modal>
      <DialogContent
        onEscapeKeyDown={(e) => e.preventDefault()}
        onInteractOutside={(e) => e.preventDefault()}
        className="px-[5px] md:px-[25px] pb-[60px] md:pb-[80px] pt-[50px] md:pt-[70px] max-w-[calc(100%-20px)] md:max-w-[550px] max-h-[90vh] border-[0px] !rounded-[30px] bg-white z-[999] [&>button]:border [&>button]:border-border [&>button]:rounded-full [&>button]:p-3 [&>button]:top-2 [&>button]:right-2 [&>button]:text-primary"
      >
        <ScrollArea className="h-[75vh] w-full px-[20px]">
          <DialogHeader>
            <h2 className="text-[30px] text-center text-primary font-colasta font-bold leading-none">
              <span className="font-normal">Start Your Journey</span> with us.
            </h2>
          </DialogHeader>
          <div className="mt-[37px] flex justify-center items-center gap-[10px] ">
            <a href="https://x.com/" target="_blank" className="group flex justify-center items-center gap-x-2">
              <Image
                width={60}
                height={60}
                src="/assets/imgs/icon/icon-x.png"
                alt="Icon"
                className="group-hover:bg-slate-300 group-hover:rounded-full ease-in-out duration-300"
              />

              <p className="group-hover:text-[#000]">@NeuroBot</p>
            </a>
          </div>
        </ScrollArea>
      </DialogContent>
    </Dialog>
  );
};

export default Signup;
