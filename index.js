

const getQuotes= async()=>{
    const api="https://type.fit/api/quotes";
    try{
       const data = await fetch(api);
       console.log(data)
    }
    catch(error){
     console.log(error)}
    }
    getQuotes()

