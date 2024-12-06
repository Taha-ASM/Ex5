import React, { useEffect, useState } from "react";
import { ReactComponent as PinIcon } from "../image/icon/pin.svg";

export default function Comment() {
  const [user, setUser] = useState([]);

  async function getUser() {
    const res = await fetch("https://api.github.com/users");
    setUser(await res.json());
  }

  useEffect(() => {
    getUser();
  }, []);

  return (
    <div className="bg-white py-20">
      <div className="container mx-auto">
        <div className="text-center mb-10">
          <h1 className="text-5xl font-semibold mb-4 text-black">
            Let’s see our User’s Review
          </h1>
          <p className="text-gray-500 pt-6">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla
            scelerisque tellus isnterdum <br /> venenatis auctor et nibh.
            Rhoncus a, sed lobortis nisi.
          </p>
        </div>
        <div className="flex justify-center gap-20">
          {user.slice(0, 3).map((i) => (
            <div className="rounded-lg pl-10 pr-10 py-16 w-96 drop-shadow shadow-2xl">
              <div className="flex items-start gap-4">
                <PinIcon className="w-20 h-20" />
                <p className="text-gray-600">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Blandit elit nunc donec elit iaculis arcu. Quis fe........
                </p>
              </div>
              <div className="mt-6 flex items-center">
                <img
                  src={i.avatar_url}
                  alt={i.login}
                  className="w-16 h-16 rounded-full border-2 border-purple-500"
                />
                <div className="ml-4">
                  <p className="text-black text-xl font-semibold">{i.login}</p>
                  <p className="text-gray-500">Marketing Manager</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
