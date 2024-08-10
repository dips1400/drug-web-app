import React, { useEffect, useState } from "react";
import SearchIcon from "../assets/images/search.png";
import "./Search.css";
import { useNavigate } from "react-router-dom";

const Search = () => {
  const navigate = useNavigate();

  const [data, setData] = useState([]); //for storing, accessing and performing on data
  const [filterdata, setFilterdata] = useState([]); //setting data after filtering out the name
  const [search, setSearch] = useState("");
  const [isClicked, setIsClicked] = useState(false);

  useEffect(() => {
    if (search.length > 0) {
      //if search length is greater than 0
      fetch(`https://rxnav.nlm.nih.gov/REST/drugs.json?name=${search}`)
        .then((response) => response.json())
        .then((data) => {
          //first getting concept if there and then filtering out only SBD group
          const concepts =
            data?.drugGroup?.conceptGroup?.filter(
              (group) => group.tty === "SBD"
            ) || [];
          //then storing the conceptproperties in data if present
          const drugsList =
            concepts.flatMap((group) => group.conceptProperties) || [];
          setData(drugsList);
          setFilterdata(
            drugsList.filter((drug) =>
              drug.name.toLowerCase().includes(search.toLowerCase())
            )
          );
        })
        .catch((error) => console.error("Error fetching data:", error));
    } else {
      setFilterdata([]);
    }
  }, [search]);

  const keyTyped = (e) => {
    setSearch(e.target.value);
  };

  const handleDrugClick = (drug) => {
    navigate(`/drug/${drug.rxcui}`, { state: { drug } });
  };

  const handleIconClick = () => {
    setIsClicked(true);

    // Check if there's a filtered drug to navigate to
    if (filterdata.length > 0) {
      const selectedDrug = filterdata[0]; 
      navigate(`/drug/${selectedDrug.rxcui}`, {
        state: { drug: selectedDrug },
      });
    }
    setTimeout(() => setIsClicked(false), 300);
  };

  return (
    <div className="search-container">
      Search Your drug here
      <br></br>
      <div className="display">
        <div className="search-bar">
          <input type="text" value={search} onChange={keyTyped} />
          <div
            className={`image-press ${isClicked ? "clicked" : ""}`}
            onClick={handleIconClick}
          >
            <img src={SearchIcon} alt="search" width={20} height={20} />
          </div>
        </div>
        <div className="drug-list">
          {filterdata.length > 0 && (
            <ul>
              {filterdata.map((drug) => (
                <li key={drug.rxcui} onClick={() => handleDrugClick(drug)}>
                  {drug.name}
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>
    </div>
  );
};

export default Search;
