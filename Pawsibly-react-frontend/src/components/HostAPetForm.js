import { Button, Modal } from 'react-bootstrap'
import { useState, useEffect }  from 'react'
import apiUrl from '../apiConfig'

export default function HostAPetForm(props){

  console.log('I AM USER',props);
  const [firstName, setfirstName] = useState('')
  const [lastName, setLastName] = useState('')
  const [zipCode, setZipCode] = useState('')
  const [price, setPrice] = useState(0)
  const [description, setDescription] = useState('')
  const [city, setCity] = useState('')
  const [image, setImage]= useState()

 
  // const sitter = {first_name:firstName, last_name:lastName, zipcode:zipCode, price:price, city:city, description:description}
   
  const createPost = (e) => {
      const uploadData = new FormData();
      uploadData.append("image", image);
      uploadData.append("first_name", firstName);
      uploadData.append("last_name", lastName);
      uploadData.append("zipcode", zipCode);
      uploadData.append("price", price);
      uploadData.append("city", city);
      uploadData.append("description", description);

  
      fetch(`${apiUrl}/sitters`, {
        method: "POST",
        headers: {
          Authorization: `Token ${props.user.token}`,
        },
        body: uploadData,
      })
        .then((res) => {
          console.log("new pet added", res);
          props.setTrigger((x) => !x);
        })
        // useNavigate(-1)
        .catch((error) => {
          console.log(error);
        });
    }
  


  // const createPosting = (e) => {
  //   const sitter = {first_name:firstName, last_name:lastName, zipcode:zipCode, price:price, city:city, description:description}
   
  //   fetch(`${apiUrl}/sitters`, {
  //     method: 'POST',
  //     headers: { 
  //       'Content-Type': 'application/json',
  //       'Authorization': `Token ${props.user.token}`},
  //     body: JSON.stringify(sitter)
  //   }).then(response => {
  //     props.setTrigger((x)=>!x)
  //    console.log('created post', response);
  //   }).catch(error =>{
  //     console.log(error);
  //   })
  
  // }

return(
    <div>
      <h1>Host a Pet</h1>
      <label>First Name</label>
        <input className='input' type = 'text' 
        required
        value={firstName} first_name = 'first_name' id = 'name'
        onChange={(e) => setfirstName(e.target.value)}
       />
       <label>Last Name</label>
        <input className='input' type = 'text' 
        required
        value={lastName} last_name = 'last_name' id = 'last_name'
        onChange={(e) => setLastName(e.target.value)}
       />
       <label>Zipcode</label>
        <input className='input' type = 'text' 
        required
        value={zipCode} name = 'zipcode' id = 'zipcode'
        onChange={(e) => setZipCode(e.target.value)}
       />
       <label>Price</label>
        <input className='input' type = 'text' 
        required
        value={price} name = 'price' id = 'price'
        onChange={(e) => setPrice(e.target.value)}
       />
        <label>Description</label>
        <input className='input' type = 'text' 
        required
        value={description} name = 'description' id = 'description'
        onChange={(e) => setDescription(e.target.value)}
       />
          <label>City</label>
        <input className='input' type = 'text' 
        required
        value={city} name = 'city' id = 'city'
        onChange={(e) => setCity(e.target.value)}
       />
        <br />
          <input
            type="file"
            onChange={(evt) => setImage(evt.target.files[0])}
          />
       
      <Button onClick={createPost} variant= 'success'>Post</Button>

       
    </div>
  )
}

