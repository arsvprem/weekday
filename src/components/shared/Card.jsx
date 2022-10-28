function Card({ children, reverse }) {
  return (
    <div className={`card ${reverse && 'reverse'}`}>
      {children}
    </div>
  )
}

Card.defaltProps = {
  reverse: false,
}

export default Card