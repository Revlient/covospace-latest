import CovspaceLogo from "../ui/CovspaceLogo";
import { Link } from "react-router-dom";

const FacebookIcon = () => (
  <svg
    className="w-6 h-6"
    fill="currentColor"
    viewBox="0 0 24 24"
    aria-hidden="true"
  >
    <path
      fillRule="evenodd"
      d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"
      clipRule="evenodd"
    />
  </svg>
);

const InstagramIcon = () => (
  <svg
    className="w-6 h-6"
    fill="currentColor"
    viewBox="0 0 24 24"
    aria-hidden="true"
  >
    <path
      fillRule="evenodd"
      d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.316 1.363.364 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.316-2.427.364-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.316-1.363-.364-2.427C2.013 14.987 2 14.643 2 12v-.08c0-2.643.012-2.987.06-4.043.049-1.064-.218-1.791-.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.316 2.427-.364C8.93 2.013 9.27 2 12 2h.315zM12 4.556c-1.803 0-2.09.008-2.824.042-1.136.052-1.626.248-1.846.333a2.47 2.47 0 00-.92.598 2.47 2.47 0 00-.598.92c-.085.22-.28.71-.333 1.846-.034.734-.042 1.02-.042 2.824v.19c0 1.803.008 2.09.042 2.824.052 1.136.248 1.626.333 1.846.126.33.317.598.598.92.28.28.59.472.92.598.22.085.71.28 1.846.333.734.034 1.02.042 2.824.042h.19c1.803 0 2.09-.008 2.824-.042 1.136-.052-1.626-.248-1.846-.333.33-.126.598-.317.92-.598.28-.28.472-.59.598-.92.085-.22.28.71.333-1.846.034-.734.042-1.02.042-2.824v-.19c0-1.803-.008-2.09-.042-2.824-.052-1.136-.248-1.626-.333-1.846a2.47 2.47 0 00-.598-.92 2.47 2.47 0 00-.92-.598c-.22-.085-.71-.28-1.846-.333C14.09 4.564 13.803 4.556 12 4.556h-.19zM12 8.242a3.758 3.758 0 100 7.516 3.758 3.758 0 000-7.516zM12 14a2 2 0 110-4 2 2 0 010 4z"
      clipRule="evenodd"
    />
  </svg>
);

const TwitterIcon = () => (
  <svg
    className="w-6 h-6"
    fill="currentColor"
    viewBox="0 0 24 24"
    aria-hidden="true"
  >
    <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.71v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
  </svg>
);

const LinkedInIcon = () => (
  <svg
    className="w-6 h-6"
    fill="currentColor"
    viewBox="0 0 24 24"
    aria-hidden="true"
  >
    <path
      fillRule="evenodd"
      d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"
      clipRule="evenodd"
    />
  </svg>
);

// --- Data Arrays for Links ---
// Storing data this way makes the component easier to update.
const footerLinks = [
  { name: "About", href: "/about" },
  { name: "Blogs", href: "/blogs" },
  { name: "Contact Us", href: "/contact" },
  { name: "Careers", href: "/careers" },
  { name: "Terms & Conditions", href: "/terms" },
  { name: "Privacy", href: "/policy"}
];

const socialLinks = [
  {
    name: "Facebook",
    href: "https://www.facebook.com/profile.php?id=61581623110489",
    icon: FacebookIcon,
  },
  {
    name: "Instagram",
    href: "https://www.instagram.com/cov_space/?hl=en",
    icon: InstagramIcon,
  },
  { name: "Twitter", href: "#", icon: TwitterIcon },
  { name: "LinkedIn", href: "#", icon: LinkedInIcon },
];

// --- Main Footer Component ---
const Footer = () => {
  return (
    <footer className="bg-black text-white font-sans rounded-t-xl sm:rounded-t-2xl md:rounded-t-3xl overflow-hidden">
      {/* Mobile Layout (320px - 768px) */}
      <div className="block md:hidden">
        <div className="px-4 py-6 sm:px-6 sm:py-8">
          {/* Logo Section - Mobile */}
          <div className="bg-lime-600 rounded-lg p-4 sm:p-6 mb-6 sm:mb-8 flex items-center justify-center">
            <div className="scale-75 sm:scale-90">
              <CovspaceLogo />
            </div>
          </div>

          {/* Navigation Links - Mobile */}
          <nav className="mb-6 sm:mb-8">
            <ul className="grid grid-cols-2 gap-3 sm:gap-4">
              {footerLinks.map((link) => (
                <li key={link.name}>
                  {link.href && link.href.startsWith("/") ? (
                    <Link
                      to={link.href}
                      className="flex items-center justify-center text-center text-base sm:text-lg font-medium hover:text-lime-400 transition-colors py-3 px-4 min-h-[44px] bg-gray-900 hover:bg-gray-800 rounded-lg touch-manipulation"
                    >
                      {link.name}
                    </Link>
                  ) : (
                    <a
                      href={link.href}
                      className="flex items-center justify-center text-center text-base sm:text-lg font-medium hover:text-lime-400 transition-colors py-3 px-4 min-h-[44px] bg-gray-900 hover:bg-gray-800 rounded-lg touch-manipulation"
                    >
                      {link.name}
                    </a>
                  )}
                </li>
              ))}
            </ul>
          </nav>

          {/* Social Media Icons - Mobile */}
          <div className="flex justify-center items-center gap-4 sm:gap-6">
            {socialLinks.map((social) => (
              <a
                key={social.name}
                href={social.href}
                className="text-white hover:text-lime-400 transition-colors p-3 min-h-[44px] min-w-[44px] flex items-center justify-center bg-gray-900 hover:bg-gray-800 rounded-lg touch-manipulation"
              >
                <span className="sr-only">{social.name}</span>
                <div className="w-6 h-6 sm:w-7 sm:h-7">
                  <social.icon />
                </div>
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* Desktop Layout (768px+) */}
      <div className="hidden md:flex">
        {/* First Column: Black spacer */}
        <div className="w-1/6 bg-black"></div>

        {/* Middle Column: Green background with Logo */}
        <div className="w-[18rem] flex items-center justify-center p-4 lg:p-6 bg-white rounded-lg border-2 border-black">
          <div className="text-center scale-90 lg:scale-150">
            <CovspaceLogo />
          </div>
        </div>

        {/* Right Column: Black background with links */}
        <div className="w-1/2 flex flex-col p-6 lg:p-8 xl:p-10">
          {/* Navigation Links - Desktop */}
          <nav>
            <ul className="space-y-3 lg:space-y-4">
              {footerLinks.map((link) => (
                <li key={link.name}>
                  {link.href && link.href.startsWith("/") ? (
                    <Link
                      to={link.href}
                      className="text-xl lg:text-2xl xl:text-3xl hover:text-lime-400 transition-all duration-300 block py-2 hover:translate-x-2 transform"
                    >
                      {link.name}
                    </Link>
                  ) : (
                    <a
                      href={link.href}
                      className="text-xl lg:text-2xl xl:text-3xl hover:text-lime-400 transition-all duration-300 block py-2 hover:translate-x-2 transform"
                    >
                      {link.name}
                    </a>
                  )}
                </li>
              ))}
            </ul>
          </nav>

          {/* Social Media Icons - Desktop */}
          <div className="mt-auto flex justify-end items-center gap-4 lg:gap-5 xl:gap-6">
            {socialLinks.map((social) => (
              <a
                key={social.name}
                href={social.href}
                className="text-white hover:text-lime-400 transition-all duration-300 p-2 hover:scale-110 transform"
              >
                <span className="sr-only">{social.name}</span>
                <div className="w-6 h-6 lg:w-7 lg:h-7 xl:w-8 xl:h-8">
                  <social.icon />
                </div>
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;