import React from 'react'
import logo from '../dist/logo.png'


const menuSuperior  = () => { 
    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <div className="container-fluid">
                    <a className="navbar-brand" style={{marginLeft : '50px'}} href="#">SISTEMA DE CONTROLE DE AUTOMAÇÃO - SCA</a>
                </div>                
                <form className="d-flex" style={{marginRight : '50px'}}>
                        <img width="150"  src={logo}></img>
                </form>                
            </nav>
            <div className="container-fluid">
                <div className="row">
                    <div className="col-12 text-end">
                        <a href="https://youtu.be/vYkgWRcdBWc" target="_blank" className="btn btn-outline-dark btn-sm" style={{marginRight : '35px', width: '140px'}}>Instruções de uso</a>
                    </div>
                </div>
            </div>
        </div>
    )
}


export default menuSuperior