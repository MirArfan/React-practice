import './place.css'
import profile_icon from '../component/asset/images (28).jpg'
function Place(){
    
    return(
      <div className='upc'>
        <div className='gradiant'></div>
        <div className='profile-down'>
            <img src={profile_icon} alt="" />
            <div className='profile-title'>Rahat</div>
            <div className='profile-description'>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Saepe expedita quod voluptas 
            </div>
            <div className='profile-button'><a href="mailto:mir@email.com">Contact Me</a></div>
        </div>
     </div>
    );
  }
  export default Place;