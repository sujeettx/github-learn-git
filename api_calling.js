const fetchData = async()=>{
    const responce = fetch("https://jsonplaceholder.typicode.com/users");
    const result = await responce.json()
    console.log(result);
}
fetchData();

const fetchData1 = async()=>{
    const responce = fetch("https://jsonplaceholder.typicode.com/users");
    const result = await responce.json()
    console.log(result);
}
fetchData();