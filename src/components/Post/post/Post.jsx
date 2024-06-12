import React from 'react';
import Header from './Header';
import Footer from './Footer';

const Post = ({ post}) => {
  return (
    <div className='my-4' >
      <div className={`pt-2 bg-gray-900  rounded-md `}>
      <Header post={post}/>
      <Footer post={post}/>
      </div>
    </div>
  );
};

export default Post;
