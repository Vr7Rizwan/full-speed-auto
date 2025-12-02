"use client";
import emailjs from "@emailjs/browser";
import key from "../utils/emailConfig";
import { ToastContainer, toast } from "react-toastify";
import { useState } from "react";

const emailRegex =
  /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

function Form({
  widthAfterMD,
  isPopup = false,           // NEW: set true when this is shown as a popup
  onClose,                   // NEW: optional close handler (only used when isPopup === true)
}: {
  widthAfterMD?: string;
  isPopup?: boolean;
  onClose?: () => void;
}) {
  const notifySuccess = (msg: string) => toast.success(msg);
  const notifyError = (msg: string) => toast.error(msg);

  const sendMail = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.target as HTMLFormElement);
    const mail = formData.get("mail") as string;
    const fullName = formData.get("fullName") as string;
    const phone = formData.get("phone") as string;
    const carModel = formData.get("carModel") as string;
    const carName = formData.get("carName") as string;
    const additionalDetails = formData.get("additionalDetails") as string;

    const firstName =
      fullName.split(" ")[0].slice(0, 1).toUpperCase() +
      fullName.split(" ")[0].slice(1).toLowerCase();

    if (
      !mail ||
      !fullName ||
      !phone ||
      !carModel ||
      !carName ||
      !additionalDetails
    ) {
      alert("Please fill in all the fields");
      return;
    }
    if (!emailRegex.test(mail)) {
      alert("Invalid email address");
      return;
    }

    const templateParams = {
      mail,
      fullName,
      phone,
      carModel,
      carName,
      additionalDetails,
      firstName,
    };

    emailjs.init(key.public_key);
    emailjs.send(key.service_ID, key.template_ID, templateParams).then(
      (response) => {
        notifySuccess("Email sent");
        (e.target as HTMLFormElement).reset();
        console.log("SUCCESS!", response.status, response.text);
      },
      (error) => {
        notifyError("Error");
        console.log("FAILED...", error);
      }
    );
  };

  return (
    <div
      className={`relative w-full md:${widthAfterMD || "w-1/2"} bg-primary p-6 sm:p-8 rounded-lg shadow-md`}
    >
      {/* CLOSE BUTTON: only shown when this is a popup AND an onClose handler is provided */}
      {isPopup && onClose && (
        <button
          type="button"
          aria-label="Close"
          onClick={(e) => {
            // prevent any parent click handlers from running
            e.stopPropagation();
            onClose();
          }}
          className="absolute top-2 right-3 md:right-4 text-2xl font-bold text-gray-500 cursor-pointer"
        >
          ×
        </button>
      )}

      <ToastContainer />

      <h2 className="subHeading font-bold mb-6 text-txtColor">
        Book Your{" "}
        <span className="subHeading font-bold mb-6 text-secondary">
          Car Service
        </span>
      </h2>

      <form onSubmit={sendMail} className="flex flex-col gap-4">
        <input
          required
          name="fullName"
          type="text"
          placeholder="Full Name"
          className="border-3 border-secondary rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-secondary"
        />
        <input
          required
          name="mail"
          type="email"
          placeholder="Email Address"
          className="border-3 border-secondary rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-secondary"
        />
        <input
          required
          name="phone"
          type="tel"
          placeholder="Phone Number"
          className="border-3 border-secondary rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-secondary"
        />
        <input
          required
          name="carModel"
          type="text"
          placeholder="Car Model"
          className="border-3 border-secondary rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-secondary"
        />
        <input
          required
          type="text"
          name="carName"
          placeholder="Car Name"
          className="border-3 border-secondary rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-secondary"
        />

        <textarea
          required
          name="additionalDetails"
          placeholder="Additional Details"
          rows={4}
          className="border-3 border-secondary rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-secondary"
        ></textarea>

        <button
          type="submit"
          className="bg-secondary cursor-pointer text-txtColor normalText font-semibold py-3 rounded transition"
        >
          Submit
        </button>
      </form>
    </div>
  );
}

export default Form;
