import React, { useState } from "react";
import { bin2dec, isValidBinaryNumber } from "../utils/bin2dec";
import OldTv from "../components/OldTv";
import "./styles.css";

function Home() {
  const [value, setValue] = useState("");
  const [isValid, setIsValid] = useState(false);

  return (
    <div className="home">
      <h1>Bin2Dec</h1>
      <h3>Simple binary to decimal number converter</h3>
      <OldTv>
        <h1 className="text-view">{isValid ? bin2dec(value) : 0}</h1>
      </OldTv>
      <div className="input-container">
        <input
          autoFocus
          type="text"
          onChange={(event) => {
            const binNumb = event.target.value;

            const isValidBin = isValidBinaryNumber(binNumb);

            setIsValid(isValidBin);
            setValue(binNumb);
          }}
        />
      </div>
      {value.trim() !== "" && !isValid && (
        <label
          style={{
            marginTop: "8px",
          }}
        >
          Please type a valid binary number. E.g. 11111001100
        </label>
      )}
    </div>
  );
}

export default Home;
