function Promise_all(promises) {
    

    return new Promise((resolve, reject) => {
        var array = [];
        var counter = promises.length;


        for(let i = 0; i<promises.length; i++)
        {
            
            //resolving each promise from promises array one by one
            promises[i].then(val => 
                {
                    //we add the result of "resolve" in the array
                    array[i] = val;

                    //when promise is resolved - the counter decrements by one
                    counter--;

                    //if counter is 0 then all promises are resolved
                    if(counter == 0){

                        //we return an array of the results from resolved promises
                        resolve(array);
                    }

                })
            .catch(err => reject(err));   
        }
    
        //if the array of promises passed in the argument is empty - we return an empty array too.
        if(promises.length == 0){
            resolve(array);
        }

    })
    };
        
    

// Test code.
Promise_all([]).then(array => {
    console.log("This should be []:", array)
})
function soon(val) {
    return new Promise(resolve => {
        setTimeout(() => resolve(val), Math.random() * 500)
    })
}
Promise_all([soon(1), soon(2), soon(3)]).then(array => {
    console.log("This should be [1, 2, 3]:", array)
})
Promise_all([soon(1), Promise.reject("X"), soon(3)])
    .then(array => {
        console.log("We should not get here")
    })
    .catch(error => {
        if (error != "X") {
            console.log("Unexpected failure:", error)
        }
    })