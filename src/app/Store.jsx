import { configureStore } from "@reduxjs/toolkit";
import authReducer from '../features/auth/authSlice'
import membersReducer from "../features/members/membersSlice";
import skillsReducer from '../features/skills/skillsSlice'
import projectsReducer from '../features/projects/projectsSlice'
import subscriberReducer from '../features/subscribers/subscriberSlice'
import categoryReducer from '../features/blogcat/blogcatSlice'
import blogReducer from "../features/blog/blogSlice";
import messagesReducer from "../features/messages/messagesSlice";
import uploadReducer from "../features/upload/uploadSlice";

export const store = configureStore({
    reducer: {
        auth: authReducer,
        members: membersReducer,
        skills: skillsReducer,
        projects: projectsReducer,
        subscribers: subscriberReducer,
        category: categoryReducer,
        blogs: blogReducer,
        messages: messagesReducer,
        upload: uploadReducer,
    },
})