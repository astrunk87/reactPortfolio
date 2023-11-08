
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
            <a className='repo' href='https://github.com/astrunk87/weatherApp'>  github repo for Whose Hotter project  </a>    
                         {/*clickable pic with help from w3schools  */}
            </div>    
            <br></br>
            <div className='project'>
                <img className='classImg' src="src\assets\logo.png" alt="coffee cup with text Starbys Cup Corner"/>
                <br></br>
                <a target='_blank' href="https://hidden-savannah-06081-4ae52891d71b.herokuapp.com/api/aboutRoute/about"><img className='classImg' src='src/assets/starbysCupCornerWebsite.png'></img></a>
                <br></br>
            <a className='repo' href='https://github.com/shinyuta/Project-2-UofMN'>  github repo for Starby's Cup Corner project  </a> 
            </div>   
            
            <br></br>
            
            <div className='project'>
                <a target='_blank' href="https://astrunk87.github.io/WorkDayScheduler/"><img className='classImg' src="src\assets\WorkDayScheduler.png" alt="workday scheduler"></img></a>
                <br></br>
            <a className='repo' href='https://github.com/astrunk87/WorkDayScheduler'>  github repo for Work Day Scheduler project  </a> 
            </div>  

            <br></br>            
            
            <div className='project'>
                <a target='_blank' href="https://astrunk87.github.io/weatherApp/"><img className='classImg' src="src\assets\5dayForecast.png" alt="note taker"></img></a>
                <br></br>
            <a className='repo' href='https://github.com/astrunk87/weatherApp'>  github repo for Weather App project  </a> 
            </div>
            
            <br></br>

            <div className='project'>
                <a target='_blank' href="https://notesbyas-2219e7dcb68d.herokuapp.com/"><img className='classImg' src="src\assets\noteTaker2.png" alt="note taker"></img></a>
                <br></br>
            <a className='repo' href='https://github.com/astrunk87/note_taker'>  github repo for Note Taker project  </a> 
            </div>
            
            <br></br>
            
            <div className='project'>
                <a target='_blank' href="https://astrunk87.github.io/mod4-quiz/"><img className='classImg' src="src\assets\codingQuiz.png" alt="note taker"></img></a>
                <br></br>
            <a className='repo' href='https://github.com/astrunk87/mod4-quiz'>  github repo for Coding Quiz project  </a> 
            </div>
        
      </section>
    </div>
  );
}

export default Portfolio;
