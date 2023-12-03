import { useEffect, useState } from "react";
import { createClient } from "@supabase/supabase-js";


const supabaseUrl = "https://etfbrqovztmxdtuxzisa.supabase.co"
const supabaseKey = import.meta.env.VITE_SUPABASE_KEY;
const supabase = createClient(supabaseUrl, supabaseKey);

function App() {
  const [countries, setCountries] = useState([]);

  useEffect(() => {
    getCountries();
  }, []);

  async function getCountries() {
    const { data } = await supabase.from("countries").select();
    setCountries(data);
  }

  return (
    <ul>
      {countries.map((country) => (
        <li key={country.id}>{country.name} - {country.capital}</li>
      ))}
    </ul>
  );
}

export default App;