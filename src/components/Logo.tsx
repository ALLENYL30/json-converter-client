import React from "react";
import { ArrowsRightLeftIcon } from "@heroicons/react/24/outline";
import { Link } from "react-router-dom";

interface LogoProps {
  size?: "small" | "medium" | "large";
  withText?: boolean;
}

const Logo: React.FC<LogoProps> = ({ size = "medium", withText = true }) => {
  const getSizeClass = () => {
    switch (size) {
      case "small":
        return "h-6 w-6";
      case "large":
        return "h-12 w-12";
      case "medium":
      default:
        return "h-8 w-8";
    }
  };

  const getTextClass = () => {
    switch (size) {
      case "small":
        return "text-lg";
      case "large":
        return "text-3xl";
      case "medium":
      default:
        return "text-xl";
    }
  };

  return (
    <Link
      to="/"
      className="flex items-center space-x-2 text-blue-600 hover:text-blue-800"
    >
      <div className="bg-blue-100 rounded-full p-2 flex items-center justify-center">
        <ArrowsRightLeftIcon className={getSizeClass()} />
      </div>
      {withText && (
        <span className={`font-bold ${getTextClass()}`}>Format Converter</span>
      )}
    </Link>
  );
};

export default Logo;
