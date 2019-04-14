import React from 'react';

import StarBox from './StarBox';


export default class SchoolCard extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            favorite: false,
            vote: 0,
            hoverVote: 0,
            hovering: false,
            starAnimation: false
        };
      }


      favoriteClickHandler = () => {
        this.setState((state) => ({favorite : !state.favorite}))
      }

      hoverStar = (e) => {
          const starNo = e.target.getAttribute('no');
          this.setState({hoverVote: starNo, hovering: true});
      }

      leaveStar = () => {
          this.setState({hoverVote: 0, hovering: false, starAnimation: false})
      }

      starClick = (e) => {
        const starNo = e.target.getAttribute('no');
        this.setState({vote: parseInt(starNo), starAnimation: true});
      }
      
      _renderStars = () => {
        const arr = [1,2,3,4,5];
        return arr.map((num) => 
        <StarBox
            key={num} 
            onMouseEnter={this.hoverStar}
            onMouseLeave={this.leaveStar} 
            onClick={this.starClick} 
            starAnimation={this.state.starAnimation} 
            vote={this.state.vote} 
            hoverVote={this.state.hoverVote} 
            hovering={this.state.hovering} 
            num={num} />)
      }


    render(){

        return(
            <div id="outer-container" style={styles.outerContainer}>
                <div id="image-container" style={{...styles.imageContainer, backgroundImage: `url(${this.props.coverPicture})`}}>
                    <div style={styles.imageTextContainer} id="image_text_div">
                        <h4 style={styles.imageText} id="school_name">{this.props.schoolName}</h4>
                        <br></br>
                        <h5 style={styles.imageText} id="city_name">{this.props.city}</h5>
                    </div>
                    <div onClick={this.favoriteClickHandler} style={styles.favoriteStyle} id="add_favorite_div" className={this.state.favorite ? "heart heart-blast": "heart"}>
                    </div>
                    <img style={styles.logoStyle} id="logo-img" src={this.props.logoPicture} alt="school logo" />
                </div>

                <div style={styles.textContainer} id="text-container">
                    <div style={styles.votingDiv}>
                    <div style={styles.starDiv}>
                        {this._renderStars()}
                        </div>
                        <div>
                        <h4> Vote </h4>
                        </div>
                    </div>
                    <div>
                        <p id="text">
                        {this.props.description}
                        </p>
                    </div>
                </div>
            </div>
        )
    }
}

const logoWidth = 70;

const styles = {
    outerContainer:{
      width: 400,
      borderTopLeftRadius: 10,
        borderTopRightRadius: 10
    },
    imageContainer : {
        backgroundColor: 'rgba(0,0,0,0.5)',
        backgroundPosition: 'center',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        position: 'relative',
        height: 220,
        borderTopLeftRadius: 10,
        borderTopRightRadius: 10
        
    },
    logoStyle : {
        position: "absolute",
        width: logoWidth,
        height: logoWidth,
        right: 15,
        bottom: -(logoWidth/2),
        borderRadius: '50%'
    },
    imageTextContainer: {
        position: "absolute",
        left: 15,
        bottom: 10
    },
    favoriteStyle: {
        position: "absolute",
        right: -60,
        top: 35,
        width : 100,
        height: 100,
        cursor: 'pointer'
    },
    textContainer: {
        backgroundColor: "white",
        color: "black",
        padding: 12
    },
    votingDiv: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'stretch'
    },
    starDiv: {
        marginRight: 10,
        alignItems: 'center',
        display: 'flex'
    },
    imageText: {
        backgroundColor: 'rgba(0,0,0,0.7)',
        padding: "8px 5px",
        color: '#f9f9f9',
        display: 'inline-block',
        borderRadius: 2,
        lineHeight:0.9,
        margin: "5px 0px"
    }
    
  }