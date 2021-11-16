import {useRouter} from 'next/router'
import Community from '../pagecomps/community'
import NavBar2 from '../comps/NavBar2'

const Cont = styled.div`
  display:flex;
  width:100%;
  height:100%;
  flex-direction:row;
`
const GlbNav = styled.div`
  display:flex;
  flex-direction:column;
  flex-grow:1;
  position:fixed;
`
export default function Home (){

    const router = useRouter();
    const {page} = router.query


    return <Cont>
    <GlbNav>
    <NavBar2
    // user pic src
    src="/Avatar.png"
    // user name
    name="Esther Howard"
    // user rooma point
    user_point="100 pts"
    // if there is new message in alert display:block else display:none
    Alertdisplay="block"
    // showing user is in community page right now
  color5="#8867EB"
  src5="/search_Color.svg"
  onContClick={()=>{
    GlobalNavClick();
  }}
  expand={buttonstate5===1}

  onNotificationClick={()=>{
    NotificationClick();
  }}
  onBackClick={()=>{
    BackClick();
  }}
  Contdisplay={buttonstate22 === 1 ? 'none':'flex' || buttonstate23 === 1 ? 'flex':'none'}
  Contdisplay2={buttonstate22 === 1 ? 'flex':'none'|| buttonstate23 === 1 ? 'none':'flex'}
  />
      </GlbNav>
      {page === "community" && <Community />}
  </Cont>
}