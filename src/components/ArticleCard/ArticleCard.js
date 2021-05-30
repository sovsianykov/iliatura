import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import clsx from 'clsx';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
// import { red } from '@material-ui/core/colors';
import FavoriteIcon from '@material-ui/icons/Favorite';
import ShareIcon from '@material-ui/icons/Share';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import { Link } from "react-router-dom";
import img1 from '../../assets/archtopbg.JPG';
import img2 from '../../assets/blog-icon.png';
import img3 from '../../assets/Jazz-1-icon.png';
import {MenuBook, NewReleases} from "@material-ui/icons";


const useStyles = makeStyles((theme) => ({
    root: {
        width: '100% ',
        textDecoration: "none"

    },
    content : {
        // backgroundColor :  "bisque",
        fontWeight : 500,
        color : "bisque",
        padding : "10px"
        // fontSize : " 25px"
    },
    media: {
        height: 0,
        paddingTop: '56.25%', // 16:9
        color: "orange"
    },
    expand: {
        transform: 'rotate(0deg)',
        marginLeft: 'auto',
        transition: theme.transitions.create('transform', {
            duration: theme.transitions.duration.shortest,
        }),
    },
    expandOpen: {
        transform: 'rotate(180deg)',
    },
    avatar: {
        backgroundColor: "orange",
    },
}));
export const timeStampToString = (ts) => {
    const  date = new Date(ts *1000)
    return date.getFullYear() + '/'+  (date.getMonth() + 1) + '/' + date.getDay()
}
export default function ArticleCard({data}) {
    const classes = useStyles();
    // const [expanded, setExpanded] = React.useState(false);


    // const handleExpandClick = () => {
    //     setExpanded(!expanded);
    // };

    return (
        <Card className={classes.root} component={Link} to ={{
            pathname : 'article/' +data.id,
            state : data
        }} >
            <Typography variant='h4' className={classes.content}  >
                <MenuBook style={{display:"block", margin:"0 auto"}}/>
                {data.title}
            </Typography>
            <Typography variant='subtitle1' className={classes.content}>
                {timeStampToString(data.createDate.seconds)}
            </Typography>
            <CardContent>
                <Typography variant="h5" color="textSecondary" component="h5" align='center'>
                    {data.categoryLabel}
                </Typography>
            </CardContent>

        </Card>
    );
}
