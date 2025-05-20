import Link from "next/link";

export function Footer() {
  return (
    <footer className="w-full bg-chinese-black text-white py-12 px-12">
      <div className="container mx-auto text-center text-gray-300 text-sm">
        <p>
          San Jose's Five Chinatowns | Ryan Johnson | {new Date().getFullYear()}
        </p>
      </div>
    </footer>
  );
}
