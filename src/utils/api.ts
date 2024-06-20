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
    }
];

const employee = {
    name: 'Abc Xyz',
    role: 'member',
    profilePicture: 'https://www.profilebakery.com/wp-content/uploads/2023/04/AI-Profile-Picture.jpg',
};

async function login() {

}

async function getPatientInfo(patientName) {
    records.find(record => record.patientName === patientName)
}

export default employee;