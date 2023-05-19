import React from 'react'

const MyArticles = ({img,title,children}) => {
  return (
    <article>
        <img src={img} alt={title} />
        <h2>{title}</h2>
        {children}
        <button>Read More</button>
    </article>
  )
}

export default MyArticles