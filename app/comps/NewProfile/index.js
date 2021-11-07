import react from 'react';
import * as React from 'react';
import styled from 'styled-components';
import Button from '../Button'
import {useRouter} from 'next/router';


const Main =styled.div`
display: flex;
flex-direction: column;
width: 100%;
height:100%;


`

const Cont = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
margin-top: 50px;


`

const Heading =styled.div`
font-size: 27px;
font-weight: 700;
margin-bottom: 25px;

`
const PicUpload = styled.img`
`
const Get_pic = styled.p`
font-size: 15px;
margin-bottom:50px;
`

const Input = styled.input`

padding: 20px;
border: #C8C8C8 1px solid;
border-right-style:none;
border-left-style:none;
border-bottom-style:${props=>props.borderbtm};
width: 100%;
font-size: 19px;
font-weight: 400;

`
const Btnarea = styled.div`
display:flex;
position:absolute;
right:10px;
top:800px;
`
const NewProfile = ({



}) => {
   
  const router = useRouter();
    return <Main>
    <Cont>
        <Heading className="ubuntu">Create Profile</Heading>
        <PicUpload src="/upload_pic.png"></PicUpload>
        <Get_pic className="opensans">Upload Picture</Get_pic>
        {/* user input */}
        <Input borderbtm="none" className="opensans" type="text" placeholder="Name"  ></Input>
        <Input borderbtm="none" className="opensans" type="password" placeholder="Age"  ></Input>
        <Input borderbtm="none" className="opensans" type="password" placeholder="Phone"  ></Input>
        <Input borderbtm="none" className="opensans" type="password" placeholder="Status"  ></Input>
        <Input borderbtm="none" className="opensans" type="password" placeholder="Pronouns"  ></Input>
        <Input borderbtm="none" className="opensans" type="password" placeholder="Preference"  ></Input>
        <Input borderbtm="solid" className="opensans" type="password" placeholder="Interests"  ></Input>
        {/* btn to skip or done */}
        <Btnarea>
          <Button
          title="Skip"
          width="123px"
          height="55px"
          borderRadius="4.5px"
          border="solid"
          bgcolor="white"
          fontcolor="#724FE9"
          fontSize="20px"
          fontWeight="700"
          onClick={()=>{
            router.push("/home")
        }}
          />
          <Button
            title="Done"
            width="123px"
            height="55px"
            borderRadius="4.5px"
            border="none"
            bgcolor="#724FE9"
            fontcolor="white"
            fontSize="20px"
            fontWeight="700"
            onClick={()=>{
              router.push("/home")
          }}
          />
        </Btnarea>
        

       

    
 </Cont>
       

 
    </Main>
}

export default NewProfile;