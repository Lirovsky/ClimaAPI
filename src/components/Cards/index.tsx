import { ReactElement } from "react";

interface DadosProps {
  data: number;
  title: string;
  icon: ReactElement;
  color: string;
  metric: string;
}

export default function Dados({
  data,
  title,
  icon,
  color,
  metric,
}: DadosProps) {
  return (
    <div className="rounded-2xl bg-slate-800 p-4 lg:w-48">
      <div className="mb-3 flex justify-between">
        <p>{title}</p>
      </div>
      <div className={`flex justify-between ${color}`}>
        <div className="text-3xl">{icon}</div>
        <h2>{`${data} ${metric}`}</h2>
      </div>
    </div>
  );
}
