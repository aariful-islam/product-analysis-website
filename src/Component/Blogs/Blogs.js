import React from 'react';

const Blogs = () => {
    return (
        <div className='ml-10 mt-6'>
            <h1 className='text-4xl'>What is context API?</h1>
            <p className='text-2xl'>Answer: Context API is mainly used for solving props drilling. Context API effectively produce global variables that can be passed around. We can pass data directly from grandparent to grandchild using context API. We don't need to pass data through props manually. Context API is very easy to use.</p>
        </div>
    );
};

export default Blogs;