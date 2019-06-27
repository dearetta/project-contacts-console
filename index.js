const names = [
    { name:"Dearetta", phone:"123", address: "jakarta" },
    { name:"Dhila", phone:"456", address: "france" }
];

function searchName (nameKey, names){
    for (let i=0; i < names.length; i++) {
        if (names[i].name === nameKey) {
            return console.log(names[i]);
        }             
    }
}

function showName (names) {
    for (let index = 0; index < contacts.length; index++) {
        const contact = contacts[index]
        console.log(`[${contact.id}] ${contact.name} (${contact.phone}) <${contact.address}>`)
      }
    
  }


showName(names)
searchName("Dhila", names)


