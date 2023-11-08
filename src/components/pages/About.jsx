import img from '../../assets/alexstrunk.jpg';

function About() {
  return (
    <header className="header">
      <h1 >Alex Strunk </h1>
      {/* <img  src='src/assets/alexstrunk.jpg'></img> */}
      <img src= {img}></img>
      <p className='bio'>A recent grad from a coding bootcamp who is outgoing, passionate, and experienced leader who is growth-motivated. Excels in a fast-paced environment while maintaining detailed organization and communication. Values a fun, diverse, and dedicated team. Extensive experience in inventory management, managerial duties, supply and demand relations, and customer service.</p>
    </header>
  );
}

export default About;
