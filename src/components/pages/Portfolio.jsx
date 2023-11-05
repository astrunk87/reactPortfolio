
// const cardStyle = {

//     background: 'light blue',
   
//     alignItems: 'center',
   

// };

function Portfolio() {
  return (
    <div className='container'>
      <section className="section">
        <h2>take a look at some of the projects I have created below</h2>
          <div className='container'>
                <img src="src\assets\whoseHotterLogo.svg"  alt="WhoseHotter text with beach umbrella and sun"/>
                <a href="https://gabe-velasquez.github.io/Whose_Hotter/">Whose Hotter</a>              
            </div>    
            <br></br>
            <div className='container'>
                <img src="src\assets\logo.png" alt="coffee cup with text Starbys Cup Corner"/>
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

export default Portfolio;
