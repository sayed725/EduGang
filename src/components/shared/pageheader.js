import Link from "next/link";

export default function PageHeader ({title}) {
  return (
    <div className="text-white bg-linear-to-r from-cyan-500 to-blue-500 text-center py-5 lg:py-8">
      <h1 className=" text-4xl lg:text-6xl font-bold tracking-wider">{title}</h1>
      <p className="py-3 lg:py-5 tracking-wider">
        <Link href="/" className="mr-4">Home • <span className="ml-4">{title}</span></Link>
      </p>
    </div>
  );
};

