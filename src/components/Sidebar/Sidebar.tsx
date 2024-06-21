const Sidebar = () => {
  return (
    <>
      <nav className='h-full flex flex-col bg-white border-r shadow-sm p-4'>
        <div className='pb-2 flex justify-between items-center'>
          <h1 className='font-bold'>MockYard</h1>
        </div>
        <div className='grow'></div>
        <div>Settings</div>
      </nav>
    </>
  )
}

export default Sidebar
