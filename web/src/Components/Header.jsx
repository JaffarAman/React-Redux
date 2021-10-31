import react from "react"

const Header = ()=>{
    return(     
        <>
        <nav className="navbar navbar-expand-lg navbar-light">
        <a className="navbar-brand" href="#">React - Redux</a>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
      
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav mr-auto">
            <li className="nav-item active">
              <a className="nav-link" >Home <span className="sr-only">(current)</span></a>
            </li>
            <li className="nav-item">
              <a className="nav-link" >Link</a>
            </li>
            </ul>
            <button disabled={true} className="btn btn-primary" >AMOUNT : 10000</button>

            </div>
      </nav>
      </>
        )

}

export default Header