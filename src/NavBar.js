import React from 'react'
import { NavLink } from 'react-router-dom'


const NavBar = () => (
    <div className="navbar">
        <NavLink to='/'>Home</NavLink>
        <br/>
        <NavLink to='/exercice/1'>Exercice 1</NavLink>
        <br/>
        <NavLink to='/exercice/2'>Exercice 2</NavLink>
        <br/>
        <NavLink to='/exercice/3'>Exercice 3</NavLink>
        <br/>
        <NavLink to='/exercice/4'>Exercice 4 & 7</NavLink>
        <br/>
        <NavLink to='/exercice/5'>Exercice 5</NavLink>
        <br/>
        <NavLink to='/exercice/6'>Exercice 6</NavLink>
        <br/>
        <NavLink to="/country/France">France</NavLink>
        <br/>
        <NavLink to="/country/Germany">Allemagne</NavLink>
        <br/>
        <NavLink to="/country/Canada">Canada</NavLink>
        <br/>
        <br/>
        <br/>
        {/* <NavLink to='/completed' className="btn btn-outline-dark bg-light">Completed</NavLink>
        <NavLink to='/add-task' className="btn btn-outline-dark bg-light">Add</NavLink> */}
    </div>




)


export default NavBar