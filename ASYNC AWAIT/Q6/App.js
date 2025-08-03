function timer(duration,onComplete){
    setTimeout(()=>{
        onComplete(`Timer of ${duration} ms finished`)
    }, duration)
}

timer(200,(message)=>{
    console.log(message)
})