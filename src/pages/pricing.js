import React, { useState, useEffect } from 'react';
import Footer3 from "@/components/footer/Footer3";
import Header from "@/components/header/Header";
import Pricing from "@/components/pricingplan/Pricing4";
import useBodyClass from "@/hooks/useBodyClass";
import Head from "next/head";

export default function PricingPage() {
  useBodyClass("home-dark2");

  return (
    <>
      <Head>
        <title>
          Connect by Vinpro
        </title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/assets/img/sm-logo.svg" />
      </Head>

      <Header />
     
      <Pricing />
   
      <Footer3 />
    </>
  );
}
