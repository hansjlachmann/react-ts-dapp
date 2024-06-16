const Navbar = () => {
  return (
    <div id="navbar-container">
      <div id="navbar">
        <img src="https://github.com/hansjlachmann/react-ts-dapp/blob/main/src/assets/radix-logo-dark.png" alt="dev mode setup" />
        <img src="https://github.com/hansjlachmann/react-ts-dapp/blob/main/src/assets/developer-img.png" alt="dev mode setup" />
      </div>

      <div id="connect-btn">
        <radix-connect-button />
      </div>
    </div>
  );
};

export default Navbar;
