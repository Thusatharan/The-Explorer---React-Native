import { ADD_PLACES } from "./PlacesActions";
import Places from '../models/PlaceModel';

const initialState = {
    places : []
};

export default (state = initialState, action) => {
    switch (action.type) {
        case ADD_PLACES : 
           const newPlace = new Places(new Date().toString(), action.placeData.title);
           return {
               places : state.places.concat(newPlace),
           }
        default : return state;
    }
};