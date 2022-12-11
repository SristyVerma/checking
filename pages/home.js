import React from 'react';

const Page = ({ info,data}) => {
    return (
        <div>
            <div className='intro'>
                <div className='image'>
                    <img src={data.avatar_url} alt="img_not_found" style={{width:"150px" ,height:"150px" }}/>
                    <h4>{data.name}</h4>
                    <h4>{data.bio}</h4>
                    <p>@{data.login}</p>
                    
                    <div className='btn'>
                    <button style={{border:"1px solid black"}}>Follow</button>
                        <button style={{border:"1px solid black"}}>Resume</button>
                       
                    </div>
                    <div className='institue'>
                            <h2>MASAI SCHOOL</h2>
                            <span>May 2022 - Present</span>
                            <span>web development</span>
                            <h2>REC Sonbhadra</h2>
                            <span>May 2016 - Sept 2020</span>
                            <span>B.tech</span>
                            <h2>DSSS</h2>
                            <span> 2013 - 2015</span>
                            <span> intermediate</span>
                    </div>
                    <div className='tech'>
                        <h1>
                            HTML,CSS,JS,REACTJS,REDUX,TYPESCRIPT,NEXTJS
                        </h1>
                    </div>
                   
                </div>
            </div>
            <div className='repositry'>
                <h1>Projects</h1>
                <div>
                    {
                        info.items.map((el) => {
                            return (
                                <div className='project' key={el.node_id}>
                                    <h4>{el.name}</h4>
                                    <span>star - {el.stargazers_count}</span>
                                    <span>{el.language}</span>
                                    <p>{el.description}</p>
                                  
                                    <p>forks - {el.forks}</p>
                                   {/* console.log(el.stargazers_count) */}
                                </div>
                            )
                        })
                    }
                </div>
            </div>
        </div>
    )
}

export async function getStaticProps(context) {
    
    let response = await fetch("https://api.github.com/users/SristyVerma");
    let data = await response.json();
    let response2 = await fetch("https://api.github.com/search/repositories?q=user:SristyVerma+fork:true&sort=updated&per_page=10&type=Repositories");
    let info = await response2.json();
  
    
    
    return {
        props: { data , info }, 
    }
}




export default Page;