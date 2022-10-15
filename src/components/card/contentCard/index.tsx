import { Card, CardContent, CardMedia, Typography } from '@mui/material'
import "../../../styles/card.css"
import React from 'react'

interface Props {
  photo: any
}

const ContentCard = ( photo: Props ) => {
  return (
    <Card sx={{ maxWidth: 345 }} className="ContentCard">
      <CardMedia
        component="img"
        height="140"
        image={photo.photo.urls.regular}
        alt="green iguana"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
        {photo.photo.alt_description}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {photo.photo.description}
        </Typography>
      </CardContent>
    </Card>
  )
}

export default ContentCard