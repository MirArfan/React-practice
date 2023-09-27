function Place({imageUrl, location, dist, taka, date}){
    
  return(
    <div>
        <img className="w-80 h-80 rounded-md"
         src={imageUrl} />
         <h2 className="font-semibold"> {location} </h2>
         <p className="text-fray-500">{dist}</p>
         <p className="text-fray-500">{date} </p>
         <p> <span className="font-semibold"> {taka}</span> night</p>
    </div>
  );
}
export default Place;