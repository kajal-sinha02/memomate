import React from "react";
import { useContext } from "react";
import noteContext from "../context/notes/noteContext";
import Notes from "./Notes";
import AddNote from "./AddNote";
const Home = (props) => {

  const {showAlert} = props ;
  const context = useContext(noteContext);
  const {notes , setNotes} = context ;
   return (
    <>
      <div className="min-h-screen bg-black text-gray-100">
        <Notes showAlert={showAlert}></Notes>
        </div>
    </>
  );
};

export default Home;
