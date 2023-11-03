import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <header className="flex flex-wrap sm:justify-start sm:flex-nowrap z-50 w-full text-sm py-4">
      <nav
        className="max-w-[85rem] w-full mx-auto px-4 sm:flex sm:items-center sm:justify-between"
        aria-label="Global"
      >
        <div className="flex items-center justify-between">
          <a className="flex-none text-xl font-semibold text-white" href="#">
            <img
              src="https://i0.wp.com/torrentekitchenandbath.com/wp-content/uploads/2023/07/download.png?resize=150%2C150&ssl=1"
              className="w-14 h-14"
            ></img>
          </a>
          <div className="sm:hidden">
            <button
              type="button"
              className="hs-collapse-toggle p-2 inline-flex justify-center items-center gap-2 rounded-md border border-white/[.25] font-medium bg-blue-600 text-white shadow-sm align-middle hover:bg-white/[.15] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-blue-600 focus:ring-white transition-all text-sm"
              data-hs-collapse="#navbar-primary"
              aria-controls="navbar-primary"
              aria-label="Toggle navigation"
            >
              <svg
                className="hs-collapse-open:hidden w-4 h-4"
                width="16"
                height="16"
                fill="currentColor"
                viewBox="0 0 16 16"
              >
                <path
                  fillRule="evenodd"
                  d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z"
                />
              </svg>
              <svg
                className="hs-collapse-open:block hidden w-4 h-4"
                width="16"
                height="16"
                fill="currentColor"
                viewBox="0 0 16 16"
              >
                <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z" />
              </svg>
            </button>
          </div>
        </div>
        <div
          id="navbar-primary"
          className="hs-collapse hidden overflow-hidden transition-all duration-300 basis-full grow sm:block"
        >
          <Link className="font-medi" to="/" aria-current="page">
            Home
          </Link>
          <Link
            className="font-medium "
            to="/torrentekcb/designs"
            ria-current="page"
          >
            Designs
          </Link>
          <Link
            className="font-medium "
            to="/torrentekcb/about"
            ria-current="page"
          >
            About
          </Link>

          <Link
            className="font-medium "
            to="/torrentekcb/contact"
            ria-current="page"
          >
            Contact
          </Link>
          <Link
            className="font-medium "
            to="/torrentekcb/myaccount"
            ria-current="page"
          >
            My Account
          </Link>
          <Link
            className="font-medium "
            to="/torrentekcb/shop"
            ria-current="page"
          >
            Shop
          </Link>
          <button className="uppercase bg-red-500 p-3 rounded-lg text-white  duration-200">
            <Link
              className="font-medium "
              to="/torrentekcb/becomeadealer"
              ria-current="page"
            >
              Become a dealer
            </Link>
          </button>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
