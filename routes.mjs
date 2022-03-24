
import initHomeController from "./controllers/home.mjs";
import db from './db.mjs'

// first arg is the Express application
export default function bindRoutes(app) {
    // 
    const homeController = initHomeController(db);
    app.get('/', homeController.home);
    app.get('/about-us', homeController.about);
}