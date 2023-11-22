"use client"
import { ChakraProvider } from '@chakra-ui/react'
import Navbar from "../components/Navbar"
import HeroSection from '../components/HeroSection'
import Features from '../components/Features'
import Pricing from '../components/Pricing'
import Footer from '../components/Footer'

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <ChakraProvider>
          <Navbar/>
          <HeroSection/>
          <Features/>
          <Pricing/>
          <Footer/>
          {children}
        </ChakraProvider>  
      </body>
    </html>
  )
}
