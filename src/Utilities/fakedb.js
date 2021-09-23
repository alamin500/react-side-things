// use localstorage as your db for now 
const addToDb = id => {
    const exists = localStorage.getItem(id);
    console.log(exists);
    if(!exists){
        localStorage.setItem(id, 1);
    }
    else{
        const newCount = parseInt(exists) + 1;
        localStorage.setItem(id, newCount)
    }
}
export{addToDb}