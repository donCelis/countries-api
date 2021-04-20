const URL = "https://restcountries.eu/rest/v2";

const getcountries = async () => {
  const data = await fetch(`${URL}/all`);
  const response = data.json();
  return response;
};

const getcountry = async (name) => {
  const data = await fetch(`${URL}/name/${name}?fullText=true`);
  const response = data.json();
  return response;
};

export { getcountries, getcountry };
