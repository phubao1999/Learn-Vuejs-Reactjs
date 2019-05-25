ReactJs v16.8
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
ReactDOM.render(<MyComponentClass />, document.getElementById('app'))