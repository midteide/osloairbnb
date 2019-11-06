import React from 'react';
import styled from 'styled-components'
import './App.css';
import Image from 'react-bootstrap/Image'
import Jumbotron from 'react-bootstrap/Jumbotron'
import Container from 'react-bootstrap/Container'
import ImageZoom from 'react-medium-image-zoom'
import backgroundImg from '../src/assets/jumbo.jpg'


const Styles = styled.div`
    .jumbo {
        background: url(${backgroundImg})  center center / cover no-repeat ;
        // background-size: cover;
        
        color: #fff;
        height: 200px;
        position: relative;
        z-index: -2;
        margin: 0;
        margin-top:20px;
    }
    .overlay {
        background-color: black;
        color: #fff;
        opacity: 0.4;
        position: absolute;
        padding: 50px;
        
        top: 0;
        left: 0;
        bottom: 0;
        right: 0;
         z-index: -1;
        margin: 0;
    }

    .jumbotekst {
        margin-left: 40px;
    }

    #tekst {
        color: white;
    }
    @media screen and (max-width: 760px) {
        .jumbotekst {
             margin-left: 1px;
             margin-top: 20px
        }
      }
      
`;


function App() {
  return (
    <div className="container">
        <Styles>
            <Jumbotron className="jumbo mt-5 mb-5" fluid>
                <Container className="jumbotekst">
                <h1>AirBnb Instructions</h1>
                <p>
                Here you will find information regarding your stay...
                </p>
            </Container>
            <div className="overlay">
            </div>
            </Jumbotron>
        </Styles>
        <div className="row justify-content-md-center">
            
            <div className="col-xs-12 col-md-11">
            <p>Below you can see a map and other pictures showing where to find the keys and the appartment.
Keys are picked up on Shell Etterstad (more pictures below) and the address to the apartment is 
”Etterstadsletta 25A”, the name on the door says ”Hole”. Again, see below for more details.</p>
            <Image fluid src={require("./assets/map.jpg")} />
                
            </div>
            <div className="col-xs-12 col-md-11 mt-5">
                <Image fluid src={require("./assets/1.jpg")} />
                <p>Image 1: This is Shell Etterstad, where the keys can be picked up.
                    
                </p>
            </div>
            <div className="col-xs-12 col-md-11 mt-5">
                <Image fluid src={require("./assets/2.jpg")} />
                <p>Image 2: Enter the code I sent you on this device, the people working there will help you and give you the key.
                    
                </p>
            </div>
            <div className="col-xs-12 col-md-11 mt-5">
                <Image className="" fluid src={require("./assets/3.jpg")} />
                <p>Image 3: From Shell Etterstad, start walking/driving this way (might be easier just to follow the map, 
                    but here are some pictures in any case)
                    
                </p>
            </div>
            <div className="col-xs-12 col-md-11 mt-5">
                <Image fluid src={require("./assets/4.jpg")} />
                <p>Image 4: Follow this road. On the right you can see a grocery store (Prix).
                    
                </p>
            </div>
            <div className="col-xs-12 col-md-11 mt-5">
                <Image fluid src={require("./assets/5_.jpg")} />
                <p>Image 5: Drive/walk in this road, see next picture for overhead view of where to go.
                    
                </p>
            </div>
            <div className="col-xs-12 col-md-11 mt-5">
                <Image fluid src={require("./assets/5a.jpg")} />
                <p>Image 5A: This pictures show where to go after entering street shown in previous picture.
                    
                </p>
            </div>
            <div className="col-xs-12 col-md-11 mt-5">
                <Image fluid src={require("./assets/6.jpg")} />
                <p>Image 6: This is the door to the building.
                    
                </p>
            </div>
            <div className="col-xs-12 col-md-11 mt-5">
                <Image fluid src={require("./assets/7.jpg")} />
                <p>Image 7: The names outside the door in case your are unsure if you are at the right door.
                    
                </p>
            </div>
            <div className="col-xs-12 col-md-11 mt-5">
                <Image fluid src={require("./assets/8.jpg")} />
                <p>Image 8: This is the door to the appartment.
                    
                </p>
            </div>
            <div className="col-xs-12 col-md-11 mt-5">
                <Image fluid src={require("./assets/9.jpg")} />
                <p>Image 9: This is the door to the appartment.
                    
                </p>
            </div>
            
        </div>
    </div>
  );
}

export default App;
