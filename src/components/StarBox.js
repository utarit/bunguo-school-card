import React from 'react';


export default class StarBox extends React.Component {
    constructor(props){
        super(props);
        this.state={
            yellowed: false
        }
    }


    render() {

        const {num, starAnimation, hovering, vote, onClick, onMouseEnter, onMouseLeave, hoverVote} = this.props;


        return (
            <div onClick={onClick}>
            
            <i key={num}
                no={num}
                onMouseEnter={onMouseEnter} 
                onMouseLeave={onMouseLeave} 
                style={styles.starIcon} 
                className={hovering ? (hoverVote > (num - 1) ? "icon-star icon-large" : "icon-star-empty icon-large") : (vote > (num - 1) ? "icon-star icon-large" : "icon-star-empty icon-large")}
            >
            <i style={styles.invisibleStar} className={`icon-star icon-large box ${starAnimation && vote === num ? ' box-vis' : ''}`}></i></i>
            
            </div>
        );
    }
}

const styles = {
    starIcon: {
        marginRight: 1,
        color: "#ffd907",
        cursor: 'pointer',
        position: 'relative'
    },
    invisibleStar:{
        position: 'absolute',
        left: 0
    }
}