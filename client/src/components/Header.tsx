import "./css/Header.css";
export default function Header() {
    return (
        <header className="header">
            <nav className="nav">
                <a href="/">Home</a>
                <a href="/about">About</a>
                <a href="/services">Services</a>
                <a href="/contact">Contact</a>
            </nav>
        </header>
    );
}