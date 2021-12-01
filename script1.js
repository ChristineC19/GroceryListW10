let list=["Tea", "Coffee", "Water", "Bread", "Jam"];
function yourlist(){
	 var div = document.getElementById('main');
	 var ul = document.createElement('ul');
		for (var i = 0; i < list.length; i++) {
		  var li = document.createElement('li');
		  li.appendChild(document.createTextNode(list[i]));
		  console.log(ul.appendChild(li));
		}
		
		div.appendChild(ul);
	 }

	

function create(){
	list = [];
	
	for (i=0; i<3;i++){
		list[i]=prompt("Add your groceries to the list");
	}
    for (i=0; i<list.length; i++){
       document.getElementById('main').innerHTML =  list;
	   yourlist();
    }
	
    
}
function add(){
		list.push(prompt("add another item"));
		yourlist();
		}
function remove(){
		list.pop();
		yourlist();
}
