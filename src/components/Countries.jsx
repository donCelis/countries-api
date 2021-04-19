import { useContext } from "react";
import { ContextContries } from "../context";
import Card from "./Card";

const Countries = () => {
  const { countries } = useContext(ContextContries);
  return (
    <section className="py-5">
      <div className="container">
        <div className="row">
          {countries.map((element, id) => (
            <div
              key={id}
              className="col-12 col-sm-6 col-md-6 col-lg-4 col-xl-3 mb-4"
            >
              <Card {...element} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Countries;
