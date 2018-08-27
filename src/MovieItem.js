import React from 'react'
import Card from '@material-ui/core/Card'
import CardContent from '@material-ui/core/CardContent'
import Typography from '@material-ui/core/Typography'
import { checkPropTypes } from 'prop-types'

const MovieItem = props => {
  return (
    <Card className="movie-item">
      <CardContent>
        <Typography variant="headline" component="h2">
          {props.title}
        </Typography>
        <Typography color="textSecondary">{props.year}</Typography>
        <Typography component="p">{props.description}</Typography>
      </CardContent>
    </Card>
  )
}

export default MovieItem
