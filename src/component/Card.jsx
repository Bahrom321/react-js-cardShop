import React, { useEffect, useState } from 'react'
import {  toast } from 'react-toastify';

const Card = () => {
    const [mainCard, setMainCard] = useState([]);
    const [card, setCard] = useState([])
    const [isModal, setIsModal] = useState(true)
    const addCardHandle = (item) => {
        setCard (prev => {
            return [ ...prev, item]
        })
        toast.dark('Product added successfully');

    }

    const modalHandler = () => {
        setIsModal(!isModal)
    }

    useEffect(() => {
        fetch('https://fakestoreapi.com/products')
            .then(res=>res.json())
            .then((json) => setMainCard(json))
    },[])
    console.log(card);
  return (
    <div className='album py-5 bg-light'>
        <div className="container">
        <nav className="navbar navbar-light bg-light">
  <div className="container-fluid">
    <a className="navbar-brand" href="#">Navbar</a>
  </div>
</nav>
            <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3" >
                {mainCard.map(item => (
                    <div key={item.id} className='col'>
                        <div className='card shadow-sm p-3' style={{minHeight:"500px"}}>
                            <div className="card-title">
                                <h4 className='tex-muted text-center'>Product #{item.id}</h4>    
                            </div>    
                            <img 
                            src={item.image} 
                            alt={item.title} 
                            className="bg-placeholder card-image-top" 
                            width="100%"
                            height="270px"
                            />
                        <div className="card-body">
                            <p className='card-text'>{item.title.slice(0, 20)}</p>
                            <p className='card-text fw-lighter'>{item.description.slice(0, 50)}</p>    
                        </div>
                        <div className="card-footer d-flex justify-content-between align-items-center">
                            <div className="">
                                <span>{item.category}</span>
                            </div>
                            <span className='text-muted'>$ {item.price}</span>
                        </div>
                        <button onClick={() => addCardHandle(item)}  className='mt-3 btn btn-outline-primary'>Add Card</button>
                        </div>
                    </div>
                ))}
            </div>    
        </div>

        <div className="fixed-top m-3">
            <button onClick={modalHandler} type="button" className="btn btn-primary position-relative">Card
                   <span className="visually-hidden">unread messages</span>
            
            </button>
        </div>
        {isModal && (
            <div className="modal" style={{display:"block", background:"rgba(0,0,0,.8)"}}>
            <div className="modal-dialog">
              <div className="modal-content">
                <div className="modal-header">
                  <h5 className="modal-title">Card</h5>
                  <button 
                  type="button" 
                  className="btn-close" 
                  data-bs-dismiss="modal" 
                  aria-label="Close"
                  onClick={modalHandler}
                  ></button>
                </div>
                <div className="modal-body">
                  {card.map((item => (
                      <div className='card mb-3'>
                        <div className="row g-0">
                            <div className="col-md-4">
                                <img 
                                src={item.image} 
                                alt={item.title} 
                                className="img-fluid rounded-start" 
                                />
                            </div>
                            <div className="col-md-8">
                                <div className="card-body">
                                    <h5 className='card-title'>{item.title}</h5>
                                    <p className='card-text text-muted'>{item.description.slice(0, 100)}</p>
                                    <p className="card-text">
                                        <small className="text-muted">$ {item.price}</small>    
                                    </p>    
                                </div>    
                            </div>    
                        </div>
                      </div>
                  )))}
                </div>
                <div className="modal-footer">
                  
                  <button onClick={modalHandler} type="button" className="btn btn-primary">Close</button>
                </div>
              </div>
            </div>
          </div>
        )}
    </div>
  )
}

export default Card
