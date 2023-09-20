import React from "react";
import {
  CustomerReviews,
  Footer,
  PopularProducts,
  Services,
  Subscribe,
  SpecialOffers,
  SuperQuality,
  Hero,
} from "./sections";
import Navbar from "./components/Navbar";
const App = () => (
  <main className="relative">
    <Navbar />
    <section className="xl:padding-l wide:padding-r padding-b">
      <Hero />
    </section>
    <section className="padding">
      <PopularProducts />
    </section>
    <section className="padding">
      <SuperQuality />
    </section>
    <section className="padding-x py-10">
      <Services />
    </section>
    <section className="padding">
      <SpecialOffers />
    </section>
    <section className="bg-pale-blue padding">
      <CustomerReviews />
    </section>{" "}
    <section className="padding-x sm:py-32 py-16 w-full">
      <Subscribe />
    </section>{" "}
    <section className="bg-black padding-x padding-t pb-8">
      <Footer />
    </section>
  </main>
);

export default App;
