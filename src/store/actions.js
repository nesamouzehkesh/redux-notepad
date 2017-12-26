/**
 * These are action creators, they are returning an action that we can use and then pass that along to
 * our reducers
 */

 export const getNotes = () => {
   return {
     type: 'GET_NOTES',
   }
 }

 export const addNote = (note) => {
   return {
     type: 'ADD_NOTE',
     note
   }
 }

 export const removeNote = (note) => {
   return {
     type: 'REMOVE_NOTE',
     note
   }
 }