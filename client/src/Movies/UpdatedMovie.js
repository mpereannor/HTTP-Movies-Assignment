import React, { useState, useEffect } from 'react';
import axiosWithAuth from '../axios/index'

const UpdateMovie = props => { 

    const selectedMovieCard  = () => {
        const card = movies.find(movie=> movie.id === selectedId);

        return card
    } 

    
    const update = ({id, title, director, metascore}) => {
        axiosWithAuth()
        .put(`http://localhost:5000/api/movies/${id}`, {
            title, director, metascore
        })
        .then(())
        
    }
   

    return (
        <div>
            <form>
            <div>
                <h3>Update Movie</h3>
                Title
                <input ref={usernameRef}
                type="text" placeholder="enter your username" />
                <br/>
                Director
                <input type="password" ref={passwordRef} placeholder="enter password" />
                MetaScore
                <input type="password" ref={passwordRef} placeholder="enter password" />
                <br/>
                Stars
                <input type="password" ref={passwordRef} placeholder="enter password" />
                <br/>
                <button onClick={submit}>Submit</button>
            </div>
        </form>   
        </div>
        



{/* 
         <Field name='text' />
         <ErrorMessage name='text' component='span' />

         <Field name='author' />
         <ErrorMessage name='author' component='span' />

         <input type='submit' />
       </Form> */}
    )
}

// update = (id) => {
//     axios.get(`http://localhost:5000/api/movies/${id}`, )
//     .then(response => 

//        )
//   }

export default UpdateMovie ;
