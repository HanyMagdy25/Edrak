import React from 'react'
// import { connect } from 'react-redux'

const MoviesState = (props) => {
    if(!props.selectedMovie){
        return(
            <div>
                <h3>Moviessss not clicked</h3>
            </div>
        )
    }else{
        return(
            <div>
                <h3>Movies</h3>
                <span>{props.selectedMovie.Search.Title}</span>
            </div>
        )
    }
}

// const mapStateToProps =(state)=>{
//     return{
//         selectedMovie: state.selectedMovie
//     }
// }

export default MoviesState
