import axios from "axios";
import { useEffect, useState, useRef } from "react";

const UniversityAutoComplete = ({ value, setValue }) => {
  const [suggestion, setSuggestion] = useState("");
  const inputRef = useRef();
  const stateRef = useRef();
  stateRef.current = value;

  const findUniversitySuggestion = (phrase) => {
    return new Promise((resolve, reject) => {
      axios
        .get(`http://universities.hipolabs.com/search?name=${phrase}&country=australia`, {
          headers: {
            'Access-Control-Allow-Origin': '*', // Use your domain here instead of '*'
          }
        })
        .then((result) => {
          const found = result.data.find((university) => {
            return university.name.indexOf(phrase) === 0;
          });
          if (found) {
            resolve(found.name);
          } else {
            reject();
          }
        });
    });
  };

  const handleChange = (e) => {
    const targetVal = e.target.value;
    const newUserVal = targetVal;

    const diff = newUserVal.substr(value.length);

    if (suggestion.indexOf(diff) === 0) {
      setSuggestion(suggestion.substr(diff.length));
    } else {
      setSuggestion("");
    }

    setValue(newUserVal);
  };

  const handleKeyDown = (e) => {
    if (e.key === "Tab" && suggestion.length > 0) {
      e.preventDefault(); // Prevent default tabbing behavior
      setValue(value + suggestion);
      setSuggestion(""); // Clear suggestion after autocomplete
    }
  };

  useEffect(() => {
    if (value.length > 0) {
      findUniversitySuggestion(value)
        .then((universityName) => {
          const stillFits = universityName.indexOf(stateRef.current) === 0;
          if (stillFits) {
            setSuggestion(universityName.substr(stateRef.current.length));
          } else {
            setSuggestion("");
          }
        })
        .catch(() => {
          setSuggestion("");
        });
    } else {
      setSuggestion("");
    }
  }, [value]);

  useEffect(() => {
    if (inputRef.current) {
      inputRef.current.selectionStart = stateRef.current.length;
      inputRef.current.selectionEnd = stateRef.current.length + suggestion.length;
    }
  }, [suggestion]);

  return (
    <input
      type="text"
      ref={inputRef}
      name="universityInput"
      value={value + suggestion}
      onChange={handleChange}
      onKeyDown={handleKeyDown}
    />
  );
};

export default UniversityAutoComplete;
