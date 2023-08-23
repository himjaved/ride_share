import React, { useState } from "react";
import "./location.css";

export default function Location() {
  let [pickUp, setPickUp] = useState("");
  let [destination, setDestination] = useState("");
  let [message, setMessage] = useState("");

  function handleSubmit(event) {
    event.preventDefault();
    setMessage(
      `Your Trip is starting from ${pickUp} and going to ${destination} is getting ready!`
    );
  }
  function updatePickUp(event) {
    setPickUp(event.target.value);
  }
  function updateDestination(event) {
    setDestination(event.target.value);
  }

  return (
    <div className="location">
      <h1>Welcome to RideShare App </h1>
      <form onSubmit={handleSubmit}>
        <label htmlFor="pick-up">Pick-up Location:</label>
        <input
          className="pick-up"
          type="search"
          name="pick-up Location"
          id="pick-up"
          onChange={updatePickUp}
        />
        <label htmlFor="destination">Destination:</label>
        <input
          className="Destination "
          type="search"
          id="destination"
          onChange={updateDestination}
        />
        <input type="submit" value="Start Trip" />
      </form>
      <p>{message}</p>
    </div>
  );
}
