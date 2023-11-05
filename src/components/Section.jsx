import '../styles/Section.css';

// By importing the Section.css file, it is added to the DOM whenever this component loads

// We can also style a component inside of its JavaScript file by adding style properties to its rendered elements
// Unlike regular HTML, a JSX style property must be an object instead of a string
// On a style object, we camelCase all property names, and put all of the values in quotes
// Non quoted values default to "pixels", e.g. height, margin, padding

const cardStyle = {

    background: 'light blue',
   
    alignItems: 'center',
   

};

// We use JSX curly braces to evaluate the style object on the JSX tag

function Section() {
  return (
    <div className='container'>
      <section style={cardStyle} className="section">
        <h2>put a nice header here</h2>
            <div class="card project">
                <img src="./assets/whoseHotterLogo.svg"  alt="WhoseHotter text with beach umbrella and sun"/>
                <h2>group project 1</h2>
                <a href="https://gabe-velasquez.github.io/Whose_Hotter/">Whose Hotter</a>              
            </div>    
            <br></br>
            <div class="card project">
                <img src="./assets/logo.png" alt="coffee cup with text Starbys Cup Corner"/>
                <a href="https://hidden-savannah-06081-4ae52891d71b.herokuapp.com/api/aboutRoute/about">Starbys Cup Corner</a>
            </div>   
        <p>
        put something else here
        </p>
        <p>
        put something else here.
        </p>
        <p>
        put something else here
        </p>
      </section>
    </div>
  );
}

export default Section;
