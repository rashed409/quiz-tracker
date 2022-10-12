import React from 'react';
import "./Blog.css"
const Blog = () => {
    return (
        <>
  
            <div className="card-wrapper grid justify-items-center	gird-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
                
                    <div className="card w-80 bg-base-100 shadow-xl">
                        <figure className="px-10 pt-10">
                            <img src="https://placeimg.com/400/225/arch" alt="Shoes" className="rounded-xl" />
                        </figure>
                        <div className="card-body items-center text-center">
                            <h2 className='card-title'>What is the purpose of React Router</h2>
                            <h2 className="">React Router is a standard library for routing in React. It enables the navigation among views of various components in a React Application, allows changing the browser URL, and keeps the UI in sync with the URL.
                                Let us create a simple application to React to understand how the React Router works. The application will contain three components: home component, about a component, and contact component. We will use React Router to navigate between these components.</h2>
                            <div className="card-actions">
                                <button className="btn btn-primary">See More</button>
                            </div>
                        </div>
                    
                </div>
           
                    <div className="card w-96 bg-base-100 shadow-xl">
                        <figure className="px-10 pt-10">
                            <img src="https://placeimg.com/400/225/arch" alt="Shoes" className="rounded-xl" />
                        </figure>
                        <div className="card-body items-center text-center">
                            <h2 className='card-title'>How Does Context Api works</h2>
                            <h2 className="">The React Context API is a way for a React app to effectively produce global variables that can be passed around. This is the alternative to "prop drilling" or moving props from grandparent to child to parent, and so on. Context is also touted as an easier, lighter approach to state management using Redux.</h2>
                            <div className="card-actions">
                                <button className="btn btn-primary">See More</button>
                            </div>
                        </div>
                    </div>
               
               
                    <div className="card w-96 bg-base-100 shadow-xl">
                        <figure className="px-10 pt-10">
                            <img src="https://placeimg.com/400/225/arch" alt="Shoes" className="rounded-xl" />
                        </figure>
                        <div className="card-body items-center text-center">
                            <h2 className='card-title'>How to UseRef works</h2>
                            <h2 className="">useRef returns a mutable ref object whose .current property is initialized to the passed argument ( initialValue ). The returned object will persist for the full lifetime of the component. Essentially, useRef is like a “box” that can hold a mutable value in its .current property.</h2>
                            <div className="card-actions">
                                <button className="btn btn-primary">See More</button>
                            </div>
                        </div>
                    </div>
                
            </div>
           
        </>
    );
};

export default Blog;