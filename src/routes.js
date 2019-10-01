const routes = require('express').Router();
const multer = require('multer');
const uploadConfig = require('./config/upload');
const upload = multer(uploadConfig);



const SessionController = require('./controllers/SessionController');
const SpotController = require('./controllers/SpotController');
const DashboardController = require('./controllers/DashboardController');
const BookingController = require('./controllers/BookingController');



routes.post('/sessions', SessionController.store);
routes.get('/sessions', SessionController.index);

routes.post('/spots', upload.single('thumbnail'), SpotController.store);
routes.get('/spots', SpotController.index);

routes.get('/dashboard', DashboardController.show);

routes.post('/spots/:spot_id/bookings', BookingController.store);


module.exports = routes;