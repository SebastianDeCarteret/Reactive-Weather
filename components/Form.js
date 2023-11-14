import { useState } from "react";

function Form({ location, setLocation }) {
  const [typedLocation, setTypedLocation] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    setLocation(typedLocation);
  }

  return (
    <div className="form">
      <form
        style={{
          display: "flex",
          flexDirection: "row",
          flexWrap: "wrap",
          justifyContent: "center",
        }}
        onSubmit={handleSubmit}
      >
        <label style={{ display: "contents" }} className="city">
          City:
          <input
            onChange={(e) => {
              setTypedLocation(e.target.value);
            }}
            type="text"
          />
        </label>
        <button
          style={{ margin: "0 5px", border: "0" }}
          className="btn btn-primary"
          type="submit"
        >
          Submit
        </button>
      </form>
      <button
        onClick={() => {
          setLocation(""); // show all locations note: the search box isn't cleared
        }}
        style={{ margin: "0 5px", border: "0" }}
        className="btn btn-primary"
      >
        All Locations
      </button>
    </div>
  );
}

export default Form;
