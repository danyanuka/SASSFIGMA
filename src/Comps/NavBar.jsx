export function NavBar() {
  return (
    <header className="header">
      <img className="logo" src="/images/logo.svg" alt="logo" />
      <img
        className="hamburger"
        src="/images/icon-hamburger.svg"
        alt="hamburger"
      ></img>
      <nav className="nav">
        <a>home</a>
        <a>about</a>
      </nav>
      <button className="btn">contact us</button>
    </header>
  );
}
