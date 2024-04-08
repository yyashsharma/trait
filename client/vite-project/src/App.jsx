import { Button, Label, TextInput } from "flowbite-react";

import axios from "axios";
import { useState } from "react";
import Trait from "./components/Trait";

function App() {
  const [name, setName] = useState("");
  const [subject1, setSubject1] = useState(null);
  const [subject2, setSubject2] = useState(null);
  const [subject3, setSubject3] = useState(null);
  const [result, setResult] = useState("");
  const [studId, setStudId] = useState("");

  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const { data } = await axios.post(
        `http://localhost:5000/api/v1/student/addStudent`,
        {
          name,
          subject1,
          subject2,
          subject3,
        },
        {
          withCredentials: true,
        }
      );
      setResult(data.student);
      setStudId(data.student._id);
    } catch (err) {
      console.log(err);
    }
    setLoading(false);
  };

  return (
    <>
      <div className="bg-yellow-300 min-h-screen">
        <div className="flex flex-col justify-center items-center pt-10 gap-5">
          <form
            onSubmit={handleSubmit}
            className="flex max-w-md flex-col gap-4 w-full"
          >
            <div>
              <div className="mb-2 block">
                <Label htmlFor="name" value="Your email" />
              </div>
              <TextInput
                id="name"
                type="text"
                placeholder="Enter Name here.."
                onChange={(e) => {
                  setName(e.target.value);
                }}
                required
              />
            </div>
            <div>
              <div className="mb-2 block">
                <Label htmlFor="sub1" value="Subject 1 Marks" />
              </div>
              <TextInput
                id="sub1"
                type="number"
                onChange={(e) => {
                  setSubject1(e.target.value);
                }}
                required
              />
            </div>
            <div>
              <div className="mb-2 block">
                <Label htmlFor="sub2" value="Subject 2 Marks" />
              </div>
              <TextInput
                id="sub2"
                type="number"
                onChange={(e) => {
                  setSubject2(e.target.value);
                }}
                required
              />
            </div>
            <div>
              <div className="mb-2 block">
                <Label htmlFor="sub3" value="Subject 3 Marks" />
              </div>
              <TextInput
                id="sub3"
                type="number"
                onChange={(e) => {
                  setSubject3(e.target.value);
                }}
                required
              />
            </div>

            <Button type="submit">Submit</Button>
          </form>
          {
            studId &&(
              <Trait studId={studId} />
            )
          }
        </div>
      </div>
    </>
  );
}

export default App;
