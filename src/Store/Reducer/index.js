





var initial_state={
  SliderImages:[],
AppMenuData:[],
TotalAmount:0,
EditableStatus:false,
ActiveMenu:[],

  ActiveMenuIndex:'',
  ActiveMenuName:'',

};
  


export const Getdata=(state=initial_state,action)=>{
    console.log('bilal usman');
    switch(action.type){
      case 'SLIDER_IMAGES':
      
return {...state,SliderImages:[...action.payload]};
case 'HANIFIA_MENU':
console.log(action.payload,'pay');
return{...state,AppMenuData:[...action.payload]}

case 'ADD_ITEM':


let menuindex=action.Menuindex;
let itemindex=action.Itemindex;
let appdata=state.AppMenuData;
// alert(menuindex)
let count=0;
(!appdata[menuindex][itemindex].count)?(appdata[menuindex][itemindex].count=count+1):(appdata[menuindex][itemindex].count+=1)
let Amount=appdata[menuindex][itemindex].price+state.TotalAmount

return {...state,AppMenuData:appdata,TotalAmount:Amount};

case 'CANCEL_ITEM':
let app=state.AppMenuData;
let amount=state.TotalAmount;
amount=amount-(app[action.Menuindex][action.Itemindex].count*app[action.Menuindex][action.Itemindex].price);
delete app[action.Menuindex][action.Itemindex].count;

return {...state,AppMenuData:app,TotalAmount:amount

}
case 'ChANGE_STATUS':
return{...state,EditableStatus:!state.EditableStatus}
case 'REDUCE_ITEM':
let totalAmount=0;
let app_data=state.AppMenuData;
if(app_data[action.Menuindex][action.Itemindex].count>1){
  app_data[action.Menuindex][action.Itemindex].count-=1
  totalAmount=state.TotalAmount-app_data[action.Menuindex][action.Itemindex].price;

}
totalAmount=state.TotalAmount;


return {...state,AppMenuData:app_data,TotalAmount:totalAmount};
case 'ACTIVE_MENU':
return {...state,ActiveMenu:[...state.AppMenuData[action.MenuIndex]],
  ActiveMenuIndex:action.MenuIndex,ActiveMenuName:action.MenuName}
g

default :
return state;
    }
}