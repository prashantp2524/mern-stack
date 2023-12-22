import Login from "./components/Login"
import Profile from "./components/Profile"
import UserContextProvider from "./context/UserContextProvider"


function App()
{

  return (
    <UserContextProvider>
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-6">
            <h1>Context API</h1>
            <Login />
            <Profile />
          </div>
        </div>
      </div>
    </UserContextProvider>
  )
}

export default App
