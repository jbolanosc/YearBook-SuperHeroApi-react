import React from "react";

export function getRandomInt(max, min) {
  return Math.floor(Math.random() * (max - min) + min);
}

export default function Hero(props) {
  const flexbasis = getRandomInt(400, 150) + "px";

  const character = {
    name: props.character.name,
    img: props.character.image.url,
    race: props.character.appearance.race === "null" 
      ? "Unknown"
      : props.character.appearance.race
  };

  console.log(props);

  const styles = {
    comic: {
      display: "flex",
      flexWrap: "wrap",
      fontFamily: "Comic Sans, cursive",
      padding: "1vmin",
      backgroundColor: "red"
    },
    panel: {
      backgroundColor: "#fff",
      border: "solid 2px #000",
      boxShadow: "0 6px 6px -6px #000",
      display: "inline-block",
      flex: "1 1",
      height: "200px",
      margin: "1vmin",
      overflow: "hidden",
      position: "relative",
      flexBasis: flexbasis,
      backgroundImage: "url(" + character.img + ")",
      backgroundRepeat: "no-repeat",
      backgroundSize: "100% 100%"
    },
    red: {
      backgroundColor: "red",
      minWidth: "100%"
    },
    panelImg: {
      backgroundColor: "#fff",
      border: "solid 2px #000",
      boxShadow: "0 6px 6px -6px #000",
      display: "inline-block",
      flex: "1 1",
      height: "200px",
      margin: "1vmin",
      overflow: "hidden",
      position: "relative"
    },
    topLeft: {
      backgroundColor: "#fff",
      border: "solid 2px #000",
      margin: "0",
      padding: "3px 10px",
      left: "-6px",
      position: "absolute",
      top: "-2px",
      transform: "skew(-15deg)"
    },
    bottomRight: {
      backgroundColor: "#fff",
      border: "solid 2px #000",
      margin: "0",
      padding: "3px 10px",
      bottom: "-2px",
      position: "absolute",
      right: "-6px",
      transform: "skew(-15deg)"
    }
  };

  return (
    <React.Fragment>
      <div style={styles.panel}>
        <p style={styles.topLeft}>{character.name}</p>
        <p style={styles.bottomRight}>Race: {character.race}</p>
      </div>
    </React.Fragment>
  );
}
