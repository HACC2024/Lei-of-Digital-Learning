import "./css/Header.css";

export default function Header() {
    return (
        <article>
            <nav className="menu">
                <a href="/">Home</a>
                <a href="/contact">Contact</a>
            </nav>
            <h2>Lei of Digital Learning</h2>
            <nav className="menu">
                <a href="/login">Login</a>
                <a href="/register">Register</a>
            </nav>
        </article>
    );
}