import React from 'react'

function DemoComponent() {
  
 
 var a=10;
 var username="Keshav Koirala"
 var display=false;

 var listofdata=[1,2,3,4,5]

 const user = {name: 'Hedy Lamarr',address:'Biratnagar'}
    

var listofobj=[
    {name: 'Dinesh',address:'Biratnagar'},
    {name: 'Rajesh',address:'Biratnagar'}
]

  return (
    <>
        {
            <ul>
                {
                      listofobj.map((x,i)=>(
                        <>
                          <li>{x.name}</li>
                          <li>{x.address}</li>
                          <hr />
                        </>
                    ))
                }
            </ul>
          
        }
         {/* This is comment*/}
        <div>{a}</div>
        <div>{username}</div>
        <hr />
        {
            display?<>Hello World!!!</>:<></>
        }
         <hr />
        {
            listofdata.map((x,i)=>(
                <>
                    <div key={i}>
                       {x}
                    </div>
                </>
            ))
        }
        {
            user.name
        }
        
    </>
 
  )
}

export default DemoComponent