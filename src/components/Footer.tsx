import {
  BiSubdirectoryRight,
  BiCurrentLocation,
  BiMessageAltDots,
  BiLogoGmail,
} from "react-icons/bi";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className=" py-24 px-12 flex flex-col sm:flex-row gap-5 justify-around lg:items-center">
      <div className="self-center">
        <Link to={"/"}>
          <img src="https://i0.wp.com/torrentekitchenandbath.com/wp-content/uploads/2023/07/download-1.png?w=225&ssl=1"></img>
        </Link>
      </div>
      <div className="text-start flex flex-col gap-5 lg:flex-row">
        <div>
          <h6 className="text-2xl text-slate-600 font-semibold mb-3 flex items-center gap-2">
            <BiCurrentLocation /> Locations
          </h6>
          <div className="flex flex-col">
            <ul>
              <li className="hover:scale-x-105 duration-200">
                <a
                  href="https://www.google.com/maps/place/Torrente+Kitchen+and+Bath+%E2%80%94+Miami/@25.8882583,-80.3739205,17z/data=!3m1!4b1!4m6!3m5!1s0x88d9bca187e25685:0x24121482471fc30e!8m2!3d25.8882535!4d-80.3713456!16s%2Fg%2F11bzyqc6l3?entry=tts&shorturl=1"
                  target="_blank"
                  className="flex items-center"
                >
                  <BiSubdirectoryRight />
                  12699 NW 107th Ave A and B suite, Medley, FL 33178
                </a>
              </li>
              <li className="hover:scale-x-105 duration-200">
                <a
                  href="https://www.google.com/maps/place/Torrente+Kitchen+%26+Bath/@26.1672189,-80.1331659,20.25z/data=!4m6!3m5!1s0x88d90178f79d55d1:0x318d5009330973c1!8m2!3d26.1672461!4d-80.1329098!16s%2Fg%2F11b7lm04qd?entry=tts&shorturl=1"
                  target="_blank"
                  className="flex items-center "
                >
                  <BiSubdirectoryRight />
                  1097 E Oakland Park Blvd, Oakland Park, FL 33334
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div>
          <h6 className="text-2xl text-slate-600 font-semibold mb-3 flex items-center gap-2">
            <BiMessageAltDots className="mt-1" />
            Contact us
          </h6>
          <p>Phone: 305-885-2858</p>
          <p>Mon-Fri: 9:00 am - 5:00 pm</p>
          <p>Sat: 9:00 am - 2:00 pm</p>
        </div>
        <div>
          <h6 className="text-2xl text-slate-600 font-semibold mb-3 flex items-center gap-2">
            <BiLogoGmail />
            Email
          </h6>
          <address className="hover:scale-x-105 duration-200 cursor-pointer ">
            torrentekitchenmedley@gmail.com
          </address>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
