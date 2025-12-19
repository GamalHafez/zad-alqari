import githubLogo from "@assets/github.png";
import linkedinLogo from "@assets/linkedin.png";
import Image from "next/image";

const SocialLinks = () => {
  return (
    <ul className="flex items-center gap-1.5">
      <li>
        <a
          href="https://www.linkedin.com/in/gamal-hafez/"
          target="_blank"
          className="transition-all duration-200 ease-out md:hover:scale-110 md:hover:opacity-80"
        >
          <Image
            src={linkedinLogo}
            alt="LinkedIn"
            className="w-4.5 max-w-full"
          />
        </a>
      </li>
      <li>
        <a
          href="https://github.com/GamalHafez?tab=repositories"
          target="_blank"
          className="transition-all duration-200 ease-out md:hover:scale-110 md:hover:opacity-80"
        >
          <Image src={githubLogo} alt="GitHub" className="w-5 max-w-full" />
        </a>
      </li>
    </ul>
  );
};

export default SocialLinks;
