import { useState } from "react";

function AddMovie(props) {

  const [formData,setFormData] = useState({
    title:"",
    director:"",
    IMDBRating:"",
    hasOscars:false
  })
  
  function handleDataCahange(event){
    const inputName = event.target.name
    let value = ""
    if(inputName === "hasOscars") value = event.target.checked
      else value = event.target.value

    console.log("inputName", inputName, "value",value)
    setFormData(...formData,{[inputName]:value})  // or formData => Object.assign({},formData,{[inputName]:value})
  }

  function handleSubmit(event){
    event.preventDefault()
  
    console.log("formData:" ,formData)
    
    props.AddMovie(formData) //we send the state up to the nearest parent
    setFormData({
      title:"",
      director:"",
      IMDBRating:"",
      hasOscars:false
    })
  }

  return (
    <div className="AddMovie">
      <h4>Add a Movie</h4>
      <form onSubmit={handleSubmit}>
        <label>Title:</label>
        <input type="text" name="title" value={formData.title} onChange={handleDataCahange} />

        <label>Director:</label>
        <input type="text" name="director" value={formData.director} onChange={handleDataCahange} />

        <label>IMDB Rating:</label>
        <input type="number" name="IMDBRating" value={formData.IMDBRating} onChange={handleDataCahange} />

        <label>Won Oscars:</label>
        <input type="checkbox" name="hasOscars" checked={formData.hasOscars} onChange={handleDataCahange} />
        <button type="submit">Add a Movie</button>
      </form>
    </div>
  );
}

export default AddMovie;
