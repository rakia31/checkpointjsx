import "./App.css";
export function Rakia(){
    return(
     
      <div>
        <div style={{border: 'solid 1px black', maxWidth: '100vw'}}>
          <h1 className="title red">welcome to aviation enviroment</h1>
          <br />
          <p> this is inner cockpit </p>
          <img padding ={20 }
               width = {320}
               height= {240} 
          className= "image1"  controls src ="https://airbus-h.assetsadobe2.com/is/image/content/dam/products-and-solutions/commercial-aircraft/a220-family/a220-300/airbus-a220-300-cockpit.jpg?wid=1920&fit=fit,1&qlt=85,0" alt="avion"/>
          <br/>
          <p> this is landing </p>
          <img width={320} height={240} controls src="https://i.ytimg.com/vi/xNJ8jfB4Oac/maxresdefault.jpg" alt="interieur avion" />
          <br />
        </div>
        <p> this is a video </p>
        <video width={320} height={240} controls>
          <source src="https://www.youtube.com/watch?v=w7ejDZ8SWv8" type="video/mp4" />
        </video>
      </div>
    );
  }
;
    