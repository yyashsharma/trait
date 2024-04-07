import axios from "axios";
import { useEffect, useState } from "react";

const Trait = ({ studId }) => {
  const [trait, setTrait] = useState("");

  console.log(studId);
  //   useEffect(() => {
  const fetchTrait = async () => {
    const { data } = await axios.get(
      `http://localhost:5000/api/v1/personality/findTrait/${studId}`
    );
    console.log(data);
    setTrait(data.trait);
    console.log(trait);
  };
  fetchTrait();
  //   }, [studId]);

  return (
    <div>
      <div className="flex justify-center items-center gap-2 border border-cyan-950 w-auto p-10">
        <span className="text-5xl ">Personality Trait :</span>
        <p className="text-center text-2xl">{trait}</p>
      </div>
    </div>
  );
};

export default Trait;
