import { useContext, useState } from "react";
import { ContextContries } from "../context";
import Country from "./Country";

const CountriesList = () => {
  const { countries } = useContext(ContextContries);

  return (
    <section className="py-5 countries">
      <div className="container">
        <div className="row gx-md-5 gy-5">
          {countries.map((element, id) => (
            <div
              key={id}
              className="col-12 col-sm-6 col-md-6 col-lg-4 col-xl-3"
            >
              <Country {...element} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CountriesList;
