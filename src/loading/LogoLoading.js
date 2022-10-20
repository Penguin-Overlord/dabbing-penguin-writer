import './styles/LogoLoading.css'
import { React, Component } from 'react'
import logo from '../assets/logo180.png';

class LogoLoading extends Component {
    render() {
        return <div className='logo loading'>
            <img className='logo w-h-70 circle cover flip-bounce' src={logo} alt="" />
            <span className='logo text'></span>
        </div>
    }
}

export default LogoLoading;