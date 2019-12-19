import React, { useState, useEffect, Fragment } from "react";
import Hero, { getRandomInt } from "../student/Hero";
import axios from "axios";

export default function HeroContainer() {
  const styles = {
    comic: {
      display: "flex",
      flexWrap: "wrap",
      fontFamily: "Comic Sans, cursive",
      padding: "1vmin"
    },
    title: {
      textAlign: "center",
      fontSize: "2rem"
    },
    loader: {
      position: "absolute",
      left: "50%",
      top: "50%",
      transform: "translate(-50%, -50%)",
      fontSize: "1.6rem"
    }
  };

  const [isLoading, setIsLoading] = useState(true);
  const [characters, setCharacters] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  async function fetchData() {
    const characters = [];
    for (var i = 1; i <= 22; i++) {
      const search = getRandomInt(1, 731);
      const result = await axios.get(
        "http://superheroapi.com/api.php/10211730710623459/" + search
      );
      characters.push(result.data);
    }
    setIsLoading(false);
    setCharacters(characters);
  }

  return (
    <Fragment>
      <div style={styles.title}>
        <h2>Heroes Yearbook</h2>
      </div>
      <article style={styles.comic}>
        {isLoading ? (
          <div style={styles.loader}>
            <h1>Loading...</h1>
          </div>
        ) : (
          characters.map(character => {
            return <Hero key={character.id} character={character} />;
          })
        )}
      </article>
    </Fragment>
  );
}
