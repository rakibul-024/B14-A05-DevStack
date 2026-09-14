import logo from "../assets/logo-text.png";
export const Footer = () => {
  return (
    <footer className="bg-white border-t border-gray-100 mt-8 md:mt-20">
      <div className="max-w-7xl mx-auto px-6 lg:px-12 pt-8 pb-4 md:py-16">
        <div className="flex flex-col md:flex-row justify-between items-center md:items-start gap-8 md:gap-16 mb-8 md:mb-16">
          <div className="text-center md:text-left">

            <div className="flex items-center justify-center md:justify-start gap-2.5 mb-3">
              <img
                src={logo}
                alt="Dev-Stack"
                className="h-auto w-22 md:h-8 md:w-auto"
              />
            </div>

            <p className="max-w-xs mx-auto md:mx-0 mb-5 text-gray-500 md:text-gray-400 text-sm leading-relaxed">
              Curated tools, technologies, and resources for developers building
              modern software.
            </p>

            <div className="flex justify-center md:justify-start items-center gap-3 md:gap-6 font-semibold md:font-medium text-gray-800 md:text-gray-600 text-sm">
              <a href="#" className="hover:text-gray-900 ">
                GitHub
              </a>
              <span className="text-gray-400 md:hidden">•</span>
              <a href="#" className="hover:text-gray-900 ">
                Twitter
              </a>
              <span className="text-gray-400 md:hidden">•</span>
              <a href="#" className="hover:text-gray-900 ">
                LinkedIn
              </a>
            </div>
          </div>

          <div className="hidden md:flex gap-16 lg:gap-24">
            <div>
              <h4 className="font-bold text-gray-900 text-sm uppercase  mb-4">
                Product
              </h4>
              <ul className="space-y-3 text-sm text-gray-400">
                <li>
                  <a href="#" className="hover:text-gray-600 ">
                    Home
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-gray-600 ">
                    Technologies
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-gray-600 ">
                    Projects
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="font-bold text-gray-900 text-sm uppercase mb-4">
                Company
              </h4>
              <ul className="space-y-3 text-sm text-gray-400">
                <li>
                  <a href="#" className="hover:text-gray-600 ">
                    About
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-gray-600 ">
                    Contact
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-gray-600 ">
                    Careers
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="font-bold text-gray-900 text-sm uppercase mb-4">
                Legal
              </h4>
              <ul className="space-y-3 text-sm text-gray-400">
                <li>
                  <a href="#" className="hover:text-gray-600">
                    Privacy Policy
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-gray-600 ">
                    Terms of Service
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-100 pt-6 flex flex-row justify-between items-center text-xs sm:text-sm text-gray-400">
          <p>© 2026 Dev Stack. All rights reserved.</p>
          <div className="flex gap-4">
            <a href="#" className="hover:text-gray-600 ">
              Privacy
            </a>
            <a href="#" className="hover:text-gray-600 ">
              Terms
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};
