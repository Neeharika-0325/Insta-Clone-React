import dots from '../img/icons8-more-48.png'
import heart from '../img/heart.png'
import Header from "./Header"
import "../postview.css"
const API_KEY = process.env.REACT_API || "http://localhost:8080"


const PostView = (props) =>{
   

    return(
       <>
       <div><Header/></div>
            {props.data.map((items,idx)=>(
                <section className="box">
                    <div className="wrapper">
                <div><b>{items.name}</b></div>
                <div className="location">{items.location}</div>
                <img src={dots}  alt="more" className="more"/>
                
                </div>
                <img src={`${API_KEY}/uploads/${items.PostImage}`} alt="posts" className="display"/>
                <div>
                    <img src={heart} alt='like' className="icons"/>
                    <div className="likes"> {items.likes} Likes</div>
                    <div className="date">{items.date}</div>
                   
                </div>
                <div className="description">
                    <b>{items.description}</b>
                </div>
                </section>
    
            ))}
            </>
    )

       
}
export default PostView