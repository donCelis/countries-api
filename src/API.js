const URL = 'https://restcountries.com/v3.1'

const getcountries = async () => {
  const req = await window.fetch(`${URL}/all`)
  const res = req.json()
  return res
}

const getcountry = async (name) => {
  const req = await window.fetch(`${URL}/name/${name}`)
  const res = req.json()
  return res
}

export { getcountries, getcountry }
