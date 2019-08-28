import fb from '../firebase/firebase';


 let   Appmenu=[];
 let   Slider=[];

export function Getdata(){



    return(dispatch)=>{
 fb.database().ref('/').child('Menu').on('child_added',(appdata)=>{
     

let  appmenu=appdata.val();

// console.log(appmenu);
// alert('aagya');



// console.log(Appmenu,'appmenu');
Appmenu.push(appmenu);
console.log(Appmenu);

    dispatch({
        type:'HANIFIA_MENU',
        payload:Appmenu }
    )
 
});

 fb.database().ref('/').child('SliderImages').once('value',(data)=>{
    //  alert();
             Slider=data.val();
            //  console.log(Slider);
          dispatch({
            type:'SLIDER_IMAGES'
            ,payload: Slider

        })
     
    })

}
}






//add item into card 
export function Additem(Menuindex,itemindex){
    return{
        type:'ADD_ITEM',
        Menuindex:Menuindex,
        Itemindex:itemindex
    }
}


export function ActiveMenu(ActiveMenuIndex,ActiveMenuName){
    // alert(ActiveMenuIndex);
    return{
        type:'ACTIVE_MENU',
        MenuIndex:ActiveMenuIndex,
        MenuName:ActiveMenuName

    }
}
 
export function Order(obj){
   console.log(obj,'obj')
    return(dispatch)=>{
        console.log('aagya');
      fb.database().ref('/').child('orders').push(obj);
    }
}

export function ReduceItem(Menuindex,itemindex){
    return{
        type:'REDUCE_ITEM',
        Menuindex:Menuindex,
        Itemindex:itemindex
    }
}


export function FeedBackmsg(feedbackdata){
return(dispatch)=>{
    fb.database().ref('/').child('feedbackMessage').push(feedbackdata);
}
}

export function cancelItem(menuindex,itemindex){
    return{
        type:'CANCEL_ITEM',
        Menuindex:menuindex,
        Itemindex:itemindex
    }
}

export function EditStatus (status){
    return{
type:'ChANGE_STATUS'}
}