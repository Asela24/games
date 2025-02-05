import { useEffect, useState } from "react";
import { FactCard } from "./components/FactCard";
import { ReturnButton } from "../../components/BackButton/BackButton";

export const FactsOfCats = () => {
  const [facts, setFact] = useState<null | string[]>(null);
  const [isLoading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await fetch("https://meowfacts.herokuapp.com/?count=3");
        const formatted = await data.json();
        setFact(formatted.data);
        setLoading(false);
      } catch (e) {
        console.log(e);
      }
    };

    fetchData();
  }, []);

  return (
    <>
      <ReturnButton />
      {isLoading ? (
        <div>Loading...</div>
      ) : (
        <>
          <h2> Facts of cats</h2>
          <ul>
            {facts && facts?.map((fact) => <FactCard fact={fact} />)}
          </ul>{" "}
        </>
      )}
    </>
  );
};
