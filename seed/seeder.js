var mongoose=require('mongoose');
var {products}=require('./../models/shop');
mongoose.connect('mongodb://shop:Nitp@ds259079.mlab.com:59079/shopping_cart');

var list=[new products({
  imageUrl:"https://clix.tiss.edu/wp-content/uploads/2015/12/curriculum-icons-mathematics-1.png",
  title:'mathematics',
  description:'something awesome',
  price:50
}),
new products({
  imageUrl:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRYLN1gSWD0BSCBRGWXBsNy4tl-Pe4sGl0JcoQdCCc4ELv8UTo3",
  title:'mathematics',
  description:'something awesome',
  price:50
}),
new products({
  imageUrl:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRYLN1gSWD0BSCBRGWXBsNy4tl-Pe4sGl0JcoQdCCc4ELv8UTo3",
  title:'mathematics',
  description:'something awesome',
  price:50
}),
new products({
  imageUrl:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRYLN1gSWD0BSCBRGWXBsNy4tl-Pe4sGl0JcoQdCCc4ELv8UTo3",
  title:'mathematics',
  description:'something awesome',
  price:50
}),

];
var done=0;
for(var i=0;i<list.length;i++)
{

  list[i].save().then(()=>{
    done++
    if(done==list.length){
      exit();
    }
  })
}

function exit(){
  mongoose.disconnect();
}
