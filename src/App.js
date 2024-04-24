import React, { Component } from 'react'
import NavBar from './components/NavBar';
import News from './components/News';
import './App.css';
import './components/TextForm';
import TextForm from './components/TextForm';
import SideBar from './components/SideBar';

export class App extends Component {
  render() {
    return (
      <div>
        
            <NavBar/>
            <div className="container-fluid">
        <div className="row">
          <div className="col-md-2">
            <SideBar />
          </div>
          <div className="col-md-10">
          <News pageSize={5} country="in" category="science"/>
       
       <div className="container my-3">
       <TextForm heading="Enter the text to analyze below"/>
        </div>
          </div>
        </div>
      </div>
              
      </div>
    )
  }
}  

export default App
