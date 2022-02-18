import React from 'react'
import Search from '../ProblemsPage/search'
import './ProblemPage.css';
import { useState } from 'react';
import Tech from '../../assets/image/tech.png';
import Back from '../../assets/image/ppback.png';
// import BackGround from '../../assets/image/ppback.png';

function ProblemsPage() {
    const { search } = window.location;
    const query = new URLSearchParams(search).get('s');
    const [searchQuery, setSearchQuery] = useState(query || '');    
    const filteredPosts = filterPosts(posts, searchQuery);
    return (
        <div style={{ backgroundImage: `url(${Back})` }}>
            <Search
                searchQuery={searchQuery}                
                setSearchQuery={setSearchQuery}
            />
            <div className='topic'>
                {filteredPosts.map(post => (
                    <button className = 'topic_upper' type='button' onClick="/home"><h1>{post.title} </h1><img className='topic_image' src = {post.image} alt=""></img></button>
                ))}
            </div>
        </div>
    );
}

const filterPosts = (post, query) => {
    if (!query) {
        return post;
    }

    return posts.filter((post) => {
        const postName = post.title.toLowerCase();
        return postName.includes(query);
    });
};

const posts = [
    { 
        id: '1', 
        title: 'Array',
        image: Tech
    },
    { 
        id: '2', 
        title: 'Linked List',
        image: Tech
    },
    { 
        id: '3', 
        title: 'Stack',
        image: Tech 
    },
    { 
        id: '4', 
        title: 'Queue',
        image: Tech
    },
    { 
        id: '5', 
        title: 'Binary Tree',
        image: Tech 
    },
    { 
        id: '6', 
        title: 'Binary Search Tree',
        image: Tech
    },
    { 
        id: '7', 
        title: 'Heap' ,
        image: Tech
    },
    { 
        id: '8', 
        title: 'Hashing' ,
        image: Tech
    },
    { 
        id: '9', 
        title: 'Graph' ,
        image: Tech
    },
    { 
        id: '10', 
        title: 'Matrix' ,
        image: Tech
    },
    { 
        id: '11', 
        title: 'Misc' ,
        image: Tech
    },
    { 
        id: '12', 
        title: 'Advanced Data Structure' ,
        image: Tech
    },


];






export default ProblemsPage
