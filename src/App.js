import React, { Component } from 'react';
import SchoolCard from './components/SchoolCard';
import './App.css';
import school_logo from './assets/logo.png';


class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <SchoolCard
            coverPicture={null}
            logoPicture={school_logo}
            city={"Greendale"}
            schoolName={"Greendale Community Collage"}
            description={"Lorem ipsum dolor sit amet, Oh, Britta's in this?. It's not a pen, et aliquam eros. Pellentesque habitant morbi tristique senectus et netus et malesuada it's a principle! fames ac turpis egestas. Suspendisse venenatis tristique tellus, Cool cool cool. Maecenas in consectetur felis. Duis porttitor non metus non posuere. Duis porttitor rhoncus eget nec mi. Maecenas suscipit tortor non lacus volutpat imperdiet. I don't have an ego. My Facebook photo is a landscape.. Maecenas vestibulum, Knock, knock. Who's there? Cancer. Oh good, come on in, I thought it was Britta! pellentesque enim urna cursus magna. I don't get history. If I wanted to know what happened in Europe a long time ago, I'd watch Game of Thrones, fermentum faucibus libero. Ut pellentesque quam nulla, ut ornare magna congue a. Streets ahead, porta malesuada odio. Kind people are always kind, not just when it's easy."}
          />
        </header>
      </div>
    );
  }
}



export default App;
