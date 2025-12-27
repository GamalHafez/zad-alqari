import Image from "next/image";

const SocialLinks = () => {
  return (
    <ul className="flex items-center gap-1.5">
      <li>
        <a
          href="https://www.linkedin.com/in/gamal-hafez/"
          target="_blank"
          rel="noopener noreferrer"
          className="transition-all duration-200 ease-out md:hover:scale-110 md:hover:opacity-80"
        >
          <Image
            width={20}
            height={20}
            src="/images/linkedin.png"
            alt="LinkedIn"
          />
        </a>
      </li>
      <li>
        <a
          href="https://github.com/GamalHafez?tab=repositories"
          target="_blank"
          rel="noopener noreferrer"
          className="transition-all duration-200 ease-out md:hover:scale-110 md:hover:opacity-80"
        >
          <Image width={20} height={20} src="/images/github.png" alt="GitHub" />
        </a>
      </li>
    </ul>
  );
};

export default SocialLinks;
