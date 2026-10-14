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
for (let key in attendees) {
  if (attendees[key].spend >= 1000) {
    console.log(`Name: ${attendees[key].name}\nAmount Spend: R${attendees[key].spend}\nReward: Backstage Upgrade`);
    break;
  }
}

// Challenge 10 - Venue Capacity
console.log('\nVenue Capacity:\n')
let capacity = 5;
let peopleInside = 1;

for (let attendee of attendees) {
  while (peopleInside <= capacity && (attendee.hasTicket === true && attendee.age >= 18)) {
    console.log(`${attendee.name} entered`)
    console.log(`People inside: ${peopleInside} / ${capacity}\n`)
    peopleInside++;
    break;
  }
}

console.log('\nVENUE FULL\nSTOP ADMITTING PEOPLE');

// Challenge 11 - Closing-Time Countdown
let countDownMinutes = 10;
let minutes = countDownMinutes % 60;

 console.log('\n\nFestival closes in 10 minutes');
while (minutes <= countDownMinutes) {
 
  if (minutes < 6) {
    console.log('WARNING LAST ENTRY ENDED');
    continue;
  }
  if (minutes < 3) {
    console.log('PLEASE PROCEED TO THE EXIT');
    continue;
  }
 if (minutes == 1) {
   console.log('Festival closes in 1 minute');
   continue
  }
  break;
}
console.log('FESTIVAL CLOSED');

// Final Challenge: Festival Control Dashboard
let option = 3;

console.log('\n\n================================\nFESTIVAL CONTROL\n================================\n1 - View Attendee Queue\n2 - Process Entry\n3 - View VIP Guests\n4 - View Denied Attendees\n5 - View Festival Statistics\n6 - Find Biggest Spender\n7 - Close Festival\n\n');

  switch (option) {
    case 1:
      console.log('(1) Attendee Queue\n');
      for (let attendee of attendees) {
        if (attendee.hasTicket === true) {
          console.log(`Name: ${attendee.name}\nAge: ${attendee.age}\nTicket: ${attendee.ticket}\nValid Ticket: ${attendee.hasTicket}`);
          console.log('=======================');
        }
      }
      break;
    case 2:
      console.log('(2) Process Entry\n');
      for (let attendee of attendees) {
        if (attendee.age >= 18 && attendee.hasTicket === true) {
        console.log(`${attendee.name} -> ENTRY APPROVED`);
        }else if (attendee.age < 18 && attendee.hasTicket === true) {
                console.log(`${attendee.name} -> ENTRY DENIED: UNDER 18`);
              } else {
                console.log(`${attendee.name} -> ENTRY DENIED: NO VALID TICKET`);
              }
      }
      break;
    case 3:
      console.log('(3) VIP GUESTS\n');
      for (let attendee of attendees) {
        if ((attendee.hasTicket === true && attendee.age >= 18) && attendee.ticket === 'VIP') {
        console.log(`${attendee.name}`);
        }
      }
      break;
    case 4:
      console.log('(4) Denied Attemdees\n');
      for (let attendee of attendees) {
        if (attendee.age < 18 && attendee.hasTicket === true) {
        console.log(`${attendee.name} -> ENTRY DENIED: UNDER 18`);
      } else {
        console.log(`${attendee.name} -> ENTRY DENIED: NO VALID TICKET`);
        }
      }
      break;
    case 5:
      console.log('(5) Festival Statistics\n');
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
      break;
    case 6:
      console.log('(6) Find Biggest Spender\n');
      for (let key in attendees) {
        if (attendees[key].spend >= 1000) {
          console.log(`Name: ${attendees[key].name}\nAmount Spend: R${attendees[key].spend}\nReward: Backstage Upgrade`);
        }
      }
      break;
    case 7:
      console.log('(7) Thank you! and see you on the next one! ;)');
      break;

  }

/* **************************************************************************************
****************************     Submission Questions      ******************************
*****************************************************************************************
*
* 1. I used double (&&) operator because I needed all the conditions that gives
*    an attendee entrance to be true - as operands evaluated by && they both or all
*    have to be true. In this scope i needed for the attendee's to be 18 and must have
*    a valid ticket.
*
* 2. I used 'else if' on Challenge 2. In order for the requirements stated by the challenge
*    for processing festival entry. I had three conditions - first, approve entry where
*    attendee is 18 or older, with a ticket, second, deny entry to an attendee with a
*    ticket but they're younger than 18, lastly, deny entry because of not having a ticket at all.
*
* 3. It is an appropriate control because, of its capability to group multiple conditions
*    under one variables, and it uses strict (===) equality for comparison, to ensure that
*    both a value and type they match without implicit type coercion.
*
* 4. The break in my search stops the evaluation of the search as soon as the results are returned,
*    and the continue in the security check, helps the program to continue checking even after coming
*    across an attendee without a ticket, as there could still be other attendees to check with tickets
*    after the one that did not have.
*
* 5  I used a for ... in loop to help me iterate through the fields of the object attendees, using key as
*    a variable so that I am able to access the spend property of attendees. I then derived a condition
*    that any spending above a thousand to find the highest.
*
* 6. I prevented my venue from exceeding its capacity by making use of a while loop nested
*    in a for ... of loop for iteration of the object attendees. my while loop has 3 conditions
*    and the first is responsible for ensuring that capacity does not get exceeded. I declared
*    and assigned the peopleInside variable to 1 then used it on my condition that peopleInside
*    has to be less or equal to capacity, then increment peopleInside and the condition will do
*    hold. I also added a break keyword at the end of the code block of my while loop to stop
*    once the condition is met.
*
* 7. The already existing information will be re-evaluated with the additional 20 attendees - which will
*    introduce changes to the statistics calculation, possibility of having a new big spender, new entries and
*    denials. etc. but i am confident that my program will still run and accommodate the additional 20 attendees.
*
* 8. Challenge 11: Closing-Time Countdown for me got tricky and I am writing this part I am still figuring it out,
*    planning my logic and I won't stop trying until I get comfortable and a working solution.
* */
