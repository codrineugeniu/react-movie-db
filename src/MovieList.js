import React from 'react';
import Button from '@material-ui/core/Button';


function MovieList() {
  return (
    <div>
      <div>
        Deadpool 2
      </div>
      <Button variant="contained" color="primary">
        Add new movie
      </Button>
    </div>
  )
}

export default MovieList;