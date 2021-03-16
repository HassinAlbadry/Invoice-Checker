setTimeout(function(){ 

	let invoiceDate=document.getElementsByClassName("invoice-property-field")[19]; // get invoice date
	let dueDateText=document.getElementsByClassName("invoice-property-field")[24]; // get invoice due date text to use later
	let dueDate=document.getElementsByClassName("invoice-property-field")[25];     // get invoice due date 
	let status=document.getElementsByClassName("invoice-property-field")[7];      // get invoice status
	
	let date1=new Date(invoiceDate.innerHTML);  // format invoice date                            
	let date2=new Date();						// get current date
    let diffTime = Math.abs(date2 - date1); 	// calculate differnce 
    let diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24)); // get days difference

	
	if(diffDays>90 && status.innerHTML=='Submitted'){ 		// check if difference is more than 90 days and invoice is submitted
     
      dueDate.style.backgroundColor='red';	   	// change due date color to red
      dueDateText.style.backgroundColor='red';	// change duedate text to red
      dueDateText.innerHTML+=' '+'(Not Paid!)'; // concat text to originial text 

      let title=document.getElementsByClassName("a-spacing-top-micro")[0];   // get title
      title.style.backgroundColor='red';									// change title background to red
      title.innerHTML+=' '+'( This invoice is past due. Please Open a dispute!)';  // add a message to title 



	}
	

 }, 2000);  // waint 2 seconds before running code
