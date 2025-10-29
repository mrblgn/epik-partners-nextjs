import Slider from "@/components/home/slider";
import Link from "next/link";

export default function Home() {
  return (
    <div className="flex flex-col">
      <Slider />
      <p>Home Page</p>
    </div>
  );
}
