// 3. In the object below , output the following values:
// a) "Deploy to Netlify"
// b.)"updates"
// c.)"Lake View Road" 
// d.) "PostgreSQL"


const userProfile = {
  id: 101,
  name: {
    first: "Brian",
    last: "Letting"
  },
  contact: {
    email: "jeff@example.com",
    phones: ["+254700000001", "+254700000002"]
  },
  address: {
    current: {
      city: "Nairobi",
      street: "Westlands Ave",
      postalCode: "00100"
    },
    previous: [
      {
        city: "Eldoret",
        street: "Main Street",
        postalCode: "30100"
      },
      {
        city: "Kisumu",
        street: "Lake View Road",
        postalCode: "40100"
      }
    ]
  },
  preferences: {
    theme: "dark",
    language: "en",
    notifications: {
      email: true,
      sms: false,
      push: ["promotions", "updates"]
    }
  },
  projects: [
    {
      id: 1,
      name: "POS System",
      technologies: ["React", "FastAPI", "PostgreSQL"],
      tasks: [
        { title: "Set up DB", done: true },
        { title: "Design UI", done: false }
      ]
    },
    {
      id: 2,
      name: "Portfolio Website",
      technologies: ["HTML", "CSS", "JavaScript"],
      tasks: [
        { title: "Create About Page", done: true },
        { title: "Deploy to Netlify", done: false }
      ]
    }
  ]
};

// SOLUTIONS
// 1.DEPLOY "NETLIFY"
//projects → second project → tasks → second task → title
console.log(userProfile.projects[1].tasks[1].title);

// 2.DEPLOY "UPDATES"
//preferences → notifications → push array → second element
console.log(userProfile.preferences.notifications.push[1]);

//DEPLOY "LAKE VIEW ROAD"
//address → previous → second object → street
console.log(userProfile.address.previous[1].street);
// Deploy "PostgresSQL"
//projects → first project → technologies → third item
console.log(userProfile.projects[0].technologies[2]);
