// define a home controller

// the db parameter contains all the models
export default function initHomeController(db) {
    // return an object of route functions
    return {
        'home': async (req,res) => {
            res.send("Hello World")
        },
        'about': async function(req,res) {
            res.send("About Us")
        }
    }
}