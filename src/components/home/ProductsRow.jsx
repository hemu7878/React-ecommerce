import React from 'react'
import Title from '../common/Title';
import Card from './Card';


function ProductsRow() {
    // const arrCards = [
  //   <Card
  //     src="/images/01.jpg"
  //     title="Product 1"
  //     desc="Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium, expedita."
  //   />,
  //   <Card
  //     src="/images/02.jpg"
  //     title="Product 2"
  //     desc="Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium, expedita."
  //   />,
  //   <Card
  //     src="/images/03.jpg"
  //     title="Product 3"
  //     desc="Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium, expedita."
  //   />,
  //   <Card
  //     src="/images/04.jpg"
  //     title="Product 4"
  //     desc="Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium, expedita."
  //   />,
  // ];

  const data = [
    {
      src: "/images/03.jpg",
      title: "Product 1",
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium, expedita.",
    },
    {
      src: "/images/05.jpg",
      title: "Product 2",
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium, expedita.",
    },
    {
      src: "/images/07.jpg",
      title: "Product 3",
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium, expedita.",
    },
    {
      src: "/images/08.jpg",
      title: "Product 4",
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium, expedita.",
    },
    {
        src: "/images/06.jpg",
        title: "Product 5",
        desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium, expedita.",
      },
  ];

  
  // const cards = data.map((value, index) => {
  //   return <Card src={value.src} title={value.title} desc={value.desc} />;
  // });

  return (
<div style={{ padding: "32px" }}>
      <Title
        title="Our Recent Products"
        desc=""
      />
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fill,minmax(300px, 1fr))",
          gap: 16,

          "@media (maxWidth: 400px)": {
            gridTemplateColumns: "repeat(auto-fill,minmax(100%, 1fr))",
          },
        }}
      >
        {data.map((value, index) => {
          return (
            <Card
              key={index}
              src={value.src}
              title={value.title}
              desc={value.desc}
            />
          );
        })}
      </div>
    </div>  )
}

export default ProductsRow