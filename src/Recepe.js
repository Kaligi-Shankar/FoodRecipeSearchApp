import React from 'react'

const recepe = ({ data }) => {
    return (
        <div >
            <div className='row'>
                {data.map(data =>
                    <div className='col-md-4'>
                        <div class='card' style={{
                            width: "18rem"}}>
                                <img class= "card-img-top" src={ data.recipe.image } alt="Card " />
                                <div class="card-body">
                                    <center>
                                        <h5> {data.recipe.label}</h5>
                                        <h6 style={{color: "red"}}> Dish Type: {data.recipe.dishType}</h6>
                                        <p> Total Amount of Calories: {Math.round(data.recipe.calories)}</p>

                                        <a href='#'className='btn btn-primary'> Buy </a>
                                    </center>
                                </div>
                        </div>
                    </div>
                )}
                
            </div >
        </div >
  )}

export default recepe