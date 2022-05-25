import "./styles/filter.css";
import React from "react";

export default function Filer({ filter, setFilter, search, setSearch }) {
  return (
    <div className="Filter container">
      <div class="input-icons">
        <i class="fa fa-search icon"></i>
        <input
          class="input-field"
          placeholder="Search for countries..."
          value={search}
          onChange={(e) => {
            setSearch(e.target.value);
          }}
        />
      </div>
      <select
        value={filter}
        onChange={(e) => {
          setFilter(e.target.value);
        }}
        name="dog-names"
        id="dog-names"
      >
        <option value="all">Fillter by Region</option>
        <option value="africa">Africa</option>
        <option value="america">America</option>
        <option value="asia">Asia</option>
        <option value="europ">Europ</option>
        <option value="oceania">oceania</option>
      </select>
    </div>
  );
}
