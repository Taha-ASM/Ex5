import React from "react";
import { ReactComponent as StepOneIcon } from "../image/icon/stepone.svg";
import { ReactComponent as StepSecondIcon } from "../image/icon/stepsecond.svg";
import { ReactComponent as StepThirdIcon } from "../image/icon/stepthird.svg";
import { ReactComponent as StepForthIcon } from "../image/icon/stepforth.svg";
import { ReactComponent as ArrowIcon } from "../image/icon/arrow.svg";

export default function Steps() {
  const steps = [
    {
      icon: StepOneIcon,
      title: "Clean Code",
      text: "Lorem ipsum dolor sit amet cete adipiscing elitipsum.",
      bottomicon: ArrowIcon,
    },
    {
      icon: StepSecondIcon,
      title: "Data Analytic",
      text: "Lorem ipsum dolor sit amet cete adipiscing elitipsum.",
      bottomicon: ArrowIcon,
    },
    {
      icon: StepThirdIcon,
      title: "Fully Secured",
      text: "Lorem ipsum dolor sit amet cete adipiscing elitipsum.",
      bottomicon: ArrowIcon,
    },
    {
      icon: StepForthIcon,
      title: "24/7 Support",
      text: "Lorem ipsum dolor sit amet cete adipiscing elitipsum.",
      bottomicon: ArrowIcon,
    },
  ];

  return (
    <div className="bg-white py-10">
      <div className="container mx-auto">
        <h1 className="text-center text-black text-4xl font-bold mb-20">
          We Provide the Best Features for Customers
        </h1>

        <div className="flex flex-row justify-center gap-6">
          {steps.map((step, index) => (
            <div
              key={index}
              className="relative py-10 rounded-lg text-center w-[22rem] h-[28rem] border border-black"
            >
              <div className="flex flex-col justify-between h-full">
                <div>
                  <step.icon className="mx-auto mb-4" />
                  <h2 className="text-3xl font-semibold mb-5 text-black">
                    {step.title}
                  </h2>
                  <p className="text-sm w-80 ml-4 text-[#a8a6aa]">{step.text}</p>
                </div>
                <step.bottomicon className="mx-auto mb-10" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
