import '../styles/Navbar.css';

// By importing the Navbar.css file, it is added to the DOM whenever this component loads

// We can also style a component inside of its JavaScript file by adding style properties to its rendered elements
// Unlike regular HTML, a JSX style property must be an object instead of a string
// On a style object, we camelCase all property names, and put all of the values in quotes
// Non quoted values default to "pixels", e.g. height, margin, padding

// const styles = {
//   navbarStyle: {
//     background: 'teal',
//     justifyContent: 'flex-end',
//   },
// };

// We use JSX curly braces to evaluate the style object on the JSX tag

// function Navbar() {
//   return (
//     <nav style={styles.navbarStyle} className="navbar">
//       <a href="/">Alex Strunk Portfolio</a>
//     </nav>
//   );
// }

// export default Navbar;

export default function Nav() {
  const linkStyle = { padding: '1px' };

  return (
    <nav class="navbar navbar-light">
      <section
        style={{
          display: 'flex',
          fontFamily: 'helvetica',
          flexDirection: 'row',
          alignItems: 'flex-start',
          justifyContent: 'center',
          background:'red',
        }}
      >
        <div style={linkStyle}>
          <a href="#">About Me</a>
        </div>
        <div style={linkStyle}>
          <a href="#">Porfolio</a>
        </div>
        <div style={linkStyle}>
          <a href="#">Contact</a>
        </div>
        <div style={linkStyle}>
          <a href="#">Resume</a>
        </div>
      </section>
    </nav>
  );
}
