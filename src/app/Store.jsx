import { configureStore } from "@reduxjs/toolkit";
import authReducer from '../features/auth/authSlice'
import membersReducer from "../features/members/membersSlice";
import skillsReducer from '../features/skills/skillsSlice'
import projectsReducer from '../features/projects/projectsSlice'


export const store = configureStore({
    reducer: {
        auth: authReducer,
        members: membersReducer,
        skills: skillsReducer,
        projects: projectsReducer,
    },
})