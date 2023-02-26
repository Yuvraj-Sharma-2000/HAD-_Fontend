const Header = () => {
    return (
        <>
            <div className="row" style={{backgroundColor:"#d8d9d8", margin:"0px 5px", minHeight:"10%"}}>
                {/* This is the header */}
                <div className="col">

                </div>
                <div className="col row justify-content-end">
                    <div className="doctor-name col-6 col-md-3">
                        <div className="text-end">Doctor Name</div>
                    </div>
                    <div className="avatar col-6 col-md-2 rounded-circle bg-white">

                    </div>
                </div>
            </div>
        </>
    );
}
 
export default Header;