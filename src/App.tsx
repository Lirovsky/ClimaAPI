import { useEffect, useState } from "react";
import { format } from "date-fns";
import axios from "axios";
import { DataTypes } from "./dataTypes";

import { IoSearch, IoLocationOutline, IoEyeOutline } from "react-icons/io5";
import { FaDroplet } from "react-icons/fa6";
import { MdCompress } from "react-icons/md";
import {
  FaRegCalendar,
  FaCloud,
  FaWind,
  FaCloudMoonRain,
  FaTemperatureHigh,
} from "react-icons/fa";

function App() {
  const [data, setData] = useState<DataTypes | null>(null);
  const [inputValue, setInputValue] = useState<string>("Lajeado");
  const [error, setError] = useState<string>("");

  const API_KEY = "fdd48281bc1e2098081fd54dbbaeba3d";

  const onChangeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(event.target.value);
  };

  const onKeyDown = (event: React.KeyboardEvent<HTMLDivElement>) => {
    if (event.key === "Enter") {
      event.preventDefault();
    }
  };

  async function getData() {
    if (!inputValue) return;
    try {
      const response = await axios.get(
        `https://api.openweathermap.org/data/2.5/weather?q=${inputValue}&appid=${API_KEY}&lang=pt_br&units=metric`,
      );
      setData(response.data);
      setInputValue("");
      setError("");
    } catch (error: unknown) {
      setError(error.response.status);
    }
  }

  useEffect(() => {
    getData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="min-h-screen bg-slate-900 px-10 text-white">
      <header className="py-4 sm:flex sm:justify-between">
        <div className="flex justify-center gap-x-3 py-8 text-3xl sm:py-0">
          <h2 className="flex">Climática</h2>
          <FaCloudMoonRain className="text-blue-400" />
        </div>
        <form className="flex justify-center gap-x-3">
          <div>
            <input
              type="text"
              placeholder="Digite a cidade"
              className="rounded-full border-none bg-slate-800 p-3 text-base text-white focus:outline-none"
              value={inputValue}
              onChange={onChangeHandler}
              onKeyDown={onKeyDown}
            />
            <div className="flex ps-3">
              {error ? (
                <p className="text-rose-500">
                  {error !== "200" && "Cidade não encontrada"}
                </p>
              ) : null}
            </div>
          </div>
          <button
            type="button"
            id="searchBtn"
            className="flex h-12 cursor-pointer items-center gap-x-2 rounded-full border-none bg-blue-400 px-4 py-3 text-base text-white"
            onClick={() => getData()}
          >
            <IoSearch /> Pesquisar
          </button>
        </form>
      </header>
      {data && (
        <div className="mt-10 justify-center gap-x-4 md:flex">
          <div className="mb-4 rounded-2xl bg-slate-800 p-4 sm:w-full md:mb-0 md:w-96 lg:p-4">
            <p className="text-slate-400 md:pb-8 lg:pb-0">Agora</p>
            <div className="flex items-center gap-x-10 md:pb-5 lg:pb-0">
              <div>
                <h2 className="mt-2 text-3xl font-medium">
                  {Math.round(data.main.temp)} &deg;C
                </h2>
                <p className="text-lg">
                  {data.weather[0].description[0].toUpperCase() +
                    data.weather[0].description.substring(1)}
                </p>
              </div>
              <img
                src={`https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`}
                alt=""
              />
            </div>

            <hr />
            <div className="mt-3 text-sm md:pt-5 lg:pt-0">
              <p className="flex items-center gap-x-3 text-lg">
                <FaRegCalendar className="text-yellow-400" />{" "}
                {format(new Date(), "dd / MMM / yyyy")}
              </p>
              <p className="flex items-center gap-x-3 text-lg">
                <IoLocationOutline className="text-lime-600" /> {data.name},{" "}
                {data.sys.country}
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
            <div className="rounded-2xl bg-slate-800 p-4 xl:w-64">
              <div className="mb-3 flex justify-between">
                <p>Sensação térmica</p>
              </div>
              <div className="flex justify-between text-orange-500">
                <FaTemperatureHigh className="text-3xl" />
                <h2>{Math.round(data.main.feels_like)} &deg;C</h2>
              </div>
            </div>

            <div className="rounded-2xl bg-slate-800 p-4">
              <div className="mb-3 flex justify-between">
                <p>Humidade do ar</p>
              </div>
              <div className="flex justify-between text-blue-500">
                <FaDroplet className="text-3xl" />
                <h2>{data.main.humidity} %</h2>
              </div>
            </div>

            <div className="rounded-2xl bg-slate-800 p-4">
              <div className="mb-3 flex justify-between">
                <p>Nuvens</p>
              </div>
              <div className="flex justify-between text-sky-300">
                <FaCloud className="text-3xl" />
                <h2>{data.clouds.all} %</h2>
              </div>
            </div>

            <div className="rounded-2xl bg-slate-800 p-4">
              <div className="mb-3 flex justify-between">
                <p>Visibilidade</p>
              </div>
              <div className="flex justify-between text-emerald-400">
                <IoEyeOutline className="text-3xl" />
                <h2>{(data.visibility / 1000).toFixed(1)} km</h2>
              </div>
            </div>

            <div className="rounded-2xl bg-slate-800 p-4">
              <div className="mb-3 flex justify-between">
                <p>Velocidade Vento</p>
              </div>
              <div className="flex justify-between text-rose-500">
                <FaWind className="text-3xl" />
                <h2>{Math.floor(data.wind.speed * 10)} km/h</h2>
              </div>
            </div>

            <div className="rounded-2xl bg-slate-800 p-4">
              <div className="mb-3 flex justify-between">
                <p>Pressão atmosférica</p>
              </div>
              <div className="flex justify-between text-purple-500">
                <MdCompress className="text-3xl" />
                <h2>{data.main.pressure} hPa</h2>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default App;
