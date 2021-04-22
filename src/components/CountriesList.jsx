import { useEffect, useContext } from "react";
import { getcountries } from "../API";
import { AppContext } from "../context";
import Country from "./Country";

const CountriesList = () => {
  const { countries, setContries, filtered, setFiltered } = useContext(
    AppContext
  );
  useEffect(() => {
    const getData = async () => {
      const response = await getcountries();
      setContries(response);
      setFiltered(response);
    };
    if (countries.length === 0) {
      getData();
    }
  }, []);

  return countries.length === 0 ? (
    <div className="text-center loading py-5">Loading...</div>
  ) : filtered.length === 0 ? (
    <div className="text-center loading py-5">Busqueda no encontrada</div>
  ) : (
    <section className="countries">
      <div className="container">
        <div className="row gx-md-5 gy-5">
          {filtered.map((element, id) => (
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
