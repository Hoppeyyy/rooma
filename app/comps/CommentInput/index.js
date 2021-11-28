import React from 'react'
import styled from 'styled-components'
import Button from '../Button'


const Cont = styled.div`
display:flex;
width: 100%;
align-items:center;
justify-content:center;
`
const Top = styled.div`
display:flex;
flex-direction:column;
width: 100%;
`
const CheckBox = styled.div`
display:flex;
flex-direction:row;
`
const Check = styled.div`
display:flex;
flex-direction:row;
`
const Input = styled.input`
display:flex;
`
const Label = styled.label`
display:flex;
`
const Bot = styled.div`
display:flex;
width: 100%;
`
const ChatInput = styled.input`
padding: 10px 380px 40px 15px;
border-radius: 7px;
border: 1px solid #CACACA;
margin-bottom:30px;

`

const CommentInput = ({
  
  
  
  }) => {

    return <Cont>
            <Top>
            <CheckBox className="opensans">
              <Check>
                <Input type="checkbox" name="my-checkbox" id="opt-in"/>
                <Label>Public</Label>
              </Check>
              <Check>
                <Input type="checkbox" name="my-checkbox" id="opt-in"/>
                <Label>Private</Label>
              </Check>
            </CheckBox>
            <ChatInput type="text" placeholder="Write a comment..."/>
            </Top>  
            <Bot>
              <Button
              title="Send"
              width="60px"
              height="30px"
              margin="10px"
              borderRadius="5px"
              border="none"
              bgcolor="#724FE9"
              fontcolor="white"
              fontSize="14px"
              fontWeight="100"
              // onClick send the new comments
              //onClick=()=>{}
              />
            </Bot>   
            </Cont>   
}

export default CommentInput;