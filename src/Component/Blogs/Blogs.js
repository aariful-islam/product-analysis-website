import React from 'react';

const Blogs = () => {
    return (
        <div className='ml-10 mt-6'>
            <h1 className='text-4xl'>What is context API?</h1>
            <p className='text-2xl'>Answer: Context API is mainly used for solving props drilling. Context API effectively produce global variables that can be passed around. We can pass data directly from grandparent to grandchild using context API. We don't need to pass data through props manually. Context API is very easy to use.</p>
            <h1 className='text-4xl'>Semantic Tag</h1>
            <p className='text-2xl'>
                Answer: HTML tags are classified in two types. One is Semantic and another is Non-Semantic. In semantic we can easily get the content from tags name.The semantic elements added in HTML5 are :
                <ul className='list-disc ml-10'>
                    <li>Article</li><span></span>
                    <li>aside</li>
                    <li>aside</li>
                    <li>figcaption</li>
                    <li>figure</li>
                    <li>figure</li>
                    <li>header</li>
                    <li>main</li>
                    <li>mark</li>
                    <li>nav</li>
                    <li>section</li>
                    <li>summary</li>
                    <li>time</li>
                </ul>
                let's discuss some semantic tags. <br />
                Nav: Nav tag is used for navbar. <br />
                Section : Section if used for define a section or part of website/webpage. <br />
                Main : In HTML the main part or code of the webpage is written within main tag.

                
            </p>
        </div>
    );
};

export default Blogs;