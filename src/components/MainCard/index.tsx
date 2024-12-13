import { format } from "date-fns";
import { IoLocationOutline } from "react-icons/io5";
import { FaRegCalendar } from "react-icons/fa";

interface MainCardProps {
  temp: number;
  clima: string;
  icon: string;
  name: string;
  country: string;
}

export default function MainCard({
  temp,
  clima,
  icon,
  name,
  country,
}: MainCardProps) {
  return (
    <div className="mb-4 rounded-2xl bg-slate-800 p-4 sm:w-full md:mb-0 md:w-80 lg:p-4">
      <p className="text-slate-400 md:pb-8 lg:pb-0">Agora</p>
      <div className="flex items-center gap-x-10 md:pb-5 lg:pb-0">
        <div>
          <h2 className="mt-2 text-3xl font-medium">{temp} &deg;C</h2>
          <p className="text-lg">{clima}</p>
        </div>
        <img src={`https://openweathermap.org/img/wn/${icon}@2x.png`} alt="" />
      </div>

      <hr />
      <div className="mt-3 text-sm md:pt-5 lg:pt-0">
        <p className="flex items-center gap-x-3 text-lg">
          <FaRegCalendar className="text-yellow-400" />{" "}
          {format(new Date(), "dd / MMM / yyyy")}
        </p>
        <p className="flex items-center gap-x-3 text-lg">
          <IoLocationOutline className="text-lime-600" />
          {`${name}, ${country}`}
        </p>
      </div>
    </div>
  );
}
