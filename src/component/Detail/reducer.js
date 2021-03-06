import {
    FETCH_DETAIL_START, FETCH_DETAIL_SUCCESS, FETCH_DETAIL_ERROR,
    FETCH_POPFORM_START, FETCH_POPFORM_SUCCESS, FETCH_POPFORM_ERROR,
    FETCH_RELATION_START, FETCH_RELATION_SUCCESS, FETCH_RELATION_ERROR
} from '../../../src/common/API';
import { Map } from 'immutable';

// const initRelation = Map({
//     applicationClass: '',
//     isLoaded: false,
//     data: {},
//     head: [],
//     model: '',
//     name: '',
//     pageButton: [],
//     pageRelations: [],
//     url: '',
//     webJS: null
// })

const initState = Map({
    applicationClass: '',
    isLoaded: false,
    data: {},
    head: [],
    model: '',
    name: '',
    pageButton: [],
    pageRelations: [],
    url: '',
    webJS: null,
    relations: [],
    popForm: {
        applicationClass: '',
        isLoaded: false,
        data: {},
        head: [],
        model: '',
        name: '',
        pageButton: [],
        url: '',
        webJS: null,
    },
});

export default (state = initState, action) => {
    switch (action.type) {
        case FETCH_DETAIL_START:
            return initState;
        case FETCH_DETAIL_SUCCESS:
            return state.merge(action.paload).set('isLoaded', true);
        case FETCH_DETAIL_ERROR:
            const newState = initState;
            return newState.set('error', action.paload);

        case FETCH_POPFORM_START:
            return state.set('popForm', {
                applicationClass: '',
                isLoaded: false,
                data: {},
                head: [],
                model: '',
                name: '',
                pageButton: [],
                url: '',
                webJS: null,
            });
        case FETCH_POPFORM_SUCCESS:
            return state.set('popForm', action.paload).setIn(['popForm', 'isLoaded'], true);
        case FETCH_POPFORM_ERROR:
            return state.set(['popForm', 'error'], action.paload);

        case FETCH_RELATION_START:
            return state.set('relations', []);
        case FETCH_RELATION_SUCCESS:
            return state.set('relations', action.paload);
        case FETCH_RELATION_ERROR:
            const relationState = initState;
            return relationState.set('error', action.paload);
        default:
            return initState;
    }
};
