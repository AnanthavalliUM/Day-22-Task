import './navbar.css';
const navbar = () =>{
    return (
        <nav className="navbar container">
            <div className="nav-style container">
                <h4>Start Bootstrap</h4>
                <button type="button" class="btn btn-primary"><a className='anch' href="#signup-page" rel='noreferrer'>Sign Up</a></button>
            </div>
        </nav>
    );
}

export default navbar;