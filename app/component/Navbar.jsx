import Link from "next/link";
// import About from "./About";

const Navbar = () => {
  return (
    <div className="flex justify-between mb-2 pt-5 pb-5 bg-slate-800 text-slate-400">
      <Link href={"/"} className="pl-20">logo</Link>
      <Link href={"/about"} className="pr-20">About</Link>
    </div>
  );
};

export default Navbar;
