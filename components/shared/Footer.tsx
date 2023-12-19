import Image from "next/image";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="border-t">
      <div className="flex-center wrapper flex-between flex flex-col gap-5 p-5 text-center sm:flex-row">
        <Link href={"/"} className="w-36 flex items-center gap-1">
          <Image
            src={"/assets/images/logo.svg"}
            width={38}
            height={38}
            alt="eventflow logo"
          />
          <h2 className="text-lg font-semibold">
            <span className="text-[#389FDD]">Event</span>Flow
          </h2>
        </Link>

        <p>2023 EventFlow. All Rights Reserved</p>
      </div>
    </footer>
  );
};

export default Footer;
