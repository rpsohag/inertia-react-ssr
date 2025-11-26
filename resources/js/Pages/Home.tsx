import { Link } from "@inertiajs/react";


export default function Home() {
  return (
    <div>
      <h1>Welcome to Laravel React Project</h1>
      <p className="text-red-500 text-2xl">This is the home page...</p>
      <Link href={route("about")}>About</Link>
    </div>
  );
}