//Creating Javascipt Object
let person = {
    firstName: "ISHIMWE",
    lastName: "Ami Paradis",
    age: 18,
    height:1.8,
    salary:"20$ per hour",
    favFood:"Rice",
    Email: "pishimweaime7@gmail.com",
    Telephone: "0791966291",
    
    address: {
        city: 'Kigali',
        district:"Nyamasheke",
        
    },

    education: {
    School:"College of science and Technology",
    Department:"Computer Engneering",
}
};
//Acessing Object
console.log("First name:" + person.firstName);
console.log("Last name is" + person.lastName);
console.log("Age:" + person.age);
console.log("Contact me via Email" +person.Email);
console.log("Call me every day every time" +person.Telephone)
//Those stuffs are related to my Education background
console.log("My College is" +person.education.School)
console.log("In the faculty called " +person.education.Department)