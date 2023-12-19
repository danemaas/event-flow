import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";

const page = () => {
  return (
    <>
      <section className="bg-primary-50 bg-dotted-pattern bg-contain py-5 md:py-10">
        <div className="wrapper grid grid-cols-1 gap-5 md:grid-cols-2 2xl:gap-0">
          <div className="flex flex-col justify-center gap-8">
            <h1 className="h1-bold">
              Host, Connect, Celebrate: Your Events, Our Platform!
            </h1>
            <p>
              Immerse Yourself in Extraordinary Moments with EventFlow: Where
              Every Occasion Becomes an Unforgettable Experience!
            </p>
            <Button asChild variant={"custom"} className="w-full md:w-fit">
              <Link href={"#events"}>Explore Now</Link>
            </Button>
          </div>
          <Image
            src={"/assets/images/hero.png"}
            alt="hero image"
            width={1000}
            height={1000}
            className="max-h-[50vh] object-contain object-center"
          />
        </div>
      </section>

      <section
        id="events"
        className="wrapper my-8 flex flex-col gap-8 md:gap-12"
      >
        <h2 className="h2-bold">
          Trusted by
          <br /> Thousands of Events
        </h2>
        <div className="flex w-full flex-col gap-5 md:flex-row">
          Search CategoryFilter
        </div>
      </section>
    </>
  );
};

export default page;
