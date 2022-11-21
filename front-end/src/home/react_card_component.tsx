
function Card (item : {url: string, caption:string, descrption: string, altText: string, key:number}){
    var cardStyle = {
        padding : '10px',
        backgroundColor: "#FFF",
    };
    return(
        <>
            <div className="card-container position-relative  col-md-4 col-sm-5 col-xs-12" key= {item.key} style={cardStyle}>
                <img src={item.url} alt={item.altText} style={{width: '100%' , height: 'auto'}}/>
                <div className="centered text-center text-uppercase font-weight-bold" >
                   {item.caption}
                </div>
            </div>
        </>
    );
}
export default Card;
