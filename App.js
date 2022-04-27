import React from 'react';
import Card from "./Cards";
import Sdata from './Sdata';

// function ncard(val) {

// }

const App = () => {


  // const go=()=>
  // {
  // try {

  //   const url=`https://api.tvmaze.com/search/shows?q=all`;
  //   const res = await fetch(url);
  //   const data= await res.json();
  //   console.log(data);

  // } catch (error) {
  //   console.log(error)

  // }

  // }



  <>
    {/* <button onClick={go}>click me</button> */}
    <h1 className='heading_style'> LIST OF TOP INDIAN WEB SERIES</h1>

    {/* {Sdata.map(function ncard(val) { */}
    {Sdata.map((val) => {
      return (
        <Card
          key={val.id}
          imgsrc={val.imgsrc}
          title={val.title}
          sname={val.sname}
          link={val.link}
        />
      );
    })};


    {/* <Card imgsrc={Sdata[1].imgsrc}
          title={Sdata[1].title}
          sname={Sdata[1].sname}
          link={Sdata[1].link}
    />
    <Card imgsrc={Sdata[2].imgsrc}
          title={Sdata[2].title}
          sname={Sdata[2].sname}
          link={Sdata[2].link}
    />
    <Card imgsrc={Sdata[3].imgsrc}
          title={Sdata[3].title}
          sname={Sdata[3].sname}
          link={Sdata[3].link}
    />
    <Card imgsrc={Sdata[4].imgsrc}
          title={Sdata[4].title}
          sname={Sdata[4].sname}
          link={Sdata[4].link}
    /> */}

  </>
};

export default App;