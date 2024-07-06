import {configureStore} from "@reduxjs/toolkit";
import userReduser from "./userSlice";
import moviesReducer from "./moviesSlice";
import gptReducer from "./gptSlics";
import configReducer from "./configSlice";

const appStore=configureStore(
    {
        reducer:{
            user:userReduser,
            movies:moviesReducer,
            gpt:gptReducer,
            config:configReducer,
        },
    }
);
 export default appStore;