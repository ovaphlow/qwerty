import React from 'react'

const List = () => {
  return (
    <div className="container">
      <h1>美食</h1>

      <hr />
      
      <div className="row">
        <div className="col-3">
          <div className="card shadow">
            <img src="http://pic36.nipic.com/20131204/8840_114220627198_2.jpg" class="card-img-top" alt="..." />

            <div className="card-body">
              <div className="card-title">火锅</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default List