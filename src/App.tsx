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
  return (
    <div className="min-h-screen bg-slate-900 px-4 text-white">
      <header className="py-4 sm:flex sm:items-center sm:justify-between">
        <div className="flex items-center justify-center gap-x-3 py-8 text-3xl sm:py-0">
          <h2 className="flex">Climática</h2>
          <FaCloudMoonRain className="text-blue-400" />
        </div>
        <div className="flex justify-center gap-x-3">
          <input
            type="text"
            placeholder="Digite a cidade"
            className="rounded-full border-none bg-slate-800 p-3 text-base text-white focus:outline-none"
          />
          <button
            type="button"
            id="searchBtn"
            className="flex cursor-pointer items-center gap-x-2 rounded-full border-none bg-blue-400 px-4 py-3 text-base text-white"
          >
            <IoSearch /> Pesquisar
          </button>
        </div>
      </header>
      <div className="mt-10 justify-center gap-x-4 md:flex">
        <div className="mb-4 rounded-2xl bg-slate-800 p-4 sm:w-full md:mb-0 md:w-96 lg:p-4">
          <p className="text-slate-400 md:pb-8 lg:pb-0">Agora</p>
          <div className="flex items-center gap-x-10 md:pb-5 lg:pb-0">
            <div>
              <h2 className="mt-2 text-3xl font-medium">20 &deg;C</h2>
              <p className="text-lg">Céu limpo</p>
            </div>
            <img src={`https://openweathermap.org/img/wn/10d@2x.png`} alt="" />
          </div>

          <hr />
          <div className="mt-3 text-sm md:pt-5 lg:pt-0">
            <p className="flex items-center gap-x-3 text-lg">
              <FaRegCalendar /> 25/11/24
            </p>
            <p className="flex items-center gap-x-3 text-lg">
              <IoLocationOutline /> Lajeado, BR
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
              <h2>25 &deg;C</h2>
            </div>
          </div>

          <div className="rounded-2xl bg-slate-800 p-4">
            <div className="mb-3 flex justify-between">
              <p>Humidade do ar</p>
            </div>
            <div className="flex justify-between text-blue-500">
              <FaDroplet className="text-3xl" />
              <h2>10 %</h2>
            </div>
          </div>

          <div className="rounded-2xl bg-slate-800 p-4">
            <div className="mb-3 flex justify-between">
              <p>Nuvens</p>
            </div>
            <div className="flex justify-between text-sky-300">
              <FaCloud className="text-3xl" />
              <h2>50 %</h2>
            </div>
          </div>

          <div className="rounded-2xl bg-slate-800 p-4">
            <div className="mb-3 flex justify-between">
              <p>Visibilidade</p>
            </div>
            <div className="flex justify-between text-emerald-400">
              <IoEyeOutline className="text-3xl" />
              <h2>5 km</h2>
            </div>
          </div>

          <div className="rounded-2xl bg-slate-800 p-4">
            <div className="mb-3 flex justify-between">
              <p>Velocidade Vento</p>
            </div>
            <div className="flex justify-between text-rose-500">
              <FaWind className="text-3xl" />
              <h2>8 km/h</h2>
            </div>
          </div>

          <div className="rounded-2xl bg-slate-800 p-4">
            <div className="mb-3 flex justify-between">
              <p>Pressão atmosférica</p>
            </div>
            <div className="flex justify-between text-purple-500">
              <MdCompress className="text-3xl" />
              <h2>1050 hPa</h2>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
