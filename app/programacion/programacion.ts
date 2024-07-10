

const execute =()=>{
    console.log('hello : ' + new Date().toISOString());
    setTimeout(() => { execute() }, 3600000);    
}

export default {
    execute
}
