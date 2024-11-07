import "./css/Header.css";
export default function Header() {
    return (
            <nav className="menu">
                <a href="/">Home</a>
                <a href="/about">About</a>
                <a href="/services">Services</a>
                <a href="/contact">Contact</a>
            </nav>
    );
}