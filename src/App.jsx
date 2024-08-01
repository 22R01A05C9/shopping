import { useEffect, useState } from "react";
import Maxview from "./max-view-component/max-view-component";
import Minview from "./min-view-component/min-view-component";
function App() {
    const [size, setsize] = useState(window.matchMedia("(max-width:800px)").matches)
    const data = [
        {
            'name': 'Nike Air Jordan 1',
            'price': '₹1,00,000',
            'image': '/images/1.jpeg',
            'color': 'Black'
        },
        {
            'name': 'Nike Jordan Stadium 90',
            'price': '₹50,000',
            'image': '/images/2.png',
            'color': 'Blue'
        },
        {
            'name': 'Nike Air Max 1 Essential', 'price': '₹10,000', 'image': '/images/3.png', 'color': 'Black'
        },
        {
            'name': 'Nike Pegasus 41', 'price': '₹50,000', 'image': '/images/4.png', 'color': 'Black'
        },
        {
            'name': "Nike Air Force 1 '07 Fresh", 'price': '₹10,000', 'image': '/images/5.png', 'color': 'Black'
        },
        {
            'name': 'Nike Air Max 1',
            'price': '₹50,000', 'image': '/images/6.png', 'color': 'Blue'
        },
        {
            'name': 'Air Jordan 1 Low', 'price': '₹10,000', 'image': '/images/7.jpeg', 'color': 'Blue'
        },
        {
            'name': 'Nike Air Max SC', 'price': '₹10,000', 'image': '/images/17.png', 'color': 'Black'
        },
        {
            'name': 'Nike Motiva', 'price': '₹50,000', 'image': '/images/16.jpeg', 'color': 'Blue'
        },
        {
            'name': 'Nike Dunk Low Retro', 'price': '₹1,00,000', 'image': '/images/15.png', 'color': 'Black'
        },
        {
            'name': 'Jordan Jumpman', 'price': '₹10,000', 'image': '/images/14.png', 'color': 'Blue'
        },
        {
            'name': 'Air Jordan Legacy 312 Low', 'price': '₹50,000', 'image': '/images/13.jpeg', 'color': 'Blue'
        },
        {
            'name': 'Jordan Stay Loyal 3', 'price': '₹1,00,000', 'image': '/images/12.jpeg', 'color': 'Black'
        },
        {
            'name': 'Air Jordan 1 Zoom CMFT 2', 'price': '₹10,000', 'image': '/images/11.jpeg', 'color': 'Blue'
        },
        {
            'name': 'Nike Air Max SC Leather', 'price': '₹50,000', 'image': '/images/10.png', 'color': 'Black'
        },
        {
            'name': 'Air Jordan 1 Low G', 'price': '₹1,00,000', 'image': '/images/9.jpeg', 'color': 'Blue'
        }
    ]
    useEffect(() => {
        window.matchMedia("(max-width:800px)").addEventListener("change", (e) => {
            setsize(e.matches)
        })
    })
    return (
        <>

            {size ? <Minview data={data} /> : <Maxview data={data} />}

        </>
    )
}

export default App;