export default function Layout(props) {
  const { children } = props
  const header = (
    <header>
      <h1 className='text-gradient'>The Gymbro</h1>
      <p>
        <strong>The 30 Simple Workouts Program</strong>
      </p>
    </header>
  )
  const footer = (
    <footer>
      <p>
        Built by{" "}
        <a href='https://www.github.com/surawutbmn' target='_blank'>
          Surawut Binmamud
        </a>
      </p>
    </footer>
  )
  return (
    <>
      {header}
      {children}
      {footer}
    </>
  )
}
