import React from "react";
import Image from "next/image";
import Link from "next/link";
import Cards from "@/components/Cards";
import { Card, Services } from "../data";

import Retink from "../../public/assets/Retink.png";
import Gee from "../../public/assets/Gee.png";
import Screenshot from "../../public/assets/Screenshot.png";
import Facebook from "../../public/assets/Facebook.svg";
import Twitter from "../../public/assets/Twitter.svg";
import Instagram from "../../public/assets/Instagram.svg";
import LinkedIn from "../../public/assets/LinkedIn.svg";
import Youtube from "../../public/assets/Youtube.svg";
import Pinterest from "../../public/assets/Pinterest.svg";

const Homepage = () => {
  return (
    <main className="bg-white font-poppins">
      <nav className="w-11/12 h-28 mx-auto flex items-center">
        <Image src={Retink} width={160} height={30} alt="logo" />
      </nav>
      <section className="max-w-[1159px] border-black h-[320px] mt-8 mx-auto flex flex-row justify-evenly">
        <div className="mt-auto">
          <div className="w-[420px] flex flex-row leading-normal text-4xl font-extrabold">
            <h1 className="max-w-xs text-black text">
              Get Advanced AI + Expert Created
            </h1>
            <span className="text-primary place-self-end">Logos</span>
          </div>
          <p className="w-[619px] mt-8 text-black text-xl text">
            Boost your sales &#173;
            <span className="text-primary font-extrabold">10x faster </span>
            with content customized by our unique partnership of &#173;
            <span className="text-primary font-extrabold">
              human creativity and AI optimization
            </span>
          </p>
        </div>
        <div>
          <Image src={Gee} width={250} height={320} alt="Gee" />
        </div>
      </section>
      <section className="max-w-[1159px] mx-auto h-auto mt-24">
        <h1 className="text-3xl text-primary text-center font-bold">
          EXPLAINER VIDEO
        </h1>
        <Image
          src={Screenshot}
          width={737}
          height={415}
          alt="screen video"
          className="mt-24 mx-auto"
        />
      </section>
      <section className="max-w-[1159px] mt-20 mx-auto h-auto flex justify-center">
        <Cards />
      </section>
      <section className="max-w-[1159px] mt-14 mx-auto h-auto flex flex-col items-center justify-center">
        <h1 className="text-primary text-3xl font-semibold">
          Transform your Creation Process
        </h1>
        <p className="max-w-[790px] mt-5 text-secondary text-xl">
          With a new approach to ordering content, you can now stop juggling
          multiple documents and meetings and start publishing content faster
          and on demand
        </p>
        <h1 className="mt-14 text-primary text-3xl font-semibold">
          Activate your business growth with RetinkContent.
        </h1>
        <p className="max-w-[746px] mt-4 text-secondary text-xl">
          Save time and maintain your brand identity within your budget range or
          sign up for affordable plans and still access multiple content
          services like:
        </p>
        <div className="mt-24 grid grid-cols-3 gap-x-5 gap-y-9">
          <>
            {Services.map((data, index) => {
              return (
                <div key={index} className="w-[254px] h-auto rounded-[20px]">
                  <Image
                    src={data.icon}
                    width={253}
                    height={143}
                    alt={data.title}
                    className={`object-fill rounded-[20px] ${
                      data.shadow && "image-shadow"
                    }`}
                  />
                  <h1
                    className={`mt-3 text-secondary text-lg ${
                      data.margin && "ml-2"
                    }`}
                  >
                    {data.title}
                  </h1>
                  <div className="bg-primary w-20 h-[3px] rounded-full"></div>
                  <p
                    className={`mt-5 text-black text-[15px] ${
                      data.bold && "font-bold text"
                    }`}
                  >
                    {data.text}
                  </p>
                </div>
              );
            })}
          </>
        </div>
      </section>
      <section className="max-w-[1159px] mt-28 mx-auto h-auto flex flex-col items-center justify-center">
        <h1 className="text-primary text-2xl font-semibold text">
          Sign Up For The BETA to see more
        </h1>
        <div className="mt-7 flex flex-row gap-1">
          <div className="w-72 h-14 border flex justify-center items-center border-border rounded-[20px] border-shadow">
            <h4 className="text-opac text-xl font-semibold">Business Name</h4>
          </div>
          <div className="w-72 h-14 border flex justify-center items-center border-border rounded-[20px] border-shadow">
            <h4 className="text-opac text-xl font-semibold">Email</h4>
          </div>
        </div>
        <div className="bg-primary w-[223px] h-14 mt-9 flex justify-center items-center rounded-[20px] cursor-pointer hover:scale-105 transition-all duration-500 drp-shadow">
          <h4 className="text-white letter">Notify me</h4>
        </div>
        <div className="w-[340px] h-14 mt-9 flex justify-center items-center border-2 border-primary rounded-[20px] drp-shadow">
          <Link
            href="https://retink.io/fap/"
            className="text-option text-xl underline hover:opacity-75 transition-all duration-200"
            target="_blank"
          >
            Sign up as freelance partner
          </Link>
        </div>
      </section>
      <footer className="w-full h-[450px] mt-36">
        <div className="bg-footer w-full h-[332px] px-16 py-12">
          <Image src={Retink} width={180} height={38} alt="logo" />
          <div className="max-w-[1200px] h-24 mx-auto mt-[51px] pl-36 pr-16 flex flex-row justify-between">
            <div className="max-w-3xl text-black text-2xl font-semibold flex flex-row justify-around gap-20">
              <div className="mt-4 flex flex-col justify-between">
                <h4>Product by Retink Media UG</h4>
                <h4> Bonn, Germany</h4>
              </div>
              <div className="flex flex-col justify-around">
                <h4>Get Early Access</h4>
                <h4>Provide Feedback</h4>
              </div>
            </div>
            <div className="mt-2">
              <h2 className="text-[#131313] text-2xl">Connect with Us</h2>
              <div className="w-[250px] h-auto mt-4  flex flex-row justify-between items-center">
                <Image
                  src={Facebook}
                  width={24}
                  height={24}
                  alt=""
                  className="cursor-pointer"
                />
                <Image
                  src={Twitter}
                  width={24}
                  height={24}
                  alt=""
                  className="cursor-pointer"
                />
                <Image
                  src={Instagram}
                  width={24}
                  height={24}
                  alt=""
                  className="cursor-pointer"
                />
                <Image
                  src={LinkedIn}
                  width={24}
                  height={24}
                  alt=""
                  className="cursor-pointer"
                />
                <Image
                  src={Youtube}
                  width={24}
                  height={24}
                  alt=""
                  className="cursor-pointer"
                />
                <Image
                  src={Pinterest}
                  width={24}
                  height={24}
                  alt=""
                  className="cursor-pointer"
                />
              </div>
            </div>
          </div>
        </div>
        <div className="bg-black w-full h-[118px] pl-20 pr-[69px] text-white text-base flex flex-row justify-between items-center">
          <p>Copyright © 2021 Retink</p>
          <div className="w-auto flex flex-row gap-8">
            <p className="text">Privacy Policy</p>
            <p>Terms of Service</p>
          </div>
        </div>
      </footer>
    </main>
  );
};

export default Homepage;
