import {Inter} from "next/font/google"

import "../../src/app/globals.css"
import "../../src/app/reset.css"

import Header from "../../components/Header/index";
import Footer from "../../components/Footer/index";


const interFontFamily = Inter({subsets: ["latin"]});

export default function RootLayouth({children}) {
  return(
    <html lang="tr" className={interFontFamily.className}>
     <body className="container">
      <Header/>
     <main> {children}</main>
      <Footer/>
      </body>
    </html>
  );
}