

const ViewEditNewLayout = ({ children }: { children: React.ReactNode }) => {
    return (
        <>
            <div style={{ zIndex: '1', backgroundColor: '#c4c4c4' }}
                className='d-flex container align-items-start mt-3 p-3 rounded'>
                <div className='d-flex flex-column col position-relative container'>
                    {children}
                </div>
            </div>
        </>
    )
}

export default ViewEditNewLayout