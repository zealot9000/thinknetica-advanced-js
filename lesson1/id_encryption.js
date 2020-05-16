 let timestamp =  (88888888).toString(16).padStart(8, "0");
 let cluster = (10).toString(16).padStart(2, "0");
 let type  = (2).toString(16);
 let userId = (15012).toString(16).padStart(6, "0");

let result = (timestamp + cluster + type + userId);
