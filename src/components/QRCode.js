import React from "react";
const logo = require("../images/image-qr-code.png")

export default function QRCode() {
  return(
    <section className="bg-sky-100 h-screen w-full flex place-content-center">
      <div className="bg-white flex flex-col text-center h-1/2 self-center rounded-xl">
        <div className="flex w-80 h-fit m-4">
          <img src={logo} alt="QRCode" className="rounded-xl" />
        </div>
        <div className="flex self-center text-2xl font-bold">
          <h1>Improve your front-end <br /> skills by building projects</h1>
        </div>
        <div className="flex self-center text-xl font-thin pt-6">
          <h1>Scan the QR code to visit Frontend <br /> Mentor and take your conding skills to<br /> the next level</h1>
        </div>
      </div>
    </section>
  )
};