import Image from "next/image";
import Link from "next/link";
import AiBrain from "../../public/assets/AiBrain.svg";
import Customer from "../../public/assets/Customer.png";
import VectorH from "../../public/assets/VectorH.svg";
import VectorI from "../../public/assets/VectorI.svg";
import GroupBrand from "../../public/assets/Groupbrand.svg";

const Cards = () => {
  return (
    <div className="flex flex-row flex-wrap justify-center items-center gap-x-[46px] gap-y-16">
      <div className="w-[355px] h-[381px] px-8 flex flex-col items-center justify-center rounded-[20px] box-shadow">
        <Image src={AiBrain} width={70} height={72} alt="" />
        <h1 className="max-w-[220px] mt-4 text-black text-xl text-center font-semibold ">
          MakeAI-assisted Content Choices
        </h1>
        <p className="mt-[18px] text-[15px] text-black text-center">
          Access and Order from an extensive catalogue in any language and on
          your budget&apos;s terms. If unsure, our AI guides you to the best.
        </p>
      </div>
      <div className="w-[355px] h-[381px] px-8 flex flex-col items-center justify-center rounded-[20px] box-shadow">
        <Image src={GroupBrand} width={70} height={72} alt="" />
        <h1 className="max-w-[220px] mt-4 text-black text-xl text-center font-semibold ">
          Upload and Maintain your Brand Identity
        </h1>
        <p className="mt-[18px] text-[15px] text-black text-center">
          Add your preferences and brand assets to ensure the contents is
          consistent with your brand identity. No brand asset? We can make for
          you!
        </p>
      </div>
      <div className="w-[355px] h-[381px] px-8 flex flex-col items-center justify-center rounded-[20px] box-shadow">
        <Image src={VectorI} width={70} height={72} alt="" />
        <h1 className="mt-4 text-black text-xl text-center font-semibold ">
          Be informed as we create
        </h1>
        <p className="max-w-[243px] mt-[18px] text-[15px] text-black text-center">
          Your details are translated and sent to the AI, &#173;
          <Link
            href="https://retink.io/fap/"
            target="_blank"
            className="text-option underline hover:opacity-80"
          >
            FP
          </Link>
          , or both (per your choice) as you relax and receive continuous
          updates.
        </p>
      </div>
      <div className="w-[355px] h-[381px] px-8 flex flex-col items-center justify-center rounded-[20px] box-shadow">
        <Image src={Customer} width={70} height={72} alt="" />
        <h1 className="mt-4 text-black text-xl text-center font-semibold ">
          Receive and Review
        </h1>
        <p className="max-w-[243px] mt-[18px] text-[15px] text-black text-center">
          The finished content is delivered and you can make corrections that we
          will effect to satisfy your requirements.
        </p>
      </div>
      <div className="w-[355px] h-[381px] px-8 flex flex-col items-center justify-center rounded-[20px] box-shadow">
        <Image src={VectorH} width={70} height={72} alt="" />
        <h1 className="mt-4 text-black text-xl text-center font-semibold ">
          Publish and Monitor your contents&apos; progress
        </h1>
        <p className="max-w-[243px] mt-[18px] text-[15px] text-black text-center">
          The finished content is delivered and you can make corrections that we
          will effect to satisfy your requirements.
        </p>
      </div>
    </div>
  );
};

export default Cards;
