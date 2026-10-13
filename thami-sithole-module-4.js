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

console.log('The Festival Queue:')
console.log('=======================');
for (let attendee of attendees) {
  if (attendee.hasTicket === true) {
    console.log(`Name: ${attendee.name}\nAge: ${attendee.age}\nTicket: ${attendee.ticket}\nValid Ticket: ${attendee.hasTicket}`);
    console.log('=======================');
  }
}

// Challenge 2 -Who Can Enter?
console.log('\nFestival entrence validation:')
for (let attendee of attendees) {
  if (attendee.age >= 18 && attendee.hasTicket === true) {
    console.log(`${attendee.name} -> ENTRY APPROVED`);
  } else if (attendee.age < 18 && attendee.hasTicket === true) {
    console.log(`${attendee.name} -> ENTRY DENIED: UNDER 18`);
  } else {
    console.log(`${attendee.name} -> ENTRY DENIED: NO VALID TICKET`);
  }
}

// Challenge 3: Access Zones
console.log('\nAccess Zones:')
for (let attendee of attendees) {
  switch (attendee.ticket) {
	case 'VIP':
      console.log(`${attendee.name}\nTicket: VIP\nWristband: GOLD\n`);
      break;
    case 'General':
      console.log(`${attendee.name}\nTicket: General\nWristband: BLUE\n`);
      break;
    default:
      console.log('UNKNOWN TICKET TYPE\n');
  }
}

// Challenge 4: VIP Lounge Security
console.log('VIP Security Lounge:')
for (let attendee of attendees) {
  if ((attendee.hasTicket === true && attendee.age >= 18) && attendee.ticket === 'VIP') {
    console.log(`${attendee.name}: VIP LOUNGE ACCESS is APPROVED.`)
  } else {
    console.log(`${attendee.name}: VIP LOUNGE ACCESS is DENIED.`)
  }
}

// Challenge 5 - Find a Person in the Queue
console.log('\nFind a Person in the Queue:');
let searchName = 'Zanele';
for (let attendee of attendees) {
  if (attendee.name === searchName) {
      console.log(`ATTENDEE FOUND\nName: ${attendee.name}\nAge: ${attendee.age}\nTicket: ${attendee.ticket}\nValid Ticket: ${attendee.hasTicket}`);
      break;
    }
}

// Challenge 6 - Security Fast Lane
console.log('\nSecurity Fast Lane:')
for (let attendee of attendees) {
  if (attendee.hasTicket === false) {
    continue;
  } else {
    console.log(`Checking ${attendee.name}...`)
  }
}

// Challenge 7: Food Voucher Rewards
console.log('\nFood Voucher Rewards:')
for (let attendee of attendees) {
  if (attendee.spend >= 1000) {
    console.log(`${attendee.name} -> R200 food voucher`);
  } else if (attendee.spend >= 500 && attendee.spend < 1000) {
    console.log(`${attendee.name} -> R100 food voucher`);
  } else if (attendee.spend >= 300 && attendee.spend < 500) {
    console.log(`${attendee.name} -> R50 food voucher`);
  } else {
    console.log(`${attendee.name} -> No voucher`);
  }
}

// Challenge 8 - Festival Statistics
console.log('\nFestival Statistics:')
let validTickets = 0;
let invalidTickets = 0;
let under18 = 0;
let vipCount = 0;
let generalCount = 0;
let totalSpend = 0;
let averageSpend = 0;

for (let attendee of attendees) {
  validTickets += attendee.hasTicket;
  invalidTickets += (!attendee.hasTicket);
  under18 += (attendee.age < 18);
  vipCount += (attendee.ticket === 'VIP');
  generalCount += (attendee.ticket === 'General');
  totalSpend += (attendee.spend);
  averageSpend = totalSpend / (validTickets);
  
}

console.log(`Valid Tickets: ${validTickets}`);
console.log(`Invalid Tickets: ${invalidTickets}`);
console.log(`Under-18 attendees: ${under18}`);
console.log(`VIP ticket holders: ${vipCount}`);
console.log(`General ticket holders: ${generalCount}`);
console.log(`Total amount spent: R ${totalSpend.toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ',')}`);
console.log(`Average amount spent per attendee: R ${averageSpend.toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ',')}`);

for (let attendee of attendees) {
  if (attendee.spend >= 1000) {
    console.log(`Highest-spending attendee: ${attendee.name} (R ${attendee.spend.toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ',')})`);
    break;
  }
}

// Challenge 9 - Find the Biggest Spender
console.log('\nFinding the Biggest Spender:\n');
console.log('===== TOP CUSTOMER =====');
let biggestSpender = attendees[0];

for (let key in attendees) {
  if (attendees[key].spend >= 1000) {
    console.log(`Name: ${attendees[key].name}\nAmount Spend: R${attendees[key].spend}\nReward: Backstage Upgrade`);
  }
}