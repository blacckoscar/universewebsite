import React from 'react'
import MainVideo from '../../assets/video.mp4'
import './Hero.css'

const hero = () => {
    return (
        <div className='hero'>
            <video autoPlay loop muted id='video'>
                <source src={MainVideo} type='video/mp4'/>
            </video>
            <div className="hero-text">
                <h1>Decentralized</h1>
                <h1><span className="blue">Advertizing </span> Protocol</h1>
                <p>Guaranteed share liquidity UNITS for billions of users any where in the universe. Wait! Are you even in the UNIVERSE ?</p>
                <div className="btn-group">
                    <button className="btn"> App Store</button>
                    {/* <button className="btn btn-outline">Documentation</button> */}
                    <button className="btn btn-outline">Google Play</button>
                </div>
            </div>
            <div className="bottom-text">
                <h2>Total Volume Made By Users: $42,104,783,662.47</h2>
            </div>
        </div>
    )
}

export default hero
