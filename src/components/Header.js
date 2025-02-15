import { Link } from "react-router-dom";
import Logo from "../assets/images/logo_noBg.png";

export default function Header({
  heading,
  paragraph,
  linkName,
  linkUrl = "#",
}) {
  return (
    <div className="mb-10">
      <div className="flex justify-center">
        <img alt="" className="h-40 w-40" src={Logo} />
      </div>
      <h2 className="mt-2 text-center text-3xl font-extrabold text-gray-900">
        {heading}
      </h2>
      <p className="mt-2 text-center text-sm text-gray-600 mt-5">
        {paragraph}{" "}
        <Link
          to={linkUrl}
          className="font-medium text-first hover:text-emerald-500 "
        >
          {linkName}
        </Link>
      </p>
    </div>
  );
}
