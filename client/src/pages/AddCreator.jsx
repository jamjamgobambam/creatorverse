import React, { useState } from 'react'
import { supabase } from '../client'

const AddCreator = () => {

    const [creator, setCreator] = useState( {name: "", youtube: "", twitter: "", instagram: "", description: "", image: ""} )

    const handleChange = (event) => {
        const {name, value} = event.target;
        setCreator( (prev) => {
            return {
                ...prev,
                [name]:value,
            }
        })
    }

    const addCreator = async (event) => {
        event.preventDefault()

       const { error } = await supabase
        .from('creators')
        .insert( {name: creator.name, youtube: creator.youtube, twitter: creator.twitter, instagram: creator.instagram, description: creator.description, image: creator.image} )
        .select()

        if (error) {
            console.log(error)
        }

        window.location = "/"

    }

    return (
        <div className="AddEditCreator">

            <form id="addCreatorForm">
                <label>Name</label>
                <input type="text" id="name" name="name" value={creator.name} onChange={handleChange} required />

                <label>
                    Image
                    <p>Provide a link to an image of your creator. Be sure to include the http://</p>
                </label>
                <input type="text" id="image" name="image" value={creator.image} onChange={handleChange} required />

                <label>
                    Description
                    <p>Provide a description of the creator. Who are they? What makes them interesting?</p>
                </label>
                <textarea name="description" rows="3" cols="50" id="description" value={creator.description} onChange={handleChange} required></textarea>

                <h3>Social Media Links</h3>
                <p>Provide at least one of the creator's social media links.</p>

                <label>
                    <span className="fa-brands fa-youtube"></span> YouTube
                    <p>The creator's YouTube handle (without the @)</p>
                </label>
                <input type="text" id="youtube" name="youtube" value ={creator.youtube} onChange={handleChange} />

                <label>
                    <span className="fa-brands fa-twitter"></span> Twitter
                    <p>The creator's Twitter handle (without the @)</p>
                </label>
                <input type="text" id="twitter" name="twitter" value ={creator.twitter} onChange={handleChange} />

                <label>
                    <span className="fa-brands fa-instagram"></span> Instagram
                    <p>The creator's Instagram handle (without the @)</p>
                </label>
                <input type="text" id="instagram" name="instagram" value ={creator.instagram} onChange={handleChange} />

                <button type="submit" onClick={addCreator}>Submit</button>
            </form>

        </div>
    )
}

export default AddCreator