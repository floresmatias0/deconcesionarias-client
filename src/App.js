import React from 'react';
import { Routes,Route } from 'react-router-dom';
import { Container } from 'react-bootstrap';
import Home from './pages/Home/Home';
import Inspection from './pages/Inspection/Inspection';
import NavComponent from './components/Navbar';
import {COMPANY} from './utils/constans';

function App() {
    return (
        <Container fluid className="p-0">
            <NavComponent title={COMPANY}/>
            <Routes>
                <Route exact path="/" element={<Home/>}/>
                <Route exact path="/inspection/:id" element={<Inspection/>}/>
            </Routes>
        </Container>
    )
}

export default App;
