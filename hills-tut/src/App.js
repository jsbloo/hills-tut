import './App.css';
import Navbar from './Components/Navbar/Navbar';
import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './pages/Home';
import Login from './pages/Login';
import ContactUs from './pages/ContactUs';
import Resources from './pages/Resources';
import ExamInfo from './pages/ExamInfo';



function App() {
    return (
        <>
        <Router>
            <Switch>
                <Route path='/' exact component={Home}></Route>
                <Route path='/login' component={Login}></Route>
                <Route path='/contact-us' component={ContactUs}></Route>
                <Route path='/resources' component={Resources}></Route>
                <Route path='/exam-info' component={ExamInfo}></Route>
            </Switch>
        </Router>
        <Navbar/>
        </>
)

}

export default App;


// import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
// import Home from './pages/index';
// import Login from './pages/Login';
// import ContactUs from './pages/ContactUs';
// import Resources from './pages/Resources';
// import ExamInfo from './pages/ExamInfo';


    //         <>
    //             <Router>
    //                 <Switch>
    //                     <Route path='/' exact component={Home}></Route>
    //                     <Route path='/login' component={Login}></Route>
    //                     <Route path='/contact-us' component={ContactUs}></Route>
    //                     <Route path='/resources' component={Resources}></Route>
    //                     <Route path='/exam-info' component={ExamInfo}></Route>
    //                 </Switch>
    //             </Router>
    //         </>
    // );
// }