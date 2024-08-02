import { useEffect, useState, lazy, Suspense } from "react";
import Loading from "./loading-component/loading";
const Maxview = lazy(() => import("./max-view-component/max-view-component"));
const Minview = lazy(() => import("./min-view-component/min-view-component"));
function App() {
	const [size, setsize] = useState(
		window.matchMedia("(max-width:800px)").matches
	);
	const data = [
		{
			name: "Nike Air Jordan 1",
			price: "₹ 1, 00, 000",
			image: "/images/1.jpeg",
			color: "Black",
			index: "0",
		},
		{
			name: "Nike Jordan Stadium 90",
			price: "₹ 50, 000",
			image: "/images/2.png",
			color: "Blue",
			index: "1",
		},
		{
			name: "Nike Air Max 1 Essential",
			price: "₹ 10, 000",
			image: "/images/3.png",
			color: "Black",
			index: "2",
		},
		{
			name: "Nike Pegasus 41",
			price: "₹ 50, 000",
			image: "/images/4.png",
			color: "Black",
			index: "3",
		},
		{
			name: "Nike Air Force 1 '07 Fresh",
			price: "₹ 10, 000",
			image: "/images/5.png",
			color: "Black",
			index: "4",
		},
		{
			name: "Nike Air Max 1",
			price: "₹ 50, 000",
			image: "/images/6.png",
			color: "Blue",
			index: "5",
		},
		{
			name: "Air Jordan 1 Low",
			price: "₹ 10, 000",
			image: "/images/7.jpeg",
			color: "Blue",
			index: "6",
		},
		{
			name: "Nike Air Max SC",
			price: "₹ 10,000",
			image: "/images/17.png",
			color: "Black",
			index: "7",
		},
		{
			name: "Nike Motiva",
			price: "₹ 50, 000",
			image: "/images/16.jpeg",
			color: "Blue",
			index: "8",
		},
		{
			name: "Nike Dunk Low Retro",
			price: "₹ 1, 00, 000",
			image: "/images/15.png",
			color: "Black",
			index: "9",
		},
		{
			name: "Jordan Jumpman",
			price: "₹ 10, 000",
			image: "/images/14.png",
			color: "Blue",
			index: "10",
		},
		{
			name: "Air Jordan Legacy 312 Low",
			price: "₹ 50, 000",
			image: "/images/13.jpeg",
			color: "Blue",
			index: "11",
		},
		{
			name: "Jordan Stay Loyal 3",
			price: "₹ 1, 00, 000",
			image: "/images/12.jpeg",
			color: "Black",
			index: "12",
		},
		{
			name: "Air Jordan 1 Zoom CMFT 2",
			price: "₹ 10, 000",
			image: "/images/11.jpeg",
			color: "Blue",
			index: "13",
		},
		{
			name: "Nike Air Max SC Leather",
			price: "₹ 50, 000",
			image: "/images/10.png",
			color: "Black",
			index: "14",
		},
		{
			name: "Air Jordan 1 Low G",
			price: "₹ 1, 00, 000",
			image: "/images/9.jpeg",
			color: "Blue",
			index: "15",
		},
	];
	useEffect(() => {
		window.matchMedia("(max-width:800px)").addEventListener("change", (e) => {
			setsize(e.matches);
		});
	});
	return (
		<>
			<Suspense fallback={<Loading />}>
				{size ? <Minview data={data} /> : <Maxview data={data} />}
			</Suspense>
		</>
	);
}

export default App;
