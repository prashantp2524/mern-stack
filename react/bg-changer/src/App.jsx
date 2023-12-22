import { useState } from "react"


function App()
{

  const [color, setColor] = useState("red")
  return (
    <>
      <div className="vw-100 vh-100  d-flex align-items-end" style={{ backgroundColor: color }}>
        <div className="container mb-5">
          <div className="row bg-white p-4 roun rounded-pill ">
            <div className="col-2">
              <button className="btn btn-outline-primary " onClick={() => setColor("pink")}>pink</button>
            </div>
            <div className="col-2">
              <button className="btn btn-outline-primary" onClick={() => setColor("yellow")}>yellow</button>
            </div>
            <div className="col-2">
              <button className="btn btn-outline-primary" onClick={() => setColor("green")}>green</button>
            </div>
            <div className="col-2">
              <button className="btn btn-outline-primary " onClick={() => setColor("blue")}>blue</button>
            </div>
            <div className="col-2">
              <button className="btn btn-outline-primary " onClick={() => setColor("purple")}>purple</button>
            </div>
            <div className="col-2">
              <button className="btn btn-outline-primary " onClick={() => setColor("gray")}>gray</button>
            </div>

          </div>
        </div>
      </div>
    </>
  )
}

export default App
