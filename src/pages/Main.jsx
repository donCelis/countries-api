import { useEffect, useContext } from "react";
import { getcountries } from "../API";
import { ContextContries } from "../context";
import Countries from "../components/Countries";

const Main = () => {
  const { countries, setContries } = useContext(ContextContries);
  useEffect(() => {
    const getData = async () => {
      const request = await getcountries();
      setContries(request);
    };
    getData();
  }, [setContries]);

  return countries.lenght === 0 ? "Loading" : <Countries />;
};
export default Main;
