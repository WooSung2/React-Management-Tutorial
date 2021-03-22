import logo from './logo.svg';
import './App.css';
import React, {Component} from 'react';
import Customer from './components/Customer'
// function App() extends Components{
//   return (
//     // <div className = "grey-background">
//     //     <img src={logo} lat="logo" />
//     //     <h2> Let's develop management system!</h2>
//     // </div>
//       <Customer/>
//   );
// }

const customers = [
  {
  'id' : '1',
  'image' : 'https://placeimg.com/64/64/1',
  'name' : '이동학',
  'birthdat' : '901030',
  'gender' : '남자',
  'job' : '스쿼트'
  },

  {
    'id' : '2',
    'image' : 'https://placeimg.com/64/64/2',
    'name' : '임준영',
    'birthdat' : '910111',
    'gender' : '남자',
    'job' : '자전거'
  },

  {
    'id' : '3',
    'image' : 'https://placeimg.com/64/64/3',
    'name' : '정승훈',
    'birthdat' : '900904',
    'gender' : '남자',
    'job' : '쇠질'
  }
]

class App extends Component {
  render() {
    return (
      <div>
        {
          customers.map(c => {
            return (
              <Customer
              key={c.id}
              id={c.id}
              image={c.image}
              name={c.name}
              birthday={c.birthday}
              gender={c.gender}
              job={c.job}
              />
              );
          })
        }
        </div>
    );
  }
}

export default App;






    // <div className="App">
    //   <header className="App-header">
    //     <img src={logo} className="App-logo" alt="logo" />
    //     <p>
    //       {/* Edit <code>src/App.js</code> and save to reload. */}
    //       Hello React Project!
    //     </p>
    //     {/* <a
    //       className="App-link"
    //       href="https://reactjs.org"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       Learn React
    //     </a> */}

    //   </header>
    // </div>
//   );
// }

// export default App;
