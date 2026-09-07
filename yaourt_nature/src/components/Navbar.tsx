// import "./Navbar.css";

interface NavbarProps {
    title: string;
}

function Navbar(props: NavbarProps) {
    return (
   <nav className="navbar" aria-label="Navigation principale">
            <a href="#acceuil" className="navbar-title">
                {props.title}
            </a>

            <ul className="navbar-links">
                <li>
                    <a href="#acceuil">Accueil</a>
                </li>
            
                <li>
                    <a href="#films">Films</a>
                </li>
                </ul>
        </nav>
    );
}

export default Navbar;