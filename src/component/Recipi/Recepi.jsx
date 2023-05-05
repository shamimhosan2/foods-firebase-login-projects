import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import './Recipi.css'
 import { AiFillStar } from 'react-icons/ai';
import { Link } from 'react-router-dom';

const Recepi = () => {
    return (
        <div>
            <Container>
              <h1>Mexican Grilled Corn Recipe</h1>
              <hr />
           <Row className='recepi-names'>
              <Col sm className='box-shodow'>
                <img src="/src/images/cinnamon-99655_1920-300x300.jpg" alt="" />
                <h4 className='amount'>$65(25.5tk)</h4>
                <p className='recepy-title'>Cinnamon Roll Cake</p>
                <div className='star'>
                     <AiFillStar></AiFillStar>
                     <AiFillStar></AiFillStar>
                     <AiFillStar></AiFillStar>
                     <AiFillStar></AiFillStar>
                  </div>
                    <div className='btns'>
                     <Link to='/news'>  <button type="button" class="btn btn-danger">Details</button></Link>
                    </div>

              </Col>
              <Col sm className='box-shodow'>
                <img src="/src/images/recipe_152-300x300.jpg" alt="" />
                <p className='recepy-title'>Grilled champignon somen noodles</p>
                <h4 className='amount'>$45(25.5tk)</h4>
                <div className='star'>
                     <AiFillStar></AiFillStar>
                     <AiFillStar></AiFillStar>
                     <AiFillStar></AiFillStar>
                     <AiFillStar></AiFillStar>
                     <AiFillStar></AiFillStar>
                  </div>
                  <div className='btns'>
                      <Link to='/news'>  <button type="button" class="btn btn-danger">Details</button></Link>
                    </div>
              </Col>
              <Col sm className='box-shodow'>
                <img src="/src/images/recipe_81-300x300.jpg" alt="" />
                <p className='recepy-title'>Tomatoes & Clams Pasta</p>
                <h4 className='amount'>$75(35.5tk)</h4>
                  <div className='star'>
                     <AiFillStar></AiFillStar>
                     <AiFillStar></AiFillStar>
                     <AiFillStar></AiFillStar>
                     <AiFillStar></AiFillStar>
                  </div>
                  <div className='btns'>
                     <Link to='/news'>  <button type="button" class="btn btn-danger">Details</button></Link>
                    </div>
                </Col>
              
          </Row>
           <Row className='recepi-names'>
              <Col sm className='box-shodow'> 
                <img src="/src/images/recipeThumb-05.jpg" alt="" />
                 <p className='recepy-title'>Pollo Borracho Homemade Tortillas</p>
                 <h4 className='amount'>$66(27.5tk)</h4>
                 <div className='star'>
                     <AiFillStar></AiFillStar>
                     <AiFillStar></AiFillStar>
                     <AiFillStar></AiFillStar>
                     <AiFillStar></AiFillStar>
                     <AiFillStar></AiFillStar>
                  </div>
                  <div className='btns'>
                    <Link to='/news'>  <button type="button" class="btn btn-danger">Details</button></Link>
                    </div>
              </Col>
              <Col sm className='box-shodow'> 
                <img src="/src/images/recipeThumb-04.jpg" alt="" />
                <p className='recepy-title'>Avocado Melon Salad With Lime Vinaigrette</p>
                <h4 className='amount'>$66(27.5tk)</h4>
                <div className='star'>
                     <AiFillStar></AiFillStar>
                     <AiFillStar></AiFillStar>
                     <AiFillStar></AiFillStar>
                     <AiFillStar></AiFillStar>
                     <AiFillStar></AiFillStar>
                  </div>
                  <div className='btns'>
                       <Link to='/news'>  <button type="button" class="btn btn-danger">Details</button></Link>
                    </div>
                </Col>
              <Col sm className='box-shodow'>
                <img src="/src/images/recipeThumb-07.jpg" alt="" />
                <p className='recepy-title'>Roast Chickan with Lamon Gravy</p>
                <h4 className='amount'>$65(25.5tk)</h4>
                <div className='star'>
                     <AiFillStar></AiFillStar>
                     <AiFillStar></AiFillStar>
                     <AiFillStar></AiFillStar>
                     <AiFillStar></AiFillStar>
                     <AiFillStar></AiFillStar>
                  </div>
                  <div className='btns'>
                     <Link to='/news'>  <button type="button" class="btn btn-danger">Details</button></Link>
                    </div>
                </Col>
              
          </Row>
    </Container>
        </div>
    );
};

export default Recepi;