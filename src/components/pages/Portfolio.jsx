
// const cardStyle = {

//     background: 'light blue',
   
//     alignItems: 'center',
   

// };

function Portfolio() {
  return (
    <div className='container'>
      <section className="section">
        <h2>Take a look at some of the projects I have created below</h2>
          <div className='project'>      
          <img className='classImg' src="src\assets\whoseHotterLogo.svg"  alt="WhoseHotter text with beach umbrella and sun"/>  
          <br></br>        
            <a target="_blank" href="https://gabe-velasquez.github.io/Whose_Hotter/"
            ><img className='classImg' src="src\assets\whoseHotterWebsite.png"  alt="WhoseHotter text with beach umbrella and sun"/></a> 
            <br></br>
            <a className='repo' href='https://github.com/astrunk87/weatherApp'>  github repo for this project  </a>    
                         {/*clickable pic with help from w3schools  */}
            </div>    
            <br></br>
            <div className='project'>
                <img className='classImg' src="src\assets\logo.png" alt="coffee cup with text Starbys Cup Corner"/>
                <br></br>
                <a target='_blank' href="https://hidden-savannah-06081-4ae52891d71b.herokuapp.com/api/aboutRoute/about"><img className='classImg' src='src/assets/starbysCupCornerWebsite.png'></img></a>
                <br></br>
            <a className='repo' href='https://github.com/shinyuta/Project-2-UofMN'>  github repo for this project  </a> 
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
