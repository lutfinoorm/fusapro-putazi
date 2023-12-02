import { useEffect, useState } from "react";
import { createClient } from "@supabase/supabase-js";


const supabaseUrl = "https://etfbrqovztmxdtuxzisa.supabase.co";
const supabaseKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImV0ZmJycW92enRteGR0dXh6aXNhIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDE0OTUwMjQsImV4cCI6MjAxNzA3MTAyNH0.ellzY-jm6K69CrW_CWknQMcZMhm_cezXNiXLIuN8EmY";

// process.env.SUPABASE_KEY
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
        <li key={country.name}>{country.name}</li>
      ))}
    </ul>
  );
}

export default App;