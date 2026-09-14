import "./MiniCard.css";


function MiniCard({skill}) {
  return (
    <div className='minicard-main'>
        <div className='minicard-img'><img src={skill?.img} alt="" /></div>
        <div className='minicard-text'><h3>{skill?.text}</h3></div>
    </div>
  )
}

export default MiniCard