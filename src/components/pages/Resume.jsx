import resume1 from '../../assets/resumepg1.jpg';
import resume2 from '../../assets/resumepg2.jpg';

export default function Resume() {
    return (
      <div>
        {/* <h1>Resume</h1> */}
        <img className='classImg'src= {resume1}></img>
        <img src={resume2}className='classImg'></img>
        <div 
        className= 'd-flex align-items-center mt-5 justify-content-center'>
            <a className='btn btn-success' href='src/assets/alex-strunk-resume.pdf'>Download my resume </a>            
        </div>
        </div>
    );
  }
//   href for button with help from online tutorial

 