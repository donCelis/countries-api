const URL = "https://restcountries.com/v3.1/all";

const getcountries = async () => {
  const req = await fetch(`${URL}`);
  const res = req.json();
  return res;
};

const getcountry = async (name) => {
  const req = await fetch(`${URL}/name/${name}?fullText=true`);
  const res = req.json();
  return res;
};

export { getcountries, getcountry };
