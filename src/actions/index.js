import { FETCH_COURSES } from './types';

export function fetchCourses() {
    return {
        type: FETCH_COURSES,
        payload: [
            {
                title: "Up and Running with Redis",
                description: "In this course you'll learn how to work with the efficient Redis database to manage key/value relationships",
                enrolled: false           
             },
            {
                title: "HTML/CSS Bootcamp",
                description: "Learn HTML and CSS3 from scratch, starting with the basics and finishing by building five projects from scratch",
                enrolled: false
            },  

            {
                title: "UX for Developers",
                description: "This User Experience (UX) course examines how to develop a system for approaching application development and enhancing the experience for users",
                enrolled: false
            },
            {
                title: "Problem Solving",
                description: "",
                enrolled: false
            },
            {
                title: "UML for Developers",
                description: "",
                enrolled: false
            },
            {
                title: "Algorithm Bootcamp",
                description: "",
                enrolled: false
            },
            {
                title: "Introduction to Programming with Python",
                description: "",
                enrolled: false
            },
            {
                title: "TypeScript Development",
                description: "",
                enrolled: false
            },
            {
                title: "Introduction to JavaScript",
                description: "",
                enrolled: false
            },
            {
                title: "Dissecting Rails 5",
                description: "",
                enrolled: false
            }
            
            
        ]
        
    }
}