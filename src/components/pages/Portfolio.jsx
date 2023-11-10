
import WHLogo from '../../assets/whoseHotterLogo.svg';
import whoseHotter from '../../assets/whoseHotterWebsite.png';
import starbys from '../../assets/starbysCupCornerWebsite.png';
import starbysLogo from '../../assets/logo.png';
import workDay from '../../assets/WorkDayScheduler.png';
import weatherApp from '../../assets/5dayForecast.png';
import noteTaker from '../../assets/noteTaker2.png';
import codingQuiz from '../../assets/codingQuiz.png';


// import img fix for netfily with help from classmate greg

function Portfolio() {
  return (
    <div className='container'>
      <section className="section">
        <h2>Take a look at some of the projects I have created below</h2>
          <div className='project'>      
          <img className='classImg' src={WHLogo}  alt="WhoseHotter text with beach umbrella and sun"/>  
          <br></br>        
            <a target="_blank" href="https://gabe-velasquez.github.io/Whose_Hotter/"
            ><img className='classImg' src={whoseHotter} alt="WhoseHotter text with beach umbrella and sun"/></a> 
            <br></br>
            <a className='repo' href='https://github.com/astrunk87/weatherApp'>  github repo for Whose Hotter project  </a>    
                         {/*clickable pic with help from w3schools  */}
            </div>    
            <br></br>
            <div className='project'>
                <img className='classImg' src={starbysLogo} alt="coffee cup with text Starbys Cup Corner"/>
                <br></br>
                <a target='_blank' href="https://hidden-savannah-06081-4ae52891d71b.herokuapp.com/api/aboutRoute/about"><img className='classImg' src={starbys}></img></a>
                <br></br>
            <a className='repo' href='https://github.com/shinyuta/Project-2-UofMN'>  github repo for Starby's Cup Corner project  </a> 
            </div>   
            
            <br></br>
            
            <div className='project'>
                <a target='_blank' href="https://astrunk87.github.io/WorkDayScheduler/"><img className='classImg' src={workDay} alt="workday scheduler"></img></a>
                <br></br>
            <a className='repo' href='https://github.com/astrunk87/WorkDayScheduler'>  github repo for Work Day Scheduler project  </a> 
            </div>  

            <br></br>            
            
            <div className='project'>
                <a target='_blank' href="https://astrunk87.github.io/weatherApp/"><img className='classImg' src={weatherApp} alt="weather app"></img></a>
                <br></br>
            <a className='repo' href='https://github.com/astrunk87/weatherApp'>  github repo for Weather App project  </a> 
            </div>
            
            <br></br>

            <div className='project'>
                <a target='_blank' href="https://notesbyas-2219e7dcb68d.herokuapp.com/"><img className='classImg' src={noteTaker} alt="note taker"></img></a>
                <br></br>
            <a className='repo' href='https://github.com/astrunk87/note_taker'>  github repo for Note Taker project  </a> 
            </div>
            
            <br></br>
            
            <div className='project'>
                <a target='_blank' href="https://astrunk87.github.io/mod4-quiz/"><img className='classImg' src={codingQuiz} alt="coding quiz"></img></a>
                <br></br>
            <a className='repo' href='https://github.com/astrunk87/mod4-quiz'>  github repo for Coding Quiz project  </a> 
            </div>
        
      </section>
    </div>
  );
}

export default Portfolio;
