import { useEffect, useContext } from "react";
import { getcountries } from "../API";
import { ContextContries } from "../context";
import Countries from "../components/Countries";

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
    <div className="text-center loading">Loading...</div>
  ) : (
    <Countries />
  );
};
export default Home;
