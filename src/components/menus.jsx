import React from "react";
import Menu from "./menu";
import './Menus.css';

export default function Menus() {
    const arts = [
        {
            id: 0,
            imageUrl: "https://i.pinimg.com/564x/39/47/de/3947de9673465c223aeb0bc16bce938d.jpg",
            name: "Gobi Manchurain",
            price: 250,
        },
        {
            id: 1,
            imageUrl: "https://i.pinimg.com/564x/0d/a8/92/0da8922b83852e4fb9076aec7ab37352.jpg",
            name: "Paneer Masala",
            price: 300,
        },
        {
            id: 2,
            imageUrl: "https://i.pinimg.com/564x/2e/8a/61/2e8a618b7cae7fd7f21885c0172b64a0.jpg",
            name: "Chicken Biriyani",
            price: 310,
        },
        {
            id: 3,
            imageUrl: "https://i.pinimg.com/564x/bc/cb/df/bccbdfd18165cc1242e25edfb593aeab.jpg",
            name: "Ras-Malai",
            price: 200,
        },
        {
            id: 4,
            imageUrl: "https://i.pinimg.com/564x/52/1a/01/521a01d28f8bc09a8042ee20a0f6451c.jpg",
            name: "Tandoori Chicken",
            price: 500,
        },
        {
            id: 5,
            imageUrl: "https://i.pinimg.com/564x/7f/73/5a/7f735a753545f40d875969a3b5d5da3a.jpg",
            name: "Gulab Jamoon",
            price: 150,
        },
        {
            id: 6,
            imageUrl: "https://i.pinimg.com/564x/2c/28/c0/2c28c086f84987e68bc297d86a385df0.jpg",
            name: "Butter Naan",
            price: 70,
          },
          {
            id: 7,
            imageUrl: "https://i.pinimg.com/564x/41/34/34/4134341efbcb5d738262e3ac5df04a06.jpg",
            name: "Tandoori Prawn",
            price: 750,
          },
          {
            id: 8,
            imageUrl: "https://i.pinimg.com/564x/8f/86/2d/8f862d78f1b00559ad0b5e32a95b92f4.jpg",
            name: "Cheese Balls",
            price: 240,
          },
          {
            id: 9,
            imageUrl: "https://i.pinimg.com/564x/e0/50/18/e05018269b4b2104f6300bf7d3a879c2.jpg",
            name: "Veg Biriyani",
            price: 300,
          }
    ]
    return (
        <section id="menus" className="menus">
            {arts.map((art) => (
                <Menu key={art.id} art={art} />
            ))}
        </section>
    );
}