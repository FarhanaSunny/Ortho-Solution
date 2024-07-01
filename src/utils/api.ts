/**
 * string = 'hi'
 * number = 3
 * boolean = true/false
 * null = null
 * undefined = undefined
 * object = { }
 */

//@ts-ignore

// type Email = string;
// type UserId = string;

// const email: Email = 'bob@example.com'

// interface Favourites {
//     food: string;
//     drink: string;  
// }

// interface Person {
//     name: string;
//     lastName: string;
//     email: Email;
//     age: number;
//     favourites: Favourites;
// }

// const person: Person = {
//     name: 'bob',
//     lastName: 'joe',
//     email,
//     age: 50,
//     favourites: {
//         food: 'nachos',
//         drink: 'water'
//     }
// }

// async function login(email: Email, password: string): Promise<Person> {

// }

interface Patient {
    name: string;
    trackerNumber: number;
    dateOfBirth: string;
    // plus anything else needed for general patient info
    appointments: Appointment[];
}

interface Appointment {
    date: string;
    bondedBy: string;
    comments: string;
}

const p: Patient = {
    name: '',
    trackerNumber: 1,
    dateOfBirth: '',
    appointments: [
        {
            date: '',
            bondedBy: '12345',
            comments: 'initial bonding'
        },
        {
            date: '',
            bondedBy: 'farhana',
            comments: 'rebond'
        },
        {
            date: '',
            bondedBy: 'farhana',
            comments: 'rebond 2'
        }
    ]
}

const records = [
    {
        "patientName": "John Doe",
        "trackerNumber": 123,
        "initiallyBondedBy": "AB",
        "initialBondingDate": "2022-04-12",
        "rebondedToothNo": 26,
        "rebondedBy": "XY",
        "rebondingDate": "2024-04-12",
        "additionalComment": "bla bla"
    },
    {
        "patientName": "John Doe2",
        "trackerNumber": 1234,
        "initiallyBondedBy": "AB",
        "initialBondingDate": "2022-04-12",
        "rebondedToothNo": 26,
        "rebondedBy": "XY",
        "rebondingDate": "2024-04-12",
        "additionalComment": "bla bla"
    },
    
    
];

const employeeList = [
    {
    id: 100,
    name: 'Jillian Yabsley',
    role: 'member',
    profilePicture: 'https://www.profilebakery.com/wp-content/uploads/2023/04/AI-Profile-Picture.jpg',
   },
   {
    id: 200,
    name: 'Samantha Tetford',
    role: 'member',
    profilePicture: 'https://www.profilebakery.com/wp-content/uploads/2023/04/AI-Profile-Picture.jpg',
   },
   {
    id: 300,
    name: 'Patricia Penton',
    role: 'member',
    profilePicture: 'https://www.profilebakery.com/wp-content/uploads/2023/04/AI-Profile-Picture.jpg',
   },
   {
    id: 400,
    name: 'Katie Paynn',
    role: 'member',
    profilePicture: 'https://www.profilebakery.com/wp-content/uploads/2023/04/AI-Profile-Picture.jpg',
   },
   {
    id: 500,
    name: 'Terri Eddison',
    role: 'member',
    profilePicture: 'https://www.profilebakery.com/wp-content/uploads/2023/04/AI-Profile-Picture.jpg',
   },
   {
    id: 600,
    name: 'Christa Oliver',
    role: 'admin',
    profilePicture: 'https://www.profilebakery.com/wp-content/uploads/2023/04/AI-Profile-Picture.jpg',
   }
];

// const currentEmployee =  {
//     id: 100,
//     name: 'Jillian Yabsley',
//     role: 'member',
//     profilePicture: 'https://www.profilebakery.com/wp-content/uploads/2023/04/AI-Profile-Picture.jpg',
// };

const individualRecord = [
    {
        "patientName": "John Doe",
        "trackerNumber": 123,
        "initiallyBondedBy": 200,
        "initialBondingDate": "2022-04-12",
        "rebondedToothNo": 26,
        "rebondedBy": 100,
        "rebondingDate": "2024-04-12",
        "additionalComment": "bla bla"
    },
    {
        "patientName": "John Doe2",
        "trackerNumber": 789,
        "initiallyBondedBy": 100,
        "initialBondingDate": "2022-04-12",
        "rebondedToothNo": 26,
        "rebondedBy": 100,
        "rebondingDate": "2024-04-12",
        "additionalComment": "bla bla"
    },
    

];

const updatedRecords = individualRecord.map(record => {
    const initiallyBondedBy = employeeList.find(employee => employee.id === record.initiallyBondedBy)?.name || record.initiallyBondedBy;
    const rebondedBy = employeeList.find(employee => employee.id === record.rebondedBy)?.name || record.rebondedBy;
  
    return {
      ...record,
      initiallyBondedBy,
      rebondedBy,
    };
  });

export async function login(loginInfo: any) {
    // const user = employeeList.find(employee => employee.id === loginInfo.id && employee.)
}

export async function getPatientInfo(patientName) {
    records.find(record => record.patientName === patientName)
}

export async function getEmployee(id: number) {
    return employeeList.find(employee => employee.id === id)
}

export async function getAllUserRecords() {
    return updatedRecords;
}

export async function getAllEmployees () {
    return employeeList
}
