import React from 'react';
import { Card, CardActions, CardContent, CardMedia, Button, Typography, Grid } from '@mui/material';
import styles from './CardNews.module.css'

const CardBBC = ({ info, isBBC }) => {

    const onClickLearnMore=()=> {
        window.open(info.link._text, "_blank")
    }

    console.log(info.title);
    let imageURL = 'https://news.files.bbci.co.uk/include/articles/public/portuguese/images/metadata/poster-1024x576.png';
    let title = info.title._cdata;
    let description = info.description._cdata;
    if (!isBBC){
        imageURL = 'https://yt3.ggpht.com/ytc/AKedOLTGl73g7gUJzjOegUWYEVWaHCNoVZMdM7le7naWvA=s900-c-k-c0x00ffffff-no-rj'
        title = info.title._text;
        description = info.description._text;
    }
    return (
        <Grid item xs={6} md={3}>
            <Card className={styles.cardContainer}>
                <CardMedia
                    component="img"
                    height="140"
                    image={imageURL}
                    alt="Image News"
                />
                <CardContent>
                    <Typography gutterBottom variant="h8" component="div">
                        {title}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                        {description}
                    </Typography>
                </CardContent>
                <CardActions>
                    <Button size="small" onClick={onClickLearnMore}>Learn More</Button>
                </CardActions>
            </Card>
        </Grid>
    );
};

export default CardBBC;