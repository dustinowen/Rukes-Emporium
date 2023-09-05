import { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { updatePerson } from "../../utilities/people-service";

import "./EditPersonForm.css";

export default function EditPersonForm({ initialData }) {
 const {id} = useParams()
 const navigate = useNavigate()
  const defaultState = initialData
    ? { ...initialData }
    : { name: "", image: "", title: "" };

  const [formData, setFormData] = useState(defaultState);

  async function handleSubmit(e) {
    e.preventDefault()
    console.log("sending data", formData);
    
    const {name, image, title} = formData // cherry picked my properties (updated values)
    const updatedData = {name, image, title} // creating a new object to pass along with my API service call 
    try {
        // id, updateData to be passed to an updatePerson() service function
        const updateResponse = await updatePerson(id, updatedData)
        console.log(updateResponse)
        // success response -> navigate back to detail page (navigate)
        navigate(`/people/${id}`)
    }catch(err){
        console.log("edit form error", err)
        navigate(`/`)
    }
  }

  function handleChange(e) {
    // e -> synthetic event -> generated when react detects a form input on a controlled form field.
    // console.log(e.target, e.target.name, e.target.value)
    const updatedData = { ...formData, [e.target.name]: e.target.value };
    setFormData(updatedData);
  }

  return (
    <section>
      <h2>Edit Profile:</h2>
      <form onSubmit={handleSubmit}>
        <label htmlFor="name">
          People Name*
          <input
            type="text"
            name="name"
            id="name"
            placeholder="add a name"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </label>
        <label htmlFor="image">
          Profile Image
          <input
            type="text"
            name="image"
            id="image"
            value={formData.image}
            onChange={handleChange}
            placeholder="add an image for the new person"
          />
        </label>
        <label htmlFor="title">
          Title
          <input
            type="text"
            name="title"
            id="title"
            value={formData.title}
            onChange={handleChange}
            placeholder="add a person title"
          />
        </label>
        <input type="submit" value="Edit Person" />
      </form>
    </section>
  );
}
