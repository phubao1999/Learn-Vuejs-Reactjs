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