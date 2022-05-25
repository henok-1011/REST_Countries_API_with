import axios from "axios";
import { useEffect, useState } from "react";
import CountryList from "./CountryList";
import Filter from "./Filter";

export default function Home({ countries, setCountries, count, setCount }) {
  const [search, setSearch] = useState();
  const [filter, setFilter] = useState();

  useEffect(() => {
    axios
      .get("https://restcountries.com/v2/all")
      .then((res) => {
        setCountries(res.data);
        setCount(res.data);
      })
      .catch((err) => {
        console.err(err);
      });
  }, []);

  useEffect(() => {
    setCountries(
      count?.filter((c) => {
        return c.name.toLowerCase().includes(search?.toLowerCase());
      })
    );
    console.log(search);
  }, [search]);

  useEffect(() => {
    setCountries(
      count?.filter((c) => {
        return c.region.toLowerCase().includes(filter?.toLowerCase());
      })
    );
    if (filter === "all") {
      setCountries(count);
    }
    console.log(filter);
  }, [filter]);
  return (
    <div className="Home">
      <Filter
        filter={filter}
        setFilter={setFilter}
        search={search}
        setSearch={setSearch}
      />
      <CountryList countries={countries} />
    </div>
  );
}
