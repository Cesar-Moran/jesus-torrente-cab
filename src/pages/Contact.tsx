import { useRef, useState } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import emailjs from "emailjs-com";
import { useToast } from "@/components/ui/use-toast";
import { format } from "date-fns";
import { Button } from "@/components/ui/button";
import { ToastAction } from "@/components/ui/toast";
import ReCAPTCHA from "react-google-recaptcha";
import { Separator } from "@/components/ui/separator";

const Contact = () => {
  const { toast } = useToast();
  const [capVal, setCapVal] = useState(null);
  const form = useRef<HTMLFormElement | null>(null);

  const phoneRegex =
    /^(\+?( |-|\.)?\d{1,2}( |-|\.)?)?(\(?\d{3}\)?|\d{3})( |-|\.)?(\d{3}( |-|\.)?\d{4})/;

  const schema = yup.object().shape({
    first_name: yup.string().required("This field is required"),
    last_name: yup.string().required("This field is required"),
    phone_number: yup.string().matches(phoneRegex, "Phone number is not valid"),
    email_address: yup.string().required("This field is required").email(),
    message: yup.string().required("This field is required"),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmit = () => {
    if (form.current) {
      emailjs
        .sendForm(
          "service_nln6rk9",
          "template_skh076m",
          form.current,
          "jlVvWPgG6LF0gN6OK"
        )
        .then(
          (result) => {
            console.log(result.text);
          },
          (error) => {
            console.log(error.text);
          }
        );
      if (Object.keys(errors).length === 0) {
        toast({
          variant: "default",
          title:
            "The email has been sent, we'll answer you as quick as we can! ",
          description: format(new Date(), "'Submitted at:' MMMM, EEEE, yyyy"),
          action: (
            <ToastAction altText="Goto schedule to undo">Undo</ToastAction>
          ),
        });
      } else {
        toast({
          variant: "destructive",
          title: "Fix the errors before submitting the form",
          action: <ToastAction altText="Try again">Try again</ToastAction>,
        });
      }
    }
  };

  return (
    <article className="relative flex gap-8 flex-col lg:h-min justify-center mx-auto px-12 pt-14 ">
      <div className="flex flex-col  gap-8 xl:flex-row lg:gap-5 ">
        <div className="text-start max-w-4xl">
          <div className="flex flex-col   gap-2 ">
            <h1 className="text-5xl text-start font-serif  ">Contact us</h1>
            <p className="">
              We'd love to hear from you! Feel free to reach out and share your
              thoughts, ideas, or anything else you'd like to discuss. We're
              here to assist you and provide the information and support you
              need.{" "}
            </p>
          </div>
          <h2 className=" mb-2 mt-4 scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight first:mt-0">
            How can we help you today?
          </h2>
          <p className="leading-relaxed">
            Welcome to our service! We're here to make your experience as{" "}
            <strong>smooth</strong> and <strong>enjoyable</strong> as possible.
            If you have any questions, need assistance, or have special
            requests, we're just a message away. Feel free to reach out and let
            us know, and we'll be delighted to help you with anything you need.
          </p>
          <div className="hidden md:block">
            <ul className="my-6 ml-6 list-disc [&>li]:mt-2 leading-loose">
              <li>
                Expert Support: Our dedicated team is ready to assist you with
                any inquiries or issues you may have.
              </li>
              <li>
                Custom Solutions: We offer tailored solutions to meet your
                unique needs and preferences.
              </li>
              <li>
                Quick Response: You can expect a prompt and helpful response to
                your messages and queries.
              </li>
              <li>
                24/7 Availability: We're here around the clock to ensure you
                have access to support when you need it.
              </li>
              <li>
                Personalized Assistance: We value your individual requirements
                and will work closely with you to address them.
              </li>
            </ul>

            <p className="mt-4">
              Whether it's technical assistance, product information, or simply
              a friendly chat, we're here to provide you with the best
              experience possible. Don't hesitate to get in touch – we're just a
              message away!
            </p>
            <div className="flex flex-col  mt-8 lg:flex-row gap-8">
              <div>
                <big>Phone</big>
                <p>305-885-2858</p>
              </div>
              <div>
                <Separator orientation="vertical" />
              </div>
              <div>
                <big>Addresses</big>
                <p>12699 NW 107th Ave A and B suite, Medley, FL 33178 1097 E</p>
                Oakland Park Blvd, Oakland Park, FL 33334
                <p></p>
              </div>
            </div>
          </div>
        </div>
        <div className="block lg:hidden">
          <Separator />
        </div>
        <div className="w-full">
          <form
            className="flex flex-col   ext-start "
            ref={form}
            onSubmit={handleSubmit(onSubmit)}
          >
            <div className="flex flex-col gap-5 w-full">
              {/* First name */}
              <input
                type="text"
                placeholder="Demis"
                {...register("first_name")}
                className={
                  errors.first_name
                    ? "p-3 border-b-2 border-b-red-500 focus:outline-none "
                    : "p-3 border-b-2 focus:border-b-yellow-500  focus:outline-none "
                }
              />
              {errors.first_name && (
                <p className="contact-error-message ">
                  {errors.first_name.message}
                </p>
              )}

              {/* Last name */}
              <input
                type="text"
                placeholder="Roussos"
                {...register("last_name")}
                className={
                  errors.last_name
                    ? "p-3 border-b-2 border-b-red-500 focus:outline-none "
                    : "p-3 border-b-2 focus:border-b-yellow-500  focus:outline-none "
                }
              />

              {errors.last_name && (
                <p className="contact-error-message ">
                  {errors.last_name.message}
                </p>
              )}
            </div>

            {/* Phone Number */}
            <div className="flex flex-col gap-5  mt-8 ">
              <input
                type="number"
                placeholder="Phone Number"
                {...register("phone_number")}
                className={
                  errors.phone_number
                    ? "p-3 border-b-2 border-b-red-500 focus:outline-none "
                    : "p-3 border-b-2 focus:border-b-yellow-500  focus:outline-none "
                }
              />

              {errors.phone_number && (
                <p className="contact-error-message ">
                  {errors.phone_number.message}
                </p>
              )}
            </div>

            {/* Email */}
            <div className="flex flex-col gap-5 mt-8">
              <input
                type="text"
                placeholder="Email Address"
                {...register("email_address")}
                className={
                  errors.email_address
                    ? "p-3 border-b-2 border-b-red-500 focus:outline-none "
                    : "p-3 border-b-2 focus:border-b-yellow-500  focus:outline-none "
                }
              />

              {errors.email_address && (
                <p className="contact-error-message ">
                  {errors.email_address.message}
                </p>
              )}
            </div>

            {/* Message */}
            <div className="flex flex-col sm:rounded-md mt-8 justify-between gap-5">
              <textarea
                placeholder="What can we help you with?"
                className={
                  errors.message
                    ? "p-3 w-full border-b-2 border-b-red-500 border-x-2 border-x-red-500 focus:outline-none "
                    : "p-3 w-full border-b-2 focus:border-b-yellow-500  focus:outline-none"
                }
                {...register("message")}
                rows={5}
              />
              {errors.message && (
                <p className="contact-error-message ">
                  {errors.message.message}
                </p>
              )}
              <div className="captcha scale-[0.85] origin-[0_0]">
                <ReCAPTCHA
                  sitekey="6LfvROooAAAAAPopBVNSFecOqIltMST6Z0Z8rVr5"
                  onChange={(val: any) => setCapVal(val)}
                />
              </div>
              <Button
                type="submit"
                disabled={!capVal}
                className="w-full   p-3 font-medium uppercase bg-red-500 text-white hover-bg-yellow-400 rounded-l"
              >
                Submit
              </Button>
            </div>
          </form>
        </div>
      </div>
    </article>
  );
};

export default Contact;
