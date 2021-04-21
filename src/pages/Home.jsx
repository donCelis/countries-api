import { useEffect, useContext } from "react";
import { getcountries } from "../API";
import { ContextContries } from "../context";
import Header from "../components/Header";
import CountriesList from "../components/CountriesList";

const Home = () => {
  const { countries, setContries } = useContext(ContextContries);
  useEffect(() => {
    const getData = async () => {
      const response = await getcountries();
      setContries(response);
    };
    getData();
  }, []);

  return countries.length === 0 ? (
    <section className="py-5">
      <div className="text-center loading">Loading...</div>
    </section>
  ) : (
    <>
      <Header />
      <CountriesList />
    </>
  );
};
export default Home;
