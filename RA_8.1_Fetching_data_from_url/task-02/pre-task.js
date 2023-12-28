function fetchCatFacts() {
  const catFacts = fetch("https://cat-fact.herokuapp.com/facts")
    .then((response) => {
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }

      return response.json();
    })
    .then((data) => JSON.stringify(data))
    .catch((error) => {
      console.error("There was an error: ", error);
    });

  return catFacts;
}
