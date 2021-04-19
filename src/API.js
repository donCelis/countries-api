const URL = "https://restcountries.eu/rest/v2";

const getcountries = async () => {
  const data = await fetch(`${URL}/all`);
  const request = data.json();
  return request;
};

const getcountry = async (name) => {
  const data = await fetch(`${URL}/name/${name}`);
  const request = data.json();
  return request;
};

export { getcountries, getcountry };
