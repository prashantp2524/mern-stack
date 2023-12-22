import { useState, useCallback, useEffect, useRef } from "react"

function App()
{
  const [length, setLength] = useState(8)
  const [numAllow, setNumAllow] = useState(false)
  const [charAllow, setCharAllow] = useState(false)
  const [password, setPassword] = useState("")
  // console.log(charAllow)
  // useref
  const passwordRef = useRef(null)




  const passwordGenerator = useCallback(() =>
  {
    let pass = ""
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"

    if (numAllow)
    {
      str += "0123456789"
    }

    if (charAllow) str += "!@#$^&*~_+-"

    for (let i = 1; i <= length; i++)
    {
      let char = Math.floor(Math.random() * str.length + 1)
      console.log(char)
      pass += str.charAt(char)
    }

    setPassword(pass)


  }, [length, numAllow, charAllow, setPassword])


  const copyPasswordToClipboard = useCallback(() =>
  {
    passwordRef.current?.select()
    passwordRef.current?.setSelectionRange(0, 5)
    window.navigator.clipboard.writeText(password)

  }, [password])

  useEffect(() =>
  {
    passwordGenerator()
  }, [length, numAllow, charAllow, setPassword])

  return (
    <>
      <div className="container text-white">
        <div className="row justify-content-center vh-100 align-items-center">
          <div className="col-lg-6 text-center rounded-3 p-5 shadow-lg" style={{ backgroundColor: "indigo" }}>
            <h3>Password Generator</h3>
            <div className="mb-3 position-relative ">
              <input type="text" value={password}
                className="form-control" id="exampleFormControlInput1" placeholder="password" readOnly
                onChange={(e) => setPassword(e.target.value)}
                ref={passwordRef}
              />
              <button className="btn btn-outline-primary position-absolute end-0 top-0"
                onClick={copyPasswordToClipboard}
              >copy</button>
            </div>
            <div className="row">
              <div className="col">
                <input type="range" className="form-range" id="customRange1" min={8} max={100}
                  onChange={(e) => setLength(e.target.value)}
                />
                <label htmlFor="customRange1" className="form-label">Password Range: {length}</label>
              </div>
              <div className="col">
                <div className="">
                  <input className="form-check-input " type="checkbox" value={numAllow} defaultChecked={false} checked={numAllow} id="flexCheckIndeterminate"
                    onChange={() => setNumAllow(prev => !prev)}
                  />
                  <label className="form-check-label px-2" htmlFor="flexCheckIndeterminate">
                    Number
                  </label>
                </div>
              </div>
              <div className="col">
                <div className="">
                  <input className="form-check-input " type="checkbox" value={charAllow} id="flexCheckIndeterminate"
                    onChange={(e) => setCharAllow((prev) => !prev)}
                  />
                  <label className="form-check-label px-2" htmlFor="flexCheckIndeterminate">
                    Charecter
                  </label>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div >
    </>
  )
}

export default App
