import { ENTER_NAME_INPUT, ENTER_YEAR_INPUT, ENTER_AUTHOR_INPUT, CLICK_ADD_BOOK, REG_FIRST_NAME, REG_LAST_NAME, REG_LIST, REG_LOGIN, REG_PASSWORD, REG_BIRTHDAY_D, REG_BIRTHDAY_M, REG_BIRTHDAY_Y, NEW_USER, ADD_BOOK_FOR_USER, ADD_BOOK_FOR_USER_WITH_FRIENDS, CLICK_DELETE_BOOK } from "../actions/actionsTypes";

const initialState = {

    valueNameBook: "",
    valueYearBook: "",
    valueAuthorBook: "",
    value: 0,

    valueRegFirstName: "",
    valueRegLastName: "",
    valueRegBirthdayDay: "",
    valueRegBirthdayMonth: "",
    valueRegBirthdayYear: "",
    valueRegList: "",
    valueRegLogin: "",
    valueRegPassword: "",
    GlobalIssu: 7,




    users:[
                { 
                    id: 1,
                    FirstName: "Ihor",
                    LastName: "Tymchuk",
                    Birthday: "21.10.1991",
                    ListInterest: [], 
                    Login: "ihor",
                    Password: "1111",
                    

                    Books: [ 
                            {name: 'Good Omens111', year: '1985', author: 'Neil Gaiman',Issu: 1 }, 
                            {name: 'American Gods', year: '1990', author: 'Neil Gaiman', Issu: 2}, 
                            {name: 'The Alchemy of MirrorMask', year: '2000', author: 'Neil Gaiman', Issu: 4} 
                    ],

            },

                { 
                    id: 2,
                    FirstName: "Petr",
                    LastName: "Rosberg",
                    Birthday: "21.08.1995",
                    ListInterest: [], 
                    Login: "petr",
                    Password: "3333",
                    

                    Books:[ 
                            {name: 'Petr Good Omens', year: '1985', author: 'Nill Geyman', Issu: 5 }, 
                             
                    ],

            },

            { 
                id: 3,
                FirstName: "Adrey",
                LastName: "Massa",
                Birthday: "21.08.1998",
                ListInterest: [], 
                Login: "petr",
                Password: "2222",
                Books:[ 
                    {name: 'Adrey Good Omens', year: '1985', author: 'Nill Geyman', Issu: 6 }, 
                    
                ],
        },

        { 
            id: 4,
            FirstName: "Fern",
            LastName: "Alonso",
            Birthday: "21.08.1998",
            ListInterest: [], 
            Login: "petr",
            Password: "2222",
            Books:[ 
                {name: 'Fern Good Omens', year: '1985', author: 'Nill Geyman', Issu: 7 }, 
            ],

    },
    ]
}

export default function user (state = initialState, action) {

    switch(action.type) {
        case ENTER_NAME_INPUT:
            return {
                ...state, 
                valueNameBook: action.payload.target.value
            }
        case ENTER_YEAR_INPUT:
            return {
                ...state, 
                valueYearBook: action.payload.target.value
            }
        case ENTER_AUTHOR_INPUT:
            return {
                ...state,
                valueAuthorBook: action.payload.target.value
            }
        case CLICK_ADD_BOOK:

        const nextstate = {
            ...state,
            ...state.users[action.payload.numb].Books.push(
                {
                    name: action.payload.name,
                    year: action.payload.year,
                    author: action.payload.author,
                    Issu: state.GlobalIssu
            
            }),
            GlobalIssu: state.GlobalIssu +1,
            value: state.value + 1,
            valueNameBook: "",
            valueYearBook: "",
            valueAuthorBook: "",
            
        }

        return nextstate 

        case REG_FIRST_NAME:
            return {
                ...state,
                valueRegFirstName: action.payload.target.value
            }
        
        case REG_LAST_NAME:
            return {
                ...state,
                valueRegLastName: action.payload.target.value
            }

        case REG_LIST:
            return {
                ...state,
                valueRegList: action.payload.target.value
            }

        case REG_LOGIN:
            return {
                ...state,
                valueRegLogin: action.payload.target.value
            }

        case REG_PASSWORD:
            return {
                ...state,
                valueRegPassword: action.payload.target.value
            }

        case REG_BIRTHDAY_D:
            return {
                ...state,
                valueRegBirthdayDay: action.payload.target.value
            }

        case REG_BIRTHDAY_M:
            return {
                ...state,
                valueRegBirthdayMonth: action.payload.target.value
            }

        case REG_BIRTHDAY_Y:
            return {
                ...state,
                valueRegBirthdayYear: action.payload.target.value
            }

        case NEW_USER:
        const nextstatePlusUsers = {
            ...state,
            ...state.users.push(
                {
                    id: state.users.length + 1,
                    FirstName: action.payload.firstName,
                    LastName: action.payload.lastName,
                    Birthday: action.payload.brD+"."+action.payload.brM+"."+action.payload.brY,
                    ListInterest: action.payload.list.split(", "), 
                    Login: action.payload.login,
                    Password: action.payload.password,
                    Books: [],
            
            }),

            valueRegFirstName: "",
            valueRegLastName: "",
            valueRegBirthdayDay: "",
            valueRegBirthdayMonth: "",
            valueRegBirthdayYear: "",
            valueRegList: "",
            valueRegLogin: "",
            valueRegPassword: "",
            
        }

        return nextstatePlusUsers

        case ADD_BOOK_FOR_USER:
            const nextStateAddBook = {
                ...state,
                ...state.users[action.payload.p].Books.push(
                    {
                        name: action.payload.name,
                        year: action.payload.year,
                        author: action.payload.author,
                        Issu: state.GlobalIssu
                    }
                ),
                GlobalIssu: state.GlobalIssu +1,
            }
            
        return nextStateAddBook

        case ADD_BOOK_FOR_USER_WITH_FRIENDS:
            const nextStateAddBookWithFriends = {
                ...state,
                ...state.users[action.payload.p].Books.push(
                    {
                        name: action.payload.name,
                        year: action.payload.year,
                        author: action.payload.author,
                        Issu: state.GlobalIssu
                    }
                ),
                GlobalIssu: state.GlobalIssu +1,
            }
            
        return nextStateAddBookWithFriends

        case CLICK_DELETE_BOOK:
            const nextStateD = {...state}
            nextStateD.users[action.payload.index].Books.splice(action.payload.keys,1)
            return nextStateD
        default: 
            return state
    }
}


// splice(action.payload.keys, 1)