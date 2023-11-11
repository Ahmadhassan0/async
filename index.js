// function myPromise () {
//     return Promise((resolve, reject) => {
//         // async
//         resolve(value);
//         reject(error);

//     })
// }


//==================================================================
// const shop = new Promise((resolve, reject) => {                 //production code
//         resolve(value);
//         reject("error");
// })

// shop.then(                                                  //consuming code
//     (req) => {
//         console.log(req);
//     },
//     (error) => {
//         console.log(error);
//     }
// )


// =======================================================
// const shop = new Promise((resolve, reject) => {      //production code
//     let req = true;
//     if (req === false) {
//         resolve(req);

//     } else {
//         reject("error");
//     }
// })

// shop.then(
//     (req) => {                                        //consuming code
//         console.log(req);
//     },
//     (error) => {
//         console.log(error);
//     }
// )


// ======================================================= call back function example
// function fetchDataFromServer(callback) {
//     // Simulate data fetching
//     setTimeout(function () {
//         const data = 'Some data from the server';
//         callback(data); // Execute the callback function with the data
//     }, 1000);
// }

// function processData(data) {
//     console.log('Data received:', data);
// }

// fetchDataFromServer(processData);


// ======================================================= Promise object example
// const shopify = new Promise((resolve, reject) => {
//     let cost = 40;
//     if (cost == 40) {
//         resolve(`per item cost is ${cost} dollar`);
//     } else {
//         reject ("price not found");
//     }
// })
// .then (
//     (value) => {
//         console.log(value);
//     }
// )
// .catch (
//     (error) => {
//         console.log(error);
//     }
// )
// .finally (
//     () => {
//         console.log("This is final result")
//     }
// )


// ======================================================= Promise object example 2
// function getName(name) {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             console.log("this will return name")
//             resolve(name);
//         }, 2000);
//     }) 
//     }

//     function getHobbies(name) {
//         return new Promise((resolve, reject) => {
//             setTimeout(() => {
//                 console.log("this is my hobby")
//                 resolve([1,2,2])
//             }, 1000)
//         })
//     }

//     getName("Ahmad")
//     // .then(value => getHobbies(value))
//     // .then(hobby => console.log(hobby))
//     .then(
//         (value) => {
//             return getHobbies(value)
//         })
//         .then(
//             (hobby) => {
//                 console.log(hobby);
//         }
//     )


// ======================================================= .then method used for consuming code(Promise used in function)
    // function getName(name) {
    //     return new Promise((resolve, reject) => {
    //         setTimeout(() => {
    //             console.log("this function will give my name below");
    //             resolve(name);
    //         }, 2000)
    //     })
    // }

    // function getHobbies(name) {
    //     return new Promise((resolve, reject) => {
    //         setTimeout(() => {
    //             console.log("This function will give my hobbies");
    //             resolve(["coc", "red alert", `My favorite game ${name}`])
    //         })
    //     })
    // }

    // getName("Ahmad")
    // .then(
    //     (value) => {
    //         console.log(value);
    //         return getHobbies(value);
    //     }
    // )
    // .then(
    //     (hobby) => {
    //         console.log(hobby);
    //     }
    // )
    // .catch()


// ======================================================= async function used for consuming code(Promise used in function)
    // function getName(name) {
    //     return new Promise((resolve, reject) => {
    //         setTimeout(() => {
    //             console.log("this function will give my name below");
    //             resolve(name);
    //         }, 2000)
    //     })
    // }

    // function getHobbies(name) {
    //     return new Promise((resolve, reject) => {
    //         setTimeout(() => {
    //             console.log("This function will give my hobbies");
    //             resolve(["coc", "red alert", `My favorite game ${name}`])
    //         })
    //     })
    // }

    // async function myHobby() {
    //     const myName = await getName("Ahmad");
    //     const myHobbies = await getHobbies(myName);
    //     console.log(myName);
    //     console.log(myHobbies);
    // }
    // myHobby();


// =======================================================fetch data from api 
    // let api = "https://www.boredapi.com/api/activity/";
    // async function getActivity() {
    //     let activity = await fetch(api);
    //     let todayActivity = await activity.json();
    //     let result = todayActivity.activity;
    //     console.log(result);
    // }
    // getActivity();


// =======================================================promise chaining
    // let first = new Promise((res, rej) => {
    //     return res("First promise");
    // })
    // let second = first.then(
    //     (data) => {
    //         console.log(data);
    //         return new Promise((res, rej) => {
    //             return res("Second Promise");
    //         })
    //     })
    //     let third = second.then(
    //         (data) => {
    //             console.log(data);
    //             return new Promise((res, rej) => {
    //                 return res("Third Promise");
    //             })
    //         }
    //     )
    //     let forth = third.then(
    //         (data) => {
    //             console.log(data);
    //             return new Promise((res, rej) => {
    //                 return res("Forth Promise");
    //             })
    //         }
    //     )
    //     .then(
    //         (data) => {
    //             console.log(data);
    //         }
    //     )

// ======================================================= function with .then method
//     function random () {
//         const api = fetch("https://randomuser.me/api/")
//         .then(data =>  data.json())
//         .then(data => console.log(data))
//     }
// random();


// ======================================================= async function
    // async function randomUser () {
    //     let raw = await fetch("https://randomuser.me/api/");
    //     let data = await raw.json();
    //     console.log(data);
    // }
    // randomUser();


// ======================================================= async function(Testing APIs)
    async function randomUser () {
        try {
            let raw = await fetch("https://api.publicapis.org/entries");
            let data = await raw.json();
            console.log(data)
            return data.entries.forEach(entry => {
                console.log("API:", entry.API);
                console.log("Description:", entry.Description);
            });
        } catch (error) {
            console.error("could not fetch the data")
        }
    }
    randomUser();






