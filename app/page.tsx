import Image from "next/image";
import Logo from "../assets/Logo1.png";
import LandingImg from "../assets/main.svg";
import { Button } from "@/components/ui/button";
import Link from "next/link";
export default function Home() {
  return (
    <main>
      <header className="max-w-6xl mx-auto px-4 sm:px-8 py-6 ">
        <Image src={Logo} alt="logo" width={150} height={150} />
      </header>
      <section className="max-w-6xl mx-auto px-4 sm:px-8 h-screen grid -mt-50 lg:grid-cols-2 items-center">
        <div>
          <h1 className="capitalize text-4xl md:text-7xl font-bold">
            job <span className="text-primary">tracking</span> app
          </h1>
          <p className="leading-loose max-w-md mt-4 ">
            I am career hustlers resume polish next level networking online job
            search portal. Professional interview prep, skills upgrade platform,
            mentorship guidance, remote work gigs, recruiter connect,
            opportunity hustle daily grind hustle.
          </p>
          <Button asChild className="mt-4">
            <Link href="/add-job">Get Started</Link>
          </Button>
        </div>
        <Image src={LandingImg} alt="landing" className="hidden lg:block " />
      </section>
    </main>
  );
}
