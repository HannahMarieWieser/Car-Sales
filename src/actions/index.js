export const ADD_FEATURE = 'ADD_FEATURE'; //action type

export const addNewFeature = featureName => { //action creator
    console.log(featureName);
    return{ //action
        type: ADD_FEATURE,
        payload: featureName
    }
}

//import into added features




export const ADDITIONAL_FEATURE = 'ADDITIONAL_FEATURE'; //action type

export const addNewAdditional = featureAdditionalName => { //action creator
    console.log(featureAdditionalName);
    return{ //action
        type: ADD_FEATURE,
        payload: featureAdditionalName
    }
}

//import into added features