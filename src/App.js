import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';

const reverseString = (str) => {

  // split

  const emptyString = ""
  let array = str.split(emptyString);
  let arrayTwo = array.reverse();




  // reverse
  // join

  return str.split(emptyString).reverse().join(emptyString);
}

const compaseString = (str1, str2) => {

  if (str1.length > str2.length)
    return '1'

  else return str2

  // return (str1.length > str2.length ) ? "1" : "2"
}


const compareStringTwo = (param) => {
  const type = typeof param
  switch (type) {
    case "string":
      return param.repeat(4)
    case "number":
      return param + 2;
    default: return 'hehe'
  }
  if (type == 'string') {
    return param.repeat(4)
  }
  else if (type == "number") {
    return param + 2;
  }

  console.log("i'm here")
  return "HEHE"

}



function showNumbers(maxNumber) {

  for (let i = 0; i <= maxNumber; i++)
    console.log(i);

}


const showNumbers2 = (array) => {
  array.forEach(element => {
    console.log(element);
  });

}

const callback = (element, index, array) => {
  return element + element;

}

const myMap = (arr, callback) => {

  const newArray = [];

  for (let i = 0; i < arr.length; i++) {
    let newElement = callback(arr[i], i, arr);
    newArray.push(newElement);
  }


  return newArray;

}



const filterArray = (array) => {


  const filteredTwo = array.filter((e) => {
    if (e > 5)
      return true
  })

  return filteredTwo;

}


const doubleArray = (arr) => {


  var ret = arr.map((element, index, array) => {
    return element + element;

  });
  console.log(ret)


}


const PostComponent = ({ object }) => {



  return (
    <>
      <div> {object.id} </div>
      <h3> {object.userId} </h3>
      <h1> {object.title} </h1>
      <p> {object.body} </p>
      <hr/>
    </>

  )


}




function App() {

  const [state, setState] = useState(null);
  const arr = [1, 12, 13];

  useEffect(() => {

    fetch("https://jsonplaceholder.typicode.com/posts?_limit=3")
      .then(res => res.json()
        .then(res => setState(res)));


  }, [])

  console.log("here here")

  // console.log(showNumbers2(arr))
  // doubleArray(arr);

  return ( //JSX
    <div className="App">
      {
        state ?
          state.map((e) => <div>
            <PostComponent object={e}/>
          </div>)
          :
          <></>

      }
    </div>
  );
}

export default App;
