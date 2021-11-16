import {useRouter} from 'next/router'
import Community from '../pagecomps/community'
export default function Home (){

    const router = useRouter();
    const {page} = router.query


    return <div>
        {page == "community" && <Commnity/>}
    </div>
}