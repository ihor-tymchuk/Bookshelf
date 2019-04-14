import { ENTER_SERCH } from '../actions/actionsTypes.js'
import { stat } from 'fs';

const initialState = {
    valueSerch: '',
    BooksSerch: [],
    Books: [
                    {name: 'Good Omens111', year: '1985', author: 'Nill Geyman' }, 
                    {name: 'Unlocking Android', year: '2009', author: 'W. Frank Ableson'}, 
                    {name: 'Android in Action, Second Edition', year: '2000', author: 'Michael Barlotta'},
                    {name: 'Flex 3 in Action', year: '1999', author: 'W. Frank Ableson'},
                    {name: 'Collective Intelligence in Action', year: '2003', author: 'Peter Armstrong'},
                    {name: 'Coffeehouse', year: '1999', author: 'Peter Armstrong'},
                    {name: 'Team Foundation Server 2008 in Action', year: '2019', author: 'W. Frank Ableson'}, 
                    {name: '3D User Interfaces with Java 3D', year: '2018', author: 'Michael Barlotta'},
                    {name: 'Hibernate in Action', year: '2017', author: 'Peter Armstrong'},
                    {name: 'Building Secure and Reliable Network Applications', year: '2016', author: 'Peter Armstrong'},
                    {name: 'ASP.NET 4.0 in Practice', year: '2016', author: 'Michael Barlotta'},
                    {name: 'iPhone in Action', year: '2015', author: 'W. Frank Ableson'}, 
                    {name: 'Silverlight 2 in Action', year: '2015', author: 'Peter Armstrong'},
                    {name: 'Object Oriented Perl', year: '2014', author: 'Michael Barlotta'},
    ]
}

export default function allBooks (state = initialState, action) {
    switch (action.type) {

        case ENTER_SERCH:
            let  newBook = []
            let valueS = action.payload.target.value.toLowerCase()
            state.Books.map((book, index) => {
                let nameBook = book.name.toLowerCase()
                if ( nameBook.includes(valueS) ){
                    return newBook.push(book)
                }
                
            })
            
            return{
                ...state,
                valueSerch: action.payload.target.value,
                BooksSerch: newBook
            }
        
        default:
             return state
    }
}