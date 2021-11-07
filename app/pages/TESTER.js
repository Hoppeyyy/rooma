import Head from 'next/head'
import styled from 'styled-components';
import * as React from 'react';
import CommunityPost from '../comps/CommunityPost';
import FilterButton from '../comps/FilterButton';
import NavBar from '../comps/NavBar';
import NavBar2 from '../comps/NavBar2';
import WeeklyRewards from '../comps/WeeklyRewards';
import WeeklyUserCont from '../comps/WeeklyUserCont';
import Reminder from '../comps/Reminder';
import RemindContent from '../comps/RemindContent';
import Event from '../comps/Event';
import AddEvent from '../comps/AddEvent';


//TEST YOUR COMPONENTS HERE

const MainCont = styled.div`
display:flex;
width:100vw;
height:100vh;

`



export default function Tester() {

  
  return (<MainCont>


            <FilterButton></FilterButton>
            <CommunityPost/>
       
    
        </MainCont>
  
  )
}