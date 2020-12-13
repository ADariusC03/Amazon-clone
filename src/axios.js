// fetching api 
import axios from 'axios';

const instance = axios.create({
    baseURL: "https://us-central1-clone-6d1a7.cloudfunctions.net/api"

    //'http://localhost:5001/clone-6d1a7/us-central1/api' // debugging : the api (cloud function) url in  FUNCTION folder => index.js
});

//  DEPLOYING THE BACKEND
// after completing the whole projuct time to see if the backend really works
// firebase deploy --only functions, (cd functions)...=> deploy only the backend
// have to have Blaze on firebase to successfully use
// after deploy complete, click on link. Go to functions under Build in the section tab
// Grab the (function) api (trigger) http Request and put it ontop of the localhost
// now living in the cloud function
// to see if it works, paste the url in the browser and see the magic


// Deploying FrontEnd
// cd .. to amazon-clone folder, then npm run build
// firebase deploy --only hosting (frontend) ... deploys indiviauly not with cloud
// click on link
export default instance;