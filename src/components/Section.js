import SectionImage from "../image/img/section.png";
import { ReactComponent as ShareBlueIcon } from "../image/icon/shareblue.svg";
import { ReactComponent as ShareOrangeIcon } from "../image/icon/shareorange.svg";
import { ReactComponent as ShareGreenIcon } from "../image/icon/sharegreen.svg";

export default function Section() {
  const steps = [
    {
      title: "Ultra fast & secure",
      text: "Proident sit pariatur ullamco consequat id occaecat duis Proident sit pariatur ullamco consequat id occaecat duis",
      icon: ShareOrangeIcon,
    },
    {
      title: "Allow customization",
      text: "Proident sit pariatur ullamco consequat id occaecat duis Proident sit pariatur ullamco consequat id occaecat duis",
      icon: ShareGreenIcon,
    },
    {
      title: "Smart contract",
      text: "Proident sit pariatur ullamco consequat id occaecat duis Proident sit pariatur ullamco consequat id occaecat duis",
      icon: ShareBlueIcon,
    },
  ];

  return (
    <div className="bg-white">
      <div className="container flex flex-col md:flex-row items-center justify-around mx-auto min-h-screen">
        <div className="flex-1 mb-10 md:mb-0 md:mr-10">
          <img src={SectionImage} alt="Section" className="max-w-full h-auto" />
        </div>
        <div className="flex-1">
          <h1 className="text-black text-6xl font-bold pb-8 md:pb-20">
            It's helpful for operation system
          </h1>
          <div className="flex flex-col gap-10">
            {steps.map((step, index) => (
              <div key={index} className="flex items-start gap-6">
                <step.icon className="mt-1" />
                <div>
                  <h2 className="text-xl text-black font-semibold">
                    {step.title}
                  </h2>
                  <p className="text-[#a8a6aa]">{step.text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
