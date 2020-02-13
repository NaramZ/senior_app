import React from 'react';
import Card from ''

<Card className='mdc-card demo-card demo-basic-with-text-over-media'>
  <CardPrimaryContent className='demo-card__primary-action'>
      <CardMedia
        wide
        className='demo-card__media'
        imageUrl={image}
        contentClassName='demo-card__media-content'
      >
  <div className='demo-card__primary'>
    <Headline6 className='demo-card__title'>
      Our Changing Planet
    </Headline6>
    <Subtitle2 className='demo-card__subtitle'>
      by Kurt Wagner
    </Subtitle2>
  </div>
      </CardMedia>
  <Body2 className='demo-card__secondary'>
    Visit ten places on our planet that are undergoing the biggest changes today.
  </Body2>
  </CardPrimaryContent>
  <CardActions>
    <CardActionButtons>
      <Button>Read</Button>
      <Button>Bookmark</Button>
    </CardActionButtons>
    <CardActionIcons>
      <IconButton>
        <MaterialIcon icon='favorite_border' />
      </IconButton>
      <IconButton>
        <MaterialIcon icon='share' />
      </IconButton>
      <IconButton>
        <MaterialIcon icon='more_vert' />
      </IconButton>
    </CardActionIcons>
  </CardActions>
</Card>