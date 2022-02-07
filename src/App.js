
import "./App.css";

function App() {
  return (
    <div className="App">
      <nav className="navbar navbar-light bg-light shadow">
        <div className="container-fluid">
          <a href="https://github.com" className="navbar-brand">
            Company name
          </a>
          <ul className="nav-ul d-flex">
            <li>Features</li>
            <li>Enterprise</li>
            <li>Support</li>
            <li>Pricing</li>
          </ul>
          <form className="d-flex">
            <button className="btn btn-outline-primary" type="submit">
              Sign up
            </button>
          </form>
        </div>
      </nav>
      <section>
        <div className="container">
          <div className="row">
            <div className="col mt-5">
              <p className="text-center mt-5 pricing">Pricing</p>
              <p className="text-center text">
                Quickly build an effective pricing table for your potential
                customers with this Bootstrap example. It's built with default
                Bootstrap components and utilities with little customization.
              </p>
            </div>
          </div>
        </div>
      </section>
      <section>
        <div className="container">
          <div className="row mt-5">
            <div className="col">
              <div class="card text-center mx-5">
                <h5 class="card-header p-3">Free</h5>
                <div class="card-body px-5 py-4">
                  <span class="card-span1">$0 </span>
                  <span className="card-span2">/ mo</span>
                  <p class="card-text">
                    10 users included 2 GB of storage Email support Help center
                    access
                  </p>
                  <a href="https://github.com" class="btn btn-outline-primary">
                    Sign up for free
                  </a>
                </div>
              </div>
            </div>
            <div className="col">
              <div class="card text-center mx-5">
                <h5 class="card-header p-3">Pro</h5>
                <div class="card-body px-5 py-4">
                  <span class="card-span1">$15 </span>
                  <span className="card-span2">/ mo</span>
                  <p class="card-text">
                    20 users included 10 GB of storage Priority email support
                    Help center access
                  </p>
                  <a href="https://github.com" class="btn btn-primary">
                    Contact us
                  </a>
                </div>
              </div>
            </div>
            <div className="col">
              <div class="card text-center mx-5">
                <h5 class="card-header p-3">Enterprise</h5>
                <div class="card-body px-5 py-4">
                  <span class="card-span1">$29 </span>
                  <span className="card-span2">/ mo</span>
                  <p class="card-text">
                    30 users included 15 GB of storage Phone and email support
                    Help center access
                  </p>
                  <a href="https://github.com" class="btn btn-primary">
                    Contact us
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section>
        <div className="container">
          <div className="row mt-5 mb-5">
            <div className="col-md-3 col-sm-12 ps-5">
              <img className="img"
                src="https://getbootstrap.com/docs/4.0/assets/brand/bootstrap-solid.svg"
                alt=""
              />
              <p>© 2017-2018</p>
            </div>
            <div className="col-md-3 col-sm-12">
              <ul class="list-group">
                <li class="list-group-item"><b>Features</b></li>
                <li class="list-group-item">Cool stuff</li>
                <li class="list-group-item">Random feature</li>
                <li class="list-group-item">Team feature</li>
                <li class="list-group-item">Stuff for developers</li>
                <li class="list-group-item">Another one</li>
                <li class="list-group-item">Last time</li>
              </ul>
            </div>
            <div className="col-md-3 col-sm-12">
            <ul class="list-group">
                <li class="list-group-item"><b>Resources</b></li>
                <li class="list-group-item">Resource</li>
                <li class="list-group-item">Resource name</li>
                <li class="list-group-item">Another resource</li>
                <li class="list-group-item">Final resource</li>
              </ul>
            </div>
            <div className="col-md-3 col-sm-12">
            <ul class="list-group">
                <li class="list-group-item"><b>About</b></li>
                <li class="list-group-item">Team</li>
                <li class="list-group-item">Locations</li>
                <li class="list-group-item">Privacy</li>
                <li class="list-group-item">Terms</li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default App;
