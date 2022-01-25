import './style.css';
const get = require('lodash.get');
 import { initializeApp } from "firebase/app";

  const firebaseConfig = {
      apiKey: process.env.VUE_APP_FIREBASE_APY_KEY,
      authDomain: process.env.VUE_APP_FIREBASE_AUTH_DOMAIN,
      projectId: process.env.VUE_APP_FIREBASE_PROJECT_ID,
      storageBucket: process.env.VUE_APP_FIREBASE_STORAGE_BUCKET,
      messagingSenderId: process.env.VUE_APP_FIREBASE_MESSAGING_SENDER_ID,
      appId: process.env.VUE_APP_FIREBASE_APP_ID,
    };

  const app = initializeApp(firebaseConfig);

const BTNSend = document.querySelector('.btn');
const inputValue = document.getElementById('name'); 
const summary = document.createElement('div');
summary.className = "summ";
document.body.append(summary);
const list = document.createElement('div');
list.className = "list";
document.body.append(list); 





BTNSend.addEventListener('click', () => {

    axios({
        method: 'GET',
        url: ('https://api.teleport.org/api/urban_areas/slug:'
                +inputValue.value
                +"/scores/")  
                         
    }).then(res =>{

        const categories=  get(res, 'data.categories', []);

        list.innerText =`-Name: ${JSON.stringify(categories[0].name)} Color: ${JSON.stringify(categories[0].color)} Score_out_of_10:  ${JSON.stringify( categories[0].score_out_of_10)} ` + '\n'+ '\n'+
                        `-Name: ${JSON.stringify(categories[1].name)} Color: ${JSON.stringify(categories[1].color)} Score_out_of_10:  ${JSON.stringify( categories[1].score_out_of_10)} ` + '\n'+ '\n'+
                        `-Name: ${JSON.stringify(categories[2].name)} Color: ${JSON.stringify(categories[2].color)} Score_out_of_10:  ${JSON.stringify( categories[2].score_out_of_10)} ` + '\n'+ '\n'+
                        `-Name: ${JSON.stringify(categories[3].name)} Color: ${JSON.stringify(categories[3].color)} Score_out_of_10:  ${JSON.stringify( categories[3].score_out_of_10)} ` + '\n'+ '\n'+
                        `-Name: ${JSON.stringify(categories[4].name)} Color: ${JSON.stringify(categories[4].color)} Score_out_of_10:  ${JSON.stringify( categories[4].score_out_of_10)} ` + '\n'+ '\n'+
                        `-Name: ${JSON.stringify(categories[5].name)} Color: ${JSON.stringify(categories[5].color)} Score_out_of_10:  ${JSON.stringify( categories[5].score_out_of_10)} ` + '\n'+ '\n'+
                        `-Name: ${JSON.stringify(categories[6].name)} Color: ${JSON.stringify(categories[6].color)} Score_out_of_10:  ${JSON.stringify( categories[6].score_out_of_10)} ` + '\n'+ '\n'+
                        `-Name: ${JSON.stringify(categories[7].name)} Color: ${JSON.stringify(categories[7].color)} Score_out_of_10:  ${JSON.stringify( categories[7].score_out_of_10)} ` + '\n'+ '\n'+
                        `-Name: ${JSON.stringify(categories[8].name)} Color: ${JSON.stringify(categories[8].color)} Score_out_of_10:  ${JSON.stringify( categories[8].score_out_of_10)} `;


    summary.innerHTML = `${res.data.summary} City Score = ${res.data.teleport_city_score}`;
    


    }).catch(err => {
        alert("INSERIRE UNA CITTA' VALIDA");
    })
})