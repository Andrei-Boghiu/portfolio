import Link from "next/link";
import { FaGithub, FaLinkedin } from "react-icons/fa";

const socials = [
  { icon: <FaGithub />, path: "", id: "github" },
  { icon: <FaLinkedin />, path: "", id: "linkedin" },
];

function Socials() {
  return (
    <div className="flex justify-center xl:justify-start gap-6">
      {socials.map(({ icon, path, id }) => (
        <Link
          key={id}
          href={path}
          className="w-9 h-9 border border-accent rounded-full flex justify-center items-center text-accent text-base hover:bg-accent hover:text-primary hover:transition-all duration-500"
        >
          {icon}
        </Link>
      ))}
    </div>
  );
}

export default Socials;
