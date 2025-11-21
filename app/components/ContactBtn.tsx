"use client";
import React, { useState, useEffect } from "react";
import { createPortal } from "react-dom";
import Form from "./Form";

function ContactBtn({
  text,
  classes,
  setMobileMenuOpen,
}: {
  text: string;
  classes: string;
  setMobileMenuOpen?: React.Dispatch<React.SetStateAction<boolean>>;
}) {
  const [formPopup, setFormPopup] = useState<boolean>(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    return () => setMounted(false);
  }, []);

  return (
    <>
      <section>
        <button
          onClick={() => {
            if (setMobileMenuOpen) setMobileMenuOpen(false);
            setFormPopup(true);
          }}
          className={classes}
        >
          {text}
        </button>
      </section>
      {mounted &&
        formPopup &&
        createPortal(
          <div
            className="fixed w-full h-full inset-0 bg-black/50 z-[9999] flex justify-center items-center p-4"
            onClick={() => setFormPopup(false)}
          >
            <div
              onClick={(e) => e.stopPropagation()}
              className="w-full max-w-2xl"
            >
              <Form widthAfterMD="w-full" />
            </div>
          </div>,
          document.body
        )}
    </>
  );
}

export default ContactBtn;
