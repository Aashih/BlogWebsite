//Three steps to follow to create context api
//1.create context
//2.Provide context
//3.Consume context

import { createContext, useEffect, useState } from "react";
import { baseUrl } from "../base";


//step 1
export const AppContext = createContext();

export default function AppContextProvider({children}){
    const[loading,setLoading] = useState(false);
    const[post,setPosts] = useState([]);
    const[page,setPage] = useState(1);
    const[totalPages,setTotalPages] = useState(null); 

    //Fetching Data
console.log("Going Inside")
    async function fetchBlogPosts(page=1) {
        setLoading(true);
        console.log("Ander aa gya")
        let url = `${baseUrl}?page=${page}`;
        try {
            const result = await fetch(url);
            const data = await result.json();
            console.log(data);
            setPage(data.page);
            setPosts(data.posts);
            setTotalPages(data.totalPages);

        } catch (error) {
            console.log("Error in fetching data");
            //sbko reinitailize kr do
            setPage(1);
            setPosts([]);
            setTotalPages(null);
        }
        setLoading(false);
    }
   
    function handlePageChange(page){
        setPage(page);
        fetchBlogPosts(page);
    }




    //sending data to the consumer
    const value = {
        loading,
        setLoading,
        post,
        setPosts,
        page,
        setPage,
        totalPages,
        setTotalPages,
        fetchBlogPosts,
        handlePageChange
    }

    //Return AppContextProvider --> STEP 2
    return <AppContext.Provider value = {value}>
        {children}
    </AppContext.Provider> 
    //mtlb maine children ko wo value send kr diya 
    //jo mere AppContext me exist krti thi 

}