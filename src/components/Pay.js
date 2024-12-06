import { ReactComponent as LinArrowIcon } from "../image/icon/linarrow.svg";

export default function Pay() {
  const condition = [
    {
      title: "Start-up",
      icon: LinArrowIcon,
      price: "$10/mo",
      con1: "Easy Customizable",
      con2: "Commercial license",
      con3: "Single user license",
      con4: "Hotline support 24/7",
      button: "TRY THIS PACKAGE",
    },
    {
      title: "Classic",
      icon: LinArrowIcon,
      price: "$30/mo",
      con1: "Easy Customizable",
      con2: "Commercial license",
      con3: "5 user licenses",
      con4: "Hotline support 24/7",
      button: "TRY THIS PACKAGE",
    },
    {
      title: "Premium",
      icon: LinArrowIcon,
      price: "$49/mo",
      con1: "Easy Customizable",
      con2: "Commercial license",
      con3: "10 user licenses",
      con4: "Hotline support 24/7",
      button: "TRY THIS PACKAGE",
    },
  ];

  return (
    <div className="bg-white py-20">
      <div className="container mx-auto">
        <div className="flex flex-col items-center justify-center gap-10">
          <h1 className="text-black text-5xl font-semibold">
            Choose your best pricing plan
          </h1>
          <p className="flex items-center gap-7 text-xl text-black">
            Added for Monthly
            <input
              type="checkbox"
              className="toggle toggle-info"
              defaultChecked
            />
            Yearly
          </p>
        </div>
        <div className="flex justify-center gap-10 mt-10">
          {condition.map((i, index) => (
            <div
              key={index}
              className={`flex flex-col items-center p-8 rounded-lg shadow-lg ${
                i.title === "Classic" ? "bg-purple-500 text-white" : "bg-white"
              }`}
              style={{ width: "300px", height: "400px" }}
            >
              <h2
                className={`text-2xl font-bold my-4 ${
                  i.title === "Classic" ? "text-white" : "text-black"
                }`}
              >
                {i.title}
              </h2>
              <i.icon
                className={`fill-black ${
                  i.title === "Classic" ? "stroke-white" : "stroke-black"
                }`}
              />
              <p
                className={`text-4xl font-semibold mt-2 ${
                  i.title === "Classic" ? "text-white" : "text-black"
                }`}
              >
                {i.price}
              </p>

              <ul className="text-lg mt-4 space-y-2">
                <li className="text-sm text-center text-[#a8a6aa]">{i.con1}</li>
                <li className="text-sm text-center text-[#a8a6aa]">{i.con2}</li>
                <li className="text-sm text-center text-[#a8a6aa]">{i.con3}</li>
                <li className="text-sm text-center text-[#a8a6aa]">{i.con4}</li>
              </ul>

              <button
                className={`mt-6 py-3 px-8 rounded ${
                  i.title === "Classic"
                    ? "bg-[#42B4EE] text-white text-md"
                    : "bg-[#ECF7FD] text-[#42B4EE]"
                }`}
              >
                {i.button}
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
