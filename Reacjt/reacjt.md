<!-- JSX: Là cú pháp cho Js. Nó khá giống với html thuần. -->
import React from 'react';
import ReactDOM from 'react-dom';

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
ReactDOM.render(<h1>{2 + 3}</h1>, document.getElementById('app')); // output 2 + 3
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
