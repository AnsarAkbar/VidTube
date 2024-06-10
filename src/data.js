export const API_KEY="AIzaSyBh9X4pC9CAFoipeOXhS9c_7GfKHh-lZFc"
  
export const value_converter=(value)=>{
    if (value > 1000000) {
        return Math.floor(value/1000000)+"M";
    }
    else if (value>1000){
        return Math.floor(value/1000)+"K";
    }
    else{
        return value;
    }
}