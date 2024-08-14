import { Separator } from "../ui/separator";
import Link from "next/link";
import dayjs from "dayjs";

export function Footer() {
  return (
    <footer className="bg-gray-50 py-16">
      <div className="max-w-screen-2xl mx-auto space-y-16">
        <div className="grid grid-cols-5 gap-6">
          <div className="space-y-2.5">
            <div>
              <h3 className="text-gray-700">Help Center</h3>
            </div>
            <div className="grid space-y-4 xl:text-lg">
              <Link href="/">Resources</Link>
              <Link href="/">Shipping guide</Link>
              <Link href="/">Refunds</Link>
              <Link href="/">FAQ</Link>
            </div>
          </div>
          <div className="space-y-2.5">
            <div>
              <h3 className="text-gray-700">Our Division</h3>
            </div>
            <div className="grid space-y-4 xl:text-lg">
              <Link href="/">Logistics Hub</Link>
              <Link href="/">Supply Chain management</Link>
              <Link href="/">Global operation</Link>
              <Link href="/">Technology solutions</Link>
            </div>
          </div>
          <div className="col-start-5 space-y-2.5">
            <div>
              <h3 className="text-gray-700">Contact</h3>
            </div>
            <div className="grid space-y-4 xl:text-lg">
              <Link
                className="flex items-center gap-2"
                href="mailto:demo@next-auth-test-ten-kappa.vercel.app"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={2}
                  stroke="currentColor"
                  className="size-5"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75"
                  />
                </svg>

                <span>Send an Email</span>
              </Link>
              <Link
                className="flex items-center gap-2"
                href="tel:+1 (555) 912-8725"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={2}
                  stroke="currentColor"
                  className="size-5"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 0 1-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 0 0-1.091-.852H4.5A2.25 2.25 0 0 0 2.25 4.5v2.25Z"
                  />
                </svg>

                <span>Call us on mobile</span>
              </Link>
              <Link
                href="https://maps.app.goo.gl/TMUp9gHMVMQyDoWq5"
                className="flex items-center gap-2"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="size-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M2.25 21h19.5m-18-18v18m10.5-18v18m6-13.5V21M6.75 6.75h.75m-.75 3h.75m-.75 3h.75m3-6h.75m-.75 3h.75m-.75 3h.75M6.75 21v-3.375c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21M3 3h12m-.75 4.5H21m-3.75 3.75h.008v.008h-.008v-.008Zm0 3h.008v.008h-.008v-.008Zm0 3h.008v.008h-.008v-.008Z"
                  />
                </svg>

                <span>Vist our office</span>
              </Link>
            </div>
          </div>
        </div>

        <Separator className="h-[1px] bg-gray-400" />
        <div className="flex flex-col lg:flex-row justify-between items-center">
          <Link href="/">Privacy & Terms</Link>
          <Link href="/">© {dayjs().year()} next-auth-test</Link>
          <Link href="/">Contact us</Link>
        </div>
      </div>
    </footer>
  );
}
