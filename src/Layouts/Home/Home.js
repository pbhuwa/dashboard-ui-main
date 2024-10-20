import React, {lazy} from "react";
const Header = lazy(()=> import('Layouts/Header'));
const Stats = lazy(()=> import('Components/Stats'));
const Activity = lazy(()=> import('Components/Activity'));
const UserList = lazy(()=> import('Components/User-list'));
const ContentBlock = lazy(()=> import('Components/Content-block'));

const Home = () =>{
	return(
		<main>
			<Header/>
			<Stats/>
			<Activity/>
			<UserList/>
			<ContentBlock/>
		</main>
	)
}

export default Home;