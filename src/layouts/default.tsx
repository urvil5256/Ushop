import { Link } from "@nextui-org/link";

import { Slider } from "@/components/carousel";
import { Navbar } from "@/components/navbar";

export default function DefaultLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="relative flex flex-col h-screen">
      <Navbar />
      <main className="container mx-auto max-w-9xl px-6 flex-grow">
        <Slider />
        {children}
      </main>
      <footer className="w-full flex items-center justify-center py-3">
        <Link
          isExternal
          className="flex items-center gap-1 text-current"
          title="UShop"
        >
          <span className="text-default-600">Powered by</span>
          {/* <p className="text-primary">
            <Avatar
              isBordered
              color="default"
              radius="md"
              size="sm"
              src="/logo.png"
            />
          </p> */}
          <p className="bg-gradient-to-r from-blue-600 via-green-500 to-indigo-400 inline-block text-transparent bg-clip-text font-bold text-2xl">
            UShop
          </p>
        </Link>
      </footer>
    </div>
  );
}
