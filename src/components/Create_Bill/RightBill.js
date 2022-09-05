function RightBill() {
    return (
        <div className="col-md-3" style={{background: '#fff'}}>
            <div className="sale-user">
                <div className="form-inline" style={{justifyContent: "space-between"}}>
                    <div className="form-control" style={{border: 'none'}}>
                        <span className="k-input">
                            <span>Người nhập:</span>
                        </span>
                    </div>
                    <div className="form-group sales-man">
                        <i title="Người bán" className="fas fa-user-circle"></i>
                        <div className="form-output" id="salesman1">
                            <span className="form-control form-control-sm" style={{border:"none", float:"right"}}>
                                <span className="k-input"><span>Đặng Linh</span></span>
                            </span>
                        </div>
                    </div>
                </div>
            </div>

            <div className="col-right-content">
                <div className="col-right-inside">
                    <div className="customer-search">
                        Search in here
                        </div>
                    </div>

                    <div className="col-right-inside">
                        
                    </div>
                </div>
            </div>
    )
}

export default RightBill