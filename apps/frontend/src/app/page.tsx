import { somar } from "@barba/core";

export default function Home() {
  return (
    <div className="flex flex-1 justify-center">
      {somar(50, 25)}
    </div>
  )
}
