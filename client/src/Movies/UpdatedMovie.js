import React, {useState, useEffect } from 'react';
import withAuth from '../axios';

// const movieTitleRef = useRef();
const UpdateMovie = props => { 
    const [movies, setMovies] = useState([]);
    const [selectedId, setSelectedId] = useState(null);

    const getAllMovies = () => {
      
        withAuth().get(`https://localhost:5000/api/movies`)
          .then(res => {
            setMovies(res.data);
          })
          .catch(err => {
            alert(err);
          });
      };


    const selectedMovieCard  = () => {
        const card = movies.find(movie=> movie.id === selectedId);

        return card;
    } 

    const update = ({id, title, director, metascore}) => {
        withAuth()
        .put(`http://localhost:5000/api/movies/${id}`, {
            title, director, metascore
        })
        .then(() => {
            getAllMovies();
            setSelectedId(null);
            props.history.push('/movie');
          })
          .catch(err => {
    
          });
        
    }   

    return (
    <div>
      {
        movies.map(movie => (
          <li key={movie.id}>
            <div>
                <p>
            {movie.title} 

                </p>
                <p>
                    
            {movie.director}
                </p>
                <p>
                    
            {movie.metascore} 
                </p>    
            </div>
            <button onClick={() => selectedMovieCard(movie.id)}>Update</button>
          </li>
        ))
      }
            <form>
            <div>
                {/* <h3>Update Movie</h3>
                Title
                <input ref={movieTitleRef}
                type="text" placeholder="enter your favourite movie " /> */}
                {/* <br/>
                Director
                <input type="password" ref={passwordRef} placeholder="enter password" />
                MetaScore
                <input type="password" ref={passwordRef} placeholder="enter password" />
                <br/>
                Stars
                <input type="password" ref={passwordRef} placeholder="enter password" />
                <br/> */}
                {/* <button onClick={submit}>Submit</button> */}
            </div>
        </form>   
    </div>
        




         
    )
}

// update = (id) => {
//     axios.get(`http://localhost:5000/api/movies/${id}`, )
//     .then(response => 

//        )
//   }

export default UpdateMovie ;
