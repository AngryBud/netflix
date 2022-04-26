
const Section = (props) =>{
    const movies = props.img;
    return(
        <div className = "section"> 
            <h1>{props.title}</h1>
            <div className="movies">
                {movies.map((mov, index) =>{
                return <img src={mov} alt={mov} text=""/>
            })}
            </div>
        </div>
    );
}

export default Section;