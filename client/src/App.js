import logo from './logo.svg';
import './App.css';
import React, {Component} from 'react';
import Customer from './components/Customer';
import CustomerAdd from './components/CustomerAdd';
import Paper from '@material-ui/core/Paper';
import Table from '@material-ui/core/Table';
import TableHead from '@material-ui/core/TableHead';
import TableBody from '@material-ui/core/TableBody';
import TableRow from '@material-ui/core/TableRow';
import TableCell from '@material-ui/core/TableCell';
import { withStyles } from '@material-ui/core/styles';
import CircularProgress from '@material-ui/core/CircularProgress';
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
  },
  progress: {
    margin: theme.spacing.unit * 2
  }
})



// const customers = [
//   {
//   'id' : '1',
//   'image' : 'https://placeimg.com/64/64/1',
//   'name' : '이동학',
//   'birthdat' : '901030',
//   'gender' : '남자',
//   'job' : '스쿼트'
//   },

//   {
//     'id' : '2',
//     'image' : 'https://placeimg.com/64/64/2',
//     'name' : '임준영',
//     'birthdat' : '910111',
//     'gender' : '남자',
//     'job' : '자전거'
//   },

//   {
//     'id' : '3',
//     'image' : 'https://placeimg.com/64/64/3',
//     'name' : '정승훈',
//     'birthdat' : '900904',
//     'gender' : '남자',
//     'job' : '쇠질'
//   }
// ]

class App extends Component {

  state = {
    customers:"",
    completed: 0
  } //서버로 부터 데이터를 받으면 재구성 --> 변경될수있다. state로 정의

  componentDidMount() {
    this.timer = setInterval(this.progress, 60)
    this.callApi()
    .then(res=> this.setState({customers:res}))
    .catch(err=>console.log(err))
  }// Api서버에 접근해서 데이터를 받아오는 작업 (DB서버)

  callApi = async () => {
    const response = await fetch('/api/customers');
    const body = await response.json();
    return body;
  } //비동기적으로. 고객목록이 json형태로 받아 body라는 변수로 넣어줌

  progress = () => {
    const {completed} = this.state;
    this.setState({completed: completed>=100 ? 0: completed +1});
  }

  render() {
    const { classes } = this.props;
    return (
      <div>
      <Paper className={classes.root}>
        <Table className={classes.table}>
          <TableHead>
            <TableRow>
              <TableCell>번호</TableCell>
              <TableCell>이미지</TableCell>
              <TableCell>이름</TableCell>
              <TableCell>생년월일</TableCell>
              <TableCell>성별</TableCell>
              <TableCell>직업</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
          {this.state.customers ? this.state.customers.map(c => { //state로 바꿔서 
            return (<Customer key={c.id} id={c.id} image={c.image} name={c.name} birthday={c.birthday} gender={c.gender} job={c.job}/>);
          }) : 
          <TableRow>
            <TableCell colSpan='6' align="center">
              <CircularProgress className={classes.progress} variant="determinate" value={this.state.completed}/>
            </TableCell>
          </TableRow>}
        
          </TableBody>
        </Table>
        
        </Paper>
        <CustomerAdd/>
        </div> //customer add전 div로 감싸준다

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
