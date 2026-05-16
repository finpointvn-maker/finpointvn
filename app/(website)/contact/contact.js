"use client";

import Container from "@/components/container";
import { useState } from "react";
import { useForm } from "react-hook-form";
import useWeb3Forms from "@web3forms/react";
import {
  MapPinIcon,
  EnvelopeIcon,
  PhoneIcon
} from "@heroicons/react/24/outline";
import { WEB_NAME } from "@/constants";
import ContainerContent from "@/components/containerContent";
export default function Contact({ settings }) {
  const {
    register,
    handleSubmit,
    reset,
    watch,
    control,
    setValue,
    formState: { errors, isSubmitSuccessful, isSubmitting }
  } = useForm({
    mode: "onTouched"
  });
  const [isSuccess, setIsSuccess] = useState(false);
  const [message, setMessage] = useState(false);
  // Please update the Access Key in the Sanity CMS - Site Congig Page
  const apiKey = settings?.w3ckey || "YOUR_ACCESS_KEY_HERE";

  const { submit: onSubmit } = useWeb3Forms({
    access_key: apiKey,
    settings: {
      from_name: "Finpoint",
      subject: "Contact Message from Finpoint"
    },
    onSuccess: (msg, data) => {
      setIsSuccess(true);
      setMessage(msg);
      reset();
    },
    onError: (msg, data) => {
      setIsSuccess(false);
      setMessage(msg);
    }
  });

  return (
    <ContainerContent>
      <div className="grid md:grid-cols-2 xl:my-10">
        <div className="xl:my-10">
          <h2 className="text-base font-semibold dark:text-white xl:text-2xl">
            {/* Liên hệ {WEB_NAME.toUpperCase()}
             */}
            THÔNG TIN LIÊN HỆ
          </h2>
          <p className="mt-2 max-w-sm text-sm xl:mt-5 xl:text-base">
            Hãy để lại thông tin, FinPoint sẽ phản hồi sớm nhất đến
            bạn.
          </p>

          <div className="mt-2 text-sm xl:mt-5 xl:text-base">
            <div className="text-dark-600 mt-2 flex items-center  space-x-2 dark:text-gray-400 ">
              <MapPinIcon className="h-4 w-4" />
              <span>Hà Nội, Việt Nam</span>
            </div>
            {settings?.email && (
              <div className="text-dark-600 mt-2 flex items-center space-x-2 dark:text-gray-400">
                <EnvelopeIcon className="h-4 w-4" />
                <a href={`mailto:${settings.email}`}>
                  {settings.email}
                </a>
              </div>
            )}
            {settings?.phone && (
              <div className="text-dark-600 mt-2 flex items-center space-x-2 dark:text-gray-400">
                <PhoneIcon className="h-4 w-4" />
                <a href={`tel:${settings.phone}`}>{settings.phone}</a>
              </div>
            )}
          </div>
        </div>
        <div>
          <form onSubmit={handleSubmit(onSubmit)} className="my-10">
            <input
              type="checkbox"
              id=""
              className="hidden"
              style={{ display: "none" }}
              {...register("botcheck")}></input>

            <div className="mb-5">
              <input
                type="text"
                placeholder="Họ tên"
                autoComplete="false"
                className={`w-full rounded-md border-2 px-2 py-1 outline-none placeholder:text-gray-800 focus:ring-4 dark:bg-gray-900 dark:text-white dark:placeholder:text-gray-200 xl:px-4   xl:py-3  ${
                  errors.name
                    ? "border-red-600 ring-red-100 focus:border-red-600 dark:ring-0"
                    : "border-gray-300 ring-gray-100 focus:border-gray-600 dark:border-gray-600 dark:ring-0 dark:focus:border-white"
                }`}
                {...register("name", {
                  required: "Vui lòng nhập họ tên",
                  maxLength: 80
                })}
              />
              {errors.name && (
                <div className="mt-1 text-red-600">
                  <small>{errors.name.message}</small>
                </div>
              )}
            </div>

            <div className="mb-5">
              <label htmlFor="email_address" className="sr-only">
                Email
              </label>
              <input
                id="email_address"
                type="email"
                placeholder="Email"
                name="email"
                autoComplete="false"
                className={`w-full rounded-md border-2 px-2 py-1 outline-none placeholder:text-gray-800 focus:ring-4 dark:bg-gray-900 dark:text-white dark:placeholder:text-gray-200 xl:px-4   xl:py-3  ${
                  errors.email
                    ? "border-red-600 ring-red-100 focus:border-red-600 dark:ring-0"
                    : "border-gray-300 ring-gray-100 focus:border-gray-600 dark:border-gray-600 dark:ring-0 dark:focus:border-white"
                }`}
                {...register("email", {
                  required: "Vui lòng nhập email",
                  pattern: {
                    value: /^\S+@\S+$/i,
                    message: "Vui lòng nhập email đúng định dạng"
                  }
                })}
              />
              {errors.email && (
                <div className="mt-1 text-red-600">
                  <small>{errors.email.message}</small>
                </div>
              )}
            </div>

            <div className="mb-3">
              <textarea
                name="message"
                placeholder="Nội dung"
                className={`h-36 w-full rounded-md border-2 px-2 py-1 outline-none placeholder:text-gray-800 focus:ring-4 dark:bg-gray-900   dark:text-white dark:placeholder:text-gray-200  xl:px-4 xl:py-3  ${
                  errors.message
                    ? "border-red-600 ring-red-100 focus:border-red-600 dark:ring-0"
                    : "border-gray-300 ring-gray-100 focus:border-gray-600 dark:border-gray-600 dark:ring-0 dark:focus:border-white"
                }`}
                {...register("message", {
                  required: "Vui lòng nhập nội dung "
                })}
              />
              {errors.message && (
                <div className="mt-1 text-red-600">
                  {" "}
                  <small>{errors.message.message}</small>
                </div>
              )}
            </div>

            <button
              type="submit"
              className="w-full rounded-md bg-gray-900 px-5 py-2 font-semibold text-white transition-colors hover:bg-gray-800 focus:outline-none focus:ring focus:ring-gray-200 focus:ring-offset-2 dark:bg-white dark:text-black xl:px-7 xl:py-4 ">
              {isSubmitting ? (
                <svg
                  className="mx-auto h-5 w-5 animate-spin text-white dark:text-black"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24">
                  <circle
                    className="opacity-25"
                    cx="12"
                    cy="12"
                    r="10"
                    stroke="currentColor"
                    strokeWidth="4"></circle>
                  <path
                    className="opacity-75"
                    fill="currentColor"
                    d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                </svg>
              ) : (
                "Gửi"
              )}
            </button>
          </form>

          {isSubmitSuccessful && isSuccess && (
            <div className="mt-3 text-center text-sm text-green-500">
              {message || "Success. Message sent successfully"}
            </div>
          )}
          {isSubmitSuccessful && !isSuccess && (
            <div className="mt-3 text-center text-sm text-red-500">
              {message || "Something went wrong. Please try later."}
            </div>
          )}
        </div>
      </div>
    </ContainerContent>
  );
}
