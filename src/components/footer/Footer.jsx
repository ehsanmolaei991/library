import React from "react";
import Logo from "../shared/icons/Logo";

export default function Footer() {
  return (
    <div className="flex flex-col justify-center items-center py-10 border-t-2 px-5 bg-lightest-gray">
      <Logo className="fill-light-green" width={150} height="45" />
      <div className="flex justify-center items-center pt-2 pb-3">
        <a className="mx-2 dark-green hover:light-green text-xl transition" href="#">
          <i className="fa-brands fa-instagram"></i>
        </a>
        <a className="mx-2 dark-green hover:light-green text-xl transition" href="#">
          <i className="fa-brands fa-whatsapp"></i>
        </a>
        <a className="mx-2 dark-green hover:light-green text-xl transition" href="#">
          <i className="fa-brands fa-telegram"></i>
        </a>
        <a className="mx-2 dark-green hover:light-green text-xl transition" href="#">
          <i className="fa-brands fa-twitter"></i>
        </a>
        <a className="mx-2 dark-green hover:light-green text-xl transition" href="#">
          <i className="fa-brands fa-pinterest"></i>
        </a>
      </div>
      <p className="text-sm">
        طراحی شده توسط{" "}
        <a
          href="mailto:info@teamopia.ir"
          className="green VazirBold cursor-pointer"
        >
          احسان
        </a>
      </p>
    </div>
  );
}
