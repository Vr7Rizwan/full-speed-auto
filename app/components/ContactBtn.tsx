"use client";
import React, { useState } from "react";

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
  return setMobileMenuOpen ? (
    <section>
      <button
        onClick={() => {
          setMobileMenuOpen(false);
          setFormPopup(true);
        }}
        className={classes}
      >
        {text}
      </button>
    </section>
  ) : (
    <section>
      <button onClick={() => setFormPopup(true)} className={classes}>
        {text}
      </button>
    </section>
  );
}

export default ContactBtn;
