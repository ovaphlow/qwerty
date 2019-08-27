import React from 'react'

const List = () => {
  const [list, setList] = React.useState([])

  React.useEffect(() => {
    fetch(`/api/food/`)
      .then(response => response.json())
      .then(res => {
        console.info(res)
        if (res.message) {
          window.alert(res.message)
          return
        }
        setList(res.content)
      })
      .catch(err => window.console.error(err))
  }, [])

  return (
    <div className="container">
      <h1>美食</h1>

      <hr />
      
      <div className="row">
        {
          list.map(it => (
            <div className="col-3" key={it.id}>
              <div className="card shadow">
                <img src={it.url} className="card-img-top" alt={it.name} />

                <div className="card-body">
                  <div className="card-title">{it.name}</div>
                </div>
              </div>
            </div>
          ))
        }
      </div>
    </div>
  )
}

export default List