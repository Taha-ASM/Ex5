import DataOneImage from "../image/img/dataone.png";
import DataTwoImage from "../image/img/datatwo.png";

export default function Blog() {
  const data = [
    {
      image: DataOneImage,
      jobe: "Our Creative Team",
      date: "17 June, 2021",
      writer: "by Stive Smithi",
      title: "Running remote offsites and onboardings",
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Placerat fermentum, enim vel adipiscing non. Lacus, nunc, at et vel tellus dignissim quis.",
      textbutton: "Continue",
    },
    {
      image: DataTwoImage,
      jobe: "Create presentations",
      date: "17 June, 2021",
      writer: "by Thomas lews",
      title: "A new look & new ways to collaborate",
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Placerat fermentum, enim vel adipiscing non. Lacus, nunc, at et vel tellus dignissim quis.",
      textbutton: "Continue",
    },
  ];

  return (
    <div className="bg-white py-20">
      <div className="container">
        <h1 className="text-black text-5xl text-center font-semibold mb-10">
          Latest insights news
        </h1>
        <div className="flex justify-center gap-10">
          {data.map((item) => (
            <div className="bg-white border rounded-xl">
              <img src={item.image} alt={item.title} className="w-full" />
              <div className="p-6">
                <div className="flex gap-20 text-gray-500 mb-4">
                  <p>{item.jobe}</p>
                  <p>{item.date}</p>
                  <p>{item.writer}</p>
                </div>
                <h2 className="text-2xl text-black font-bold mb-4">
                  {item.title}
                </h2>
                <p className="text-gray-700 mb-4">{item.text}</p>
                <button className="bg-[#14B2D4] text-white px-4 py-2 rounded">
                  {item.textbutton}
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
