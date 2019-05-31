ReactJs v16.8
JSON.stringify Dùng để chuyển đổi Data thông thường sang data dạng JSON
<!-- toán tử AND (&&), toán tử OR (||) và toán tử NOT (!). -->
<!-- JSX: Là cú pháp cho Js. Nó khá giống với html thuần. -->
import React from 'react';
import ReactDOM from 'react-dom';
<!-- 2 dòng code trên để import các components của reactjs -->  
<!-- Components là các thành phần của chương trình đảm nhận 1 nhiệm vụ gì đó. Có thể sử dụng lại bằng thuộc tính thừa kề. Class extends ..... -->
// Write code here:
var myList = (
	<ul>
        <li>Play Soccer</li>
        <li>Working</li>
        <li>Learn</li>
    </ul>
);

ReactDOM.render(myList, document.getElementById('app'));
<!-- Đoạn code trên là để render ra mã html -->
<!-- Class Name: Class không có trong reactjs bởi vì reactjs biên soạn ra chương trình để để biến đổi thành javascript không giống HTML -->
var myDiv = <div className="big">I AM A BIG DIV</div>
ReactDOM.render(myDiv, document.getElementById('app'))
<!-- Các thẻ html không có thẻ đóng có thế viết sang JSX như sau <br> ==> <br /> -->
ReactDOM.render(<h1>{2 + 3}</h1>, document.getElementById('app')); // output 5
ReactDOM.render(<h1>2 + 3</h1>, document.getElementById('app')); // output 2 + 3
=====================================================
const theBestString = 'tralalalala i am da best';
ReactDOM.render(<h1>{theBestString}</h1>, document.getElementById('app')); // OutPut:tralalalala i am da best
=======================================================
const goose = 'https://s3.amazonaws.com/codecademy-content/courses/React/react_photo-goose.jpg';

const gooseImg = <img src={goose} />
      
ReactDOM.render(gooseImg, document.getElementById('app'))
<!-- Render Ra Dữ Liệu -->
function makeDoggy(e) {
  // Call this extremely useful function on an <img>.
  // The <img> will become a picture of a doggy.
  e.target.setAttribute('src', 'https://s3.amazonaws.com/codecademy-content/courses/React/react_photo-puppy.jpeg');
  e.target.setAttribute('alt', 'doggy');
}

const kitty = (
	<img onClick={makeDoggy}
		src="https://s3.amazonaws.com/codecademy-content/courses/React/react_photo-kitty.jpg" 
		alt="kitty" />
);

ReactDOM.render(kitty, document.getElementById('app'));
<!-- Biến đổi dữ liệu qua các sự kiện Event Listeners in JSX -->
<!-- If trong JSX -->
Nó sẽ hoạt động được nếu không đặt trong JSX tag
if (coinToss() === 'heads') {
  img = (
    <img src={pics.kitty} />
  );
} else {
  img = ( 
    <img src={pics.doggy} />
  );
}

ReactDOM.render(img, document.getElementById('app'));
<!-- 1 cách viết khác của If else của JSX -->
function coinToss () {
  // Randomly return either 'heads' or 'tails'.
  return Math.random() < 0.5 ? 'heads' : 'tails';
}

const pics = {
  kitty: 'https://s3.amazonaws.com/codecademy-content/courses/React/react_photo-kitty.jpg',
  doggy: 'https://s3.amazonaws.com/codecademy-content/courses/React/react_photo-puppy.jpeg'
};

const img = <img src={pics[coinToss() === 'heads' ? 'kitty' : 'doggy']} />; //Nếu if là heads.'?' Thì sẽ cho ra kitty. Else (:) thì cho ea doggy

ReactDOM.render(
	img, 
	document.getElementById('app')
);
<!-- Keys == 'Id in Html' -->
const people = ['Rowe', 'Prevost', 'Gare'];

const peopleLis = people.map((person, i) =>
  // expression goes here:
  <li key={'person_' + i}>{person}</li>
);

// ReactDOM.render goes here:
ReactDOM.render(<ul>{peopleLis}</ul>, document.getElementById('app'));
<!-- React.createElement -->
const greatestDivEver = React.createElement(
	"div",
  null,
  "i am div"
);  // const greatestDivEver = <div>i am div</div>;
<!-- React.Component is the way to declare a new component class. -->
<!-- UpperCamelCase. -->
<!-- subclassing React.Component, you create a new component class. This is not a component! A component class is more like a factory that produces components. When you start making components, each one will come from a component class. -->
import React from 'react';
import ReactDOM from 'react-dom';

class MyComponentClass extends React.Component {
  render() {
    return <h1>Hello world</h1>;
  }
}

// component goes here:
ReactDOM.render(<MyComponentClass />, document.getElementById('app'));
<!-- Render Class Components -->
import React from 'react';
import ReactDOM from 'react-dom';

const owl = {
  title: 'Excellent Owl',
  src: 'https://s3.amazonaws.com/codecademy-content/courses/React/react_photo-owl.jpg'
};

// Component class starts here:
class Owl extends React.Component {
  render() {
    return (
      <div>
        <h1>{owl.title}</h1>
        <img src={owl.src} alt={owl.title} />
      </div>
    );
  }
}

ReactDOM.render(
  <Owl />,
  document.getElementById('app')
);
<!-- Class Component Logic -->
import React from 'react';
import ReactDOM from 'react-dom';


const friends = [
  {
    title: "Yummmmmmm",
    src: "https://s3.amazonaws.com/codecademy-content/courses/React/react_photo-monkeyweirdo.jpg"
  },
  {
    title: "Hey Guys!  Wait Up!",
    src: "https://s3.amazonaws.com/codecademy-content/courses/React/react_photo-earnestfrog.jpg"
  },
  {
    title: "Yikes",
    src: "https://s3.amazonaws.com/codecademy-content/courses/React/react_photo-alpaca.jpg"
  }
];

// New component class starts here:
class Friend extends React.Component {
  render(){
    let friend = friends[0];
    return(
    	<div>
        <h1>{friend.title}</h1>
        <img src={friend.src}/>
      </div>
    )
  }
}

ReactDOM.render(
	<Friend />,
  document.getElementById('app')
)
<!-- If Else Trong Class Component -->
<!-- If Phải sau render function và trước return -->
import React from 'react';
import ReactDOM from 'react-dom';

const fiftyFifty = Math.random() < 0.5;

// New component class starts here:
class TonightsPlan extends React.Component{
	render(){
    if(fiftyFifty){
			return <h1>Tonight I'm going out WOOO</h1>
    }
    else {
			return <h1>Tonight I'm going to bed WOOO</h1>
    }
  }
}

ReactDOM.render(
	<TonightsPlan />,
  document.getElementById('app')
)
<!-- This In React Conponents -->
<!-- Add Event Listener On class Components -->
import React from 'react';
import ReactDOM from 'react-dom';

class Button extends React.Component {
  scream() {
    alert('AAAAAAAAHHH!!!!!');
  }

  render() {
    return <button onClick={this.scream}>AAAAAH!</button>;
  }
}

ReactDOM.render(
	<Button />,
  document.getElementById('app')
)
<!-- Trong ReactJS, mỗi đoạn code sẽ được phân chia thành những Component không lệ thuộc lẫn nhau và có thể tái sử dụng khi cần thiết -->
<!-- Components Interact -->
class OMG extends React.Component {
  render() {
    return <h1>Whooaa!</h1>;
  }
}

class Crazy extends React.Component {
  render() {
    return <OMG />;
  }
}
Ở Ví dụ này, Class Crazy Render class OMG Có Nghĩa là 1 class có thể render() another Class
<!-- VD Cấp cao hơn. Ta có 1 file NavBar.js. Nhiệm Vụ Là render Class NavBar Ở trong Class ProfilePage (File: ProfilePage.js) -->
import React from 'react';
import ReactDOM from 'react-dom';
import {NavBar} from './NavBar.js'; //Import Class NavBar từ file NavBar.js. Nếu Không NavBar sẽ bị undifined

class ProfilePage extends React.Component {
  render() {
    return (
      <div>
				<NavBar />
        <h1>All About Me!</h1>
        <p>I like movies and blah blah blah blah blah</p>
        <img src="https://s3.amazonaws.com/codecademy-content/courses/React/react_photo-monkeyselfie.jpg" />
      </div>
    );
  }
}   //Đây là file ProfilePage.js
ReactDOM.render(
	<ProfilePage />,
  document.getElementById('app')
)   // Render
import React from 'react';

export class NavBar extends React.Component {    // Để Import được ta file export File Cần được import vào
  render() {
    const pages = ['home', 'blog', 'pics', 'bio', 'art', 'shop', 'about', 'contact'];
    const navLinks = pages.map(page => {
      return (
        <a href={'/' + page}>
          {page}
        </a>
      )
    });

    return <nav>{navLinks}</nav>;
  }
}  //Đây là file NavBar

<!-- Props trong ReactJs -->
import React from 'react';
import ReactDOM from 'react-dom';

class PropsDisplayer extends React.Component {
  render() {
  	const stringProps = JSON.stringify(this.props);

    return (
      <div>
        <h1>CHECK OUT MY PROPS OBJECT</h1>
        <h2>{stringProps}</h2>
      </div>
    );
  }
}

// ReactDOM.render goes here:
ReactDOM.render(<PropsDisplayer myProp="Hello"/>, document.getElementById('app'));
<!-- Render() -->
import React from 'react';
import ReactDOM from 'react-dom';

class Greeting extends React.Component {
  render() {
    return <h1>Hi there, {this.props.name}!</h1>;
  }
}

ReactDOM.render(
  <Greeting name='Groberta' />, 
  document.getElementById('app')
);
