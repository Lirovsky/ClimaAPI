import { useEffect, useState } from "react";
import axios from "axios";

import { DataTypes } from "./dataTypes";
import Dados from "./components/Cards";
import MainCard from "./components/MainCard";

import { IoSearch, IoEyeOutline } from "react-icons/io5";
import { FaDroplet } from "react-icons/fa6";
import { MdCompress } from "react-icons/md";
import {
  FaCloud,
  FaWind,
  FaCloudMoonRain,
  FaTemperatureHigh,
} from "react-icons/fa";

function App() {
  const [data, setData] = useState<DataTypes | null>(null);
  const [inputValue, setInputValue] = useState<string>("Lajeado");

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
    } catch (error) {
      console.log((error as Error).message);
    }
  }

  useEffect(() => {
    getData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="min-h-screen bg-slate-900 px-10 text-white">
      <header className="py-4 sm:flex sm:justify-around">
        <div className="flex justify-center gap-x-3 py-8 text-3xl sm:py-0">
          <h2 className="flex">Climática</h2>
          <FaCloudMoonRain className="text-blue-400" />
        </div>
        <form className="flex justify-center gap-x-3">
          <input
            type="text"
            placeholder="Digite a cidade"
            className="rounded-full border-none bg-slate-800 p-3 text-base text-white focus:outline-none"
            name="search"
            value={inputValue}
            onChange={onChangeHandler}
            onKeyDown={onKeyDown}
          />
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
        <div className="mt-20 justify-center gap-x-4 pb-10 md:flex">
          <MainCard
            temp={Math.round(data.main.temp)}
            clima={
              data.weather[0].description[0].toUpperCase() +
              data.weather[0].description.substring(1)
            }
            icon={data.weather[0].icon}
            name={data.name}
            country={data.sys.country}
          />

          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
            <Dados
              data={Math.round(data.main.feels_like)}
              title="Sensação térmica"
              icon={<FaTemperatureHigh />}
              color="text-orange-500"
              metric={"°C"}
            />
            <Dados
              data={data.main.humidity}
              title="Humidade do ar"
              icon={<FaDroplet />}
              color="text-blue-500"
              metric={"%"}
            />
            <Dados
              data={data.clouds.all}
              title="Nuvens"
              icon={<FaCloud />}
              color="text-sky-300"
              metric={"%"}
            />
            <Dados
              data={data.visibility / 1000}
              title="Visibilidade"
              icon={<IoEyeOutline />}
              color="text-emerald-400"
              metric={"km"}
            />
            <Dados
              data={Math.floor(data.wind.speed * 10)}
              title="Velocidade Vento"
              icon={<FaWind />}
              color="text-rose-500"
              metric={"km/h"}
            />
            <Dados
              data={data.main.pressure}
              title="Pressão atmosférica"
              icon={<MdCompress />}
              color="text-purple-500"
              metric={"hPa"}
            />
          </div>
        </div>
      )}
    </div>
  );
}

export default App;
