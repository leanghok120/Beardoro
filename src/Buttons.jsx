import { RotateCw } from "lucide-react";

export function Reset({ onClick }) {
  return (
    <button className="text-white p-2 rounded-full" onClick={onClick}>
      {<RotateCw />}
    </button>
  );
}

export function Start({ onClick, isActive }) {
  return (
    <button
      className="font-bold text-2xl bg-white rounded-full py-1.5 px-8"
      onClick={onClick}
    >
      {isActive ? "pause" : "start"}
    </button>
  );
}
