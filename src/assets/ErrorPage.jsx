import { useRouteError } from "react-router-dom";
import "./ErrorPage.css"; // Import your CSS file for styling
import "animate.css"; // Import animate.css

import logo from "../assets/images/light logo.png";
export default function ErrorPage() {
  const error = useRouteError();
  console.error(error);

  return (
    <div className="error-container">
      <div className="flex flex-col items-center justify-center h-screen">
        <img src={logo} alt="Error" className="w-24 h-24 mb-4 animate-spin" />
        <h1 className="text-4xl text-red-600 font-bold animate__animated animate__bounceIn">
          Oops!
        </h1>
        <p className="text-lg text-gray-800 mb-4">Sorry, an unexpected error has occurred.</p>
        <p className="italic text-gray-600">
          <i>{error.statusText || error.message}</i>
        </p>
      </div>
    </div>
  );
}
