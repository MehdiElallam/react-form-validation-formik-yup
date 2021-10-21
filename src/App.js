import rocketImg from './assets/rocket.png'
import SignUp from './components/auth/signUp';

function App() {
  return (
    <div className="container mt-3">
      <div className="row">
            <div className="col-md-5">
                <SignUp />
            </div>
            <div className="col-md-7">
                <img src={rocketImg} className="img-fluid w-100" />
            </div>
      </div>
    </div>
  );
}

export default App;
