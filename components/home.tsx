import { Card } from "./card";
import Link from "next/link";

function HomePage() {
  return (
    <>
      <h1 className="text-center font-bold text-5xl mt-6">Home Page</h1>
      <p className="text-center mt-4 text-lg">
        This is nextjs website made to practice {""}
        <Link href="https://redux-toolkit.js.org/">react-redux.</Link>
      </p>
      <div className="mt-10 px-5">
      <Card />
      </div>
    </>
  );
}

export default HomePage;
