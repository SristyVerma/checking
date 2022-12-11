import React from "react";

const Page = ({ data }) => {
  return (
    <>
    <h2 style={{alignItems:"center",justifyContent:"center"}}>Projects</h2>
    <div style={{display:"flex",flexDirection:"row",color:"black",width:"100%",justifyContent:"space-evenly"}}>
     
      <div style={{display:"flex",flexDirection:"column",backgroundColor:"#caf0f8"}}>
        {data.items.map((el) => {
          return (
            <div  key={el.node_id}>
                 <p>{el.description}</p>
              <h2>{el.name}</h2>
              <span>{el.language}</span>
              <span>Total Star - {el.stargazers_count}</span>
              <span> Total forks - {el.forks}</span>
          
            </div>
          );
        })}
      </div>
    </div>
    </>
  );
};

export async function getStaticProps(context) {
  let response = await fetch(
    "https://api.github.com/search/repositories?q=user:SristyVerma+fork:true&sort=updated&per_page=10&type=Repositories"
  );
  let data = await response.json();

  return {
    props: { data },
  };
}

export default Page;