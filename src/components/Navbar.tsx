const Navbar = () => {
  return (
    <div id="navbar-container">
      <div id="navbar">
        <img src="assets/radix-logo-dark.png" alt="dev mode setup" />
        <img src="assets/developer-img.png" alt="dev mode setup" />
      </div>

      <div id="connect-btn">
        <radix-connect-button />
      </div>
    </div>
  );
};

export default Navbar;
