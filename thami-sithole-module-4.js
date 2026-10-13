// Challenge 1 - View the Queue
let attendees = [
 { name: "Lebo", age: 22, ticket: "General", hasTicket: true, checkedIn: false, spend: 350 },
 { name: "Aisha", age: 19, ticket: "VIP", hasTicket: true, checkedIn: false, spend: 1200 },
 { name: "Thabo", age: 17, ticket: "General", hasTicket: true, checkedIn: false, spend: 250 },
 { name: "Naledi", age: 25, ticket: "VIP", hasTicket: true, checkedIn: false, spend: 850 },
 { name: "Jason", age: 31, ticket: "General", hasTicket: false, checkedIn: false, spend: 0 },
 { name: "Zanele", age: 20, ticket: "General", hasTicket: true, checkedIn: false, spend: 650 },
 { name: "Karabo", age: 16, ticket: "VIP", hasTicket: true, checkedIn: false, spend: 900 },
 { name: "Michael", age: 28, ticket: "General", hasTicket: true, checkedIn: false, spend: 450 }
];

console.log('The Festival Queue:\n')
console.log('=======================');
for (let attendee of attendees) {
  if (attendee.hasTicket === true) {
    console.log(`Name: ${attendee.name}\nAge: ${attendee.age}\nTicket: ${attendee.ticket}\nValid Ticket: ${attendee.hasTicket}`);
    console.log('=======================');
  }
}

// Challenge 2 -Who Can Enter?
console.log('\nFestival entrence validation:\n')
for (let attendee of attendees) {
  if (attendee.age >= 18 && attendee.hasTicket === true) {
    console.log(`${attendee.name} -> ENTRY APPROVED`);
  } else if (attendee.age < 18 && attendee.hasTicket === true) {
    console.log(`${attendee.name} -> ENTRY DENIED: UNDER 18`);
  } else {
    console.log(`${attendee.name} -> ENTRY DENIED: NO VALID TICKET`);
  }
}