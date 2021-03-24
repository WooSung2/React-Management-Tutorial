import logo from './logo.svg';
import './App.css';
import React, {Component} from 'react';
import Customer from './components/Customer'
import Paper from '@material-ui/core/Paper'
import Table from '@material-ui/core/Table'
import TableHead from '@material-ui/core/TableHead'
import TableBody from '@material-ui/core/TableBody'
import TableRow from '@material-ui/core/TableRow'
import TableCell from '@material-ui/core/TableCell'
import { withStyles } from '@material-ui/core/styles'
// function App() extends Components{
//   return (
//     // <div className = "grey-background">
//     //     <img src={logo} lat="logo" />
//     //     <h2> Let's develop management system!</h2>
//     // </div>
//       <Customer/>
//   );
// }
const styles = theme => ({
  root: {
    width: '100%',
    marginTop: theme.spacing.unit * 3,
    overflowX: 'auto'
  },
  table: {
    minWidth : 1080
  }
})



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
    const { classes } = this.props;
    return (
      <Paper className={classes.root}>
        <Table className={classes.table}>
          <TableHead>
            <TableRow>
              <TableCell>번호</TableCell>
              <TableCell>이미지</TableCell>
              <TableCell>이름</TableCell>
              <TableCell>생년월일</TableCell>
              <TableCell>성별</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
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
          </TableBody>
        </Table>
        
        </Paper>
    );
  }
}

export default withStyles(styles)(App);






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
