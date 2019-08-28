// const functions = require('firebase-functions');

// // Create and Deploy Your First Cloud Functions
// // https://firebase.google.com/docs/functions/write-firebase-functions
//
// exports.helloWorld = functions.https.onRequest((request, response) => {
//  response.send("Hello from Firebase!");
// });



var nodemailer = require('nodemailer');
const functions = require('firebase-functions');
const APP_NAME='Hanifia Resturant';
var transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'hanifiaresturant@gmail.com',
    pass: 'bnstallions123'
  }
});

exports.EmaillingService=functions.database.ref('orders/{orderId}').onCreate((snapshot,context)=>{

	let orderDetails=snapshot.val();
	console.log(context.params.orderId);

	return orderEmail(orderDetails);
});


exports.FeedbackMesage=functions.database.ref('feedbackMessage/{feedbackId}').onCreate((snapshot,context)=>{
  let feedbackMes=snapshot.val();
  return FeedbackEmail(feedbackMes);

})

function FeedbackEmail(feedbackMes){
   
  let mailOptions={
from:`${APP_NAME} <hanifiaresturant@gmail.com>`,
// to:feedbackMes.email,
to:'hanifiaresturant@gmail.com',
subject:'FEEDBACK MESSAGE',
text:`USERDETAILS: \n ${feedbackMes.ClientName} \n ${feedbackMes.email} \n ${feedbackMes.MobileNumber} \n Complaint Message: \n ${feedbackMes.message} \n `
  }
  return (transporter.sendMail(mailOptions, function(error, info){
    if (error) {
      console.log(error);
    } else {
      console.log('Email sent: ' + info.response);
    }
  }));
}
function orderEmail(orderDetails){

var totalAmount=0;
const mailOptions = {
  from: ` ${APP_NAME} <hanifiaresturant@gmail.com>`,
  to: orderDetails.email,
  // text:'bilal usman',
  subject: 'Order Details',
  //  html: `<h1>Welcometo Hanifia!</h1>`
};
// mailOptions.text='bilal usman'

orderDetails.OrderItems.forEach((item,index)=>{
  totalAmount+=item.price;
  
  mailOptions.text+=` Item Name:${item.name} \n Item Price:${item.price} \n Quantity:${item.count} \n\n\n`
})
console.log(totalAmount+' total amount');
// mailOptions.text=mailOptions.text+`\n\n\n\n TotalAmount: ${totalAmount}`;
mailOptions.text+=`Contact: ${orderDetails.contact} \n\n TotalPrice: ${totalAmount}`


 return (transporter.sendMail(mailOptions, function(error, info){
  if (error) {
    console.log(error);
  } else {
    console.log('Email sent: ' + info.response);
  }
}));
}

