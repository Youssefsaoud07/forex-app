import React, { useEffect, useState } from "react";
import axios from "axios";
import ChartistGraph from "react-chartist";
import Coin from './coin';
import { Content, Loading } from './App.styles';
import { useDispatch } from 'react-redux';
import { getPosts } from '../JS/actions/post';

// react-bootstrap components
import {
  Badge,
  Button,
  Card,
  Navbar,
  Nav,
  Table,
  Container,
  Row,
  Col,
  Form,
  OverlayTrigger,
  Tooltip,
} from "react-bootstrap";
import { data } from "jquery";
import { Tab } from "bootstrap";
//api
import {getCoins} from './API';
import Posts from "./posts/posts";
import Forms from "./form/Form";
import Chart from "./charts/chart";



function Dashboard() {

 const dispatch = useDispatch();
  const [currentId, setCurrentId] = useState(0);
  
 const [page, setPage] = useState(1)
  const [coins, setCoins] = useState([])
  const [loading, setLoading] = useState(true)
  const handleScroll = (event) => {
    const { scrollTop, clientHeight, scrollHeight } = event.currentTarget;
    if (scrollHeight - scrollTop === clientHeight) {
      setPage((prev) => prev + 1);
    }
  }; 

  useEffect(() => {
    const loadCoins = async () => {
      setLoading(true);
      const newCoins = await getCoins(page);
      console.log(newCoins)
      setCoins((prev) => [...prev, ...newCoins]);
      setLoading(false);
      }
     
   loadCoins()
    
  }, [page])
  
     
  useEffect(() => {
    dispatch(getPosts());
  }, [currentId, dispatch]);

  return (




    <>
      <Container fluid>
        <Row>
          <Col lg="3" sm="6">
            <Card className="card-stats">
              <Card.Body>
                <Row>
                  <Col xs="5">
                    <div className="icon-big text-center icon-warning">
                      <i className="fab fa-btc"></i>
                    </div>
                  </Col>
                  <Col xs="7">
                    <div className="numbers">
                      <p className="card-category">Number</p>

                      <Card.Title as="h4">$55000</Card.Title>
                    </div>
                  </Col>
                </Row>
              </Card.Body>
              <Card.Footer>
                <hr></hr>
                <div className="stats">
                  <i className="fas fa-redo mr-1"></i>
                  Update Now
                </div>
              </Card.Footer>
            </Card>
          </Col>
          <Col lg="3" sm="6">
            <Card className="card-stats">
              <Card.Body>
                <Row>
                  <Col xs="5">
                    <div className="icon-big text-center icon-warning">
                      <i className="fas fa-pound-sign"></i>
                    </div>
                  </Col>
                  <Col xs="7">
                    <div className="numbers">
                      <p className="card-category">Revenue</p>
                      <Card.Title as="h4">$ 1,345</Card.Title>
                    </div>
                  </Col>
                </Row>
              </Card.Body>
              <Card.Footer>
                <hr></hr>
                <div className="stats">
                  <i className="far fa-calendar-alt mr-1"></i>
                  Last day
                </div>
              </Card.Footer>
            </Card>
          </Col>
          <Col lg="3" sm="6">
            <Card className="card-stats">
              <Card.Body>
                <Row>
                  <Col xs="5">
                    <div className="icon-big text-center icon-warning">
                      <i className="fas fa-euro-sign"></i>
                    </div>
                  </Col>
                  <Col xs="7">
                    <div className="numbers">
                      <p className="card-category">Errors</p>
                      <Card.Title as="h4">23</Card.Title>
                    </div>
                  </Col>
                </Row>
              </Card.Body>
              <Card.Footer>
                <hr></hr>
                <div className="stats">
                  <i className="far fa-clock-o mr-1"></i>
                  In the last hour
                </div>
              </Card.Footer>
            </Card>
          </Col>
          <Col lg="3" sm="6">
            <Card className="card-stats">
              <Card.Body>
                <Row>
                  <Col xs="5">
                    <div className="icon-big text-center icon-warning">
                      <i className="fas fa-yen-sign"></i>
                    </div>
                  </Col>
                  <Col xs="7">
                    <div className="numbers">
                      <p className="card-category">Followers</p>
                      <Card.Title as="h4">+45K</Card.Title>
                    </div>
                  </Col>
                </Row>
              </Card.Body>
              <Card.Footer>
                <hr></hr>
                <div className="stats">
                  <i className="fas fa-redo mr-1"></i>
                  Update now
                </div>
              </Card.Footer>
            </Card>
          </Col>
        </Row>
        <Chart />
        <h3>last strategies deployed</h3>
        <Posts setCurrentId={setCurrentId} />
        
        <Row>
        <Content onScroll={handleScroll}>
          {coins.map(coin => {
            return (
              <Coin
                key={coin.id}
                name={coin.name}
                price={coin.current_price}
                symbol={coin.symbol}
                marketcap={coin.total_volume}
                volume={coin.market_cap}
                image={coin.image}
                priceChange={coin.price_change_percentage_24h}

              />
              

            )
            
          })}
          </Content>
         
         

         
        </Row>
      </Container>
    </>
  );
}

export default Dashboard;
