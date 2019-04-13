import React from 'react';
import school_image from '../assets/class.png';
import school_logo from '../assets/school_logo.jpg';


export default class SchoolCard extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            favorite: false,
            vote: 0,
            hoverVote: 0,
            hovering: false
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
          this.setState({hoverVote: 0, hovering: false})
      }

      starClick = (e) => {
        const starNo = e.target.getAttribute('no');
        
        this.setState({vote: starNo});
      }
      
      _renderStars = () => {
        const arr = [1,2,3,4,5];
        return arr.map((num) => <i key={num} no={num} onMouseEnter={this.hoverStar} onMouseLeave={this.leaveStar} onClick={this.starClick} style={styles.starIcon} className={this.state.hovering ? (this.state.hoverVote > (num - 1) ? "icon-star icon-large": "icon-star-empty icon-large") : (this.state.vote > (num - 1) ? "icon-star icon-large": "icon-star-empty icon-large")}></i>)
      }


    render(){

        return(
            <div id="outer-container" style={styles.outerContainer}>
                <div id="image-container" style={styles.imageContainer}>
                    <div style={styles.imageTextContainer} id="image_text_div">
                        <h4 id="school_name"> Greendale Community Collage </h4>
                        <h5 id="city_name">Greendale</h5>
                    </div>
                    <div onClick={this.favoriteClickHandler} style={styles.favoriteStyle} id="add_favorite_div" className={this.state.favorite ? "heart heart-blast": "heart"}>
                    </div>
                    <img style={styles.logoStyle} id="logo-img" src={school_logo} alt="school logo" />
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
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent eget eleifend quam, et aliquam eros. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Suspendisse venenatis tristique tellus, id sodales neque feugiat nec. Maecenas in consectetur felis. Nullam vitae consectetur massa. Duis porttitor non metus non posuere. Phasellus vitae metus quis est consequat rhoncus eget nec mi. Maecenas suscipit tortor non lacus volutpat imperdiet. Nulla vel arcu justo. Maecenas vestibulum, nulla ut venenatis vestibulum, est ex posuere erat, nec pellentesque enim urna cursus magna. Quisque turpis lorem, tristique sit amet ipsum at, fermentum faucibus libero. Ut pellentesque quam nulla, ut ornare magna congue a. Donec dolor dolor, convallis sed mi sit amet, porta malesuada odio. Aliquam tincidunt placerat vestibulum.
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
        backgroundImage: `url(${school_image})`,
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
        left: 30,
        bottom: 20
    },
    favoriteStyle: {
        position: "absolute",
        //padding: "10px 13px",
        //backgroundColor: 'rgba(0,0,0,0.5)',
        right: -60,
        top: 35,
        width : 100,
        height: 100,
        cursor: 'pointer'
        // borderRadius: '50%'
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
    starIcon: {
        marginRight: 1,
        color: "#ffd907"
    }
    
  }