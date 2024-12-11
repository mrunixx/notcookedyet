import axios from "axios";
import { useEffect, useState, useRef } from "react";

const UniversityAutoComplete = ({ value, setValue }) => {
  const [suggestion, setSuggestion] = useState(" ");
  const inputRef = useRef();
  const stateRef = useRef();
   stateRef.current = value;

  const findUniversitySuggestion = (phrase) => {
    return new Promise((resolve, reject) => {
      axios.get(`http://universities.hipolabs.com/search?name=${phrase}&country=australia`).then((result) => {
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
      setSuggestion("")
    }

    setValue(newUserVal )
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
    inputRef.current.selectionStart = stateRef.current.length;
    inputRef.current.selectionEnd = stateRef.current.length + suggestion.length; 
  }, [suggestion])

  return <input type="text" ref={inputRef} name="universityInput" value={value + suggestion} onChange={(e) => handleChange(e)} />;
};

export default UniversityAutoComplete;
