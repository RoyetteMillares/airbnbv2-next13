import { Nunito} from "next/font/google"
import './globals.css'
import Navbar from "./components/navbar/Navbar";
import ClientOnly from "./components/ClientOnly";
import Modals from "./components/modals/Modals";

export const metadata = {
  title: "AirBnb",
  description: "AirBnb Clone App",
};

const font = Nunito({
  subsets:['latin']
})
export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={font.className}>
        <ClientOnly>
          <Modals isOpen/>
          <Navbar />
          </ClientOnly>
        {children}
      </body>
    </html>
  )
}
