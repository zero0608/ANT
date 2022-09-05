import Carousel from 'react-bootstrap/Carousel'
import { BsChevronDoubleLeft,BsChevronDoubleRight,BsBackspace,BsPlusLg, BsDashLg } from "react-icons/bs";

function LeftBill() {
    return (
        <div className="col-md-9" style={{paddingLeft: '0px', paddingRight: '10px'}}>
            <div className="form-group bill-detail-content" style={{height:"400px", background: "#fff"}}>
                <table className="table table-striped">
                    <thead class="thead-light">
                        <tr>
                            <th className='text-center'>STT</th>
                            <th className='text-center'>Tên sản phẩm</th>
                            <th className='text-center'>Số lượng</th>
                            <th className='text-center'>Giá bán</th>
                            <th className='text-center'>Thành tiền</th>
                            <th className='text-center'>Xoa</th>
                        </tr>
                    </thead>
                    <tbody id="pro_search_append">
                        <tr data-id="DĐ">
                            <td className='text-center'>DĐ</td>
                            <td className='text-center'>Đường đen</td>
                            <td className='text-center'>
                                <div className="input-group spinner">
                                    <span className="input-group-btn"><button type="button"
                                        className="btn btn-danger btn-number" data-type="minus"
                                        data-field="quant[DĐ]"><BsDashLg/></button></span>

                                    <input name="quant[DĐ]" className="form-control input-number quantity-product-oders"
                                        value="1" type="text"/>

                                    <span className="input-group-btn"><button type="button"
                                        className="btn btn-success btn-number" data-type="plus"
                                        data-field="quant[DĐ]"><BsPlusLg/> </button></span>
                                </div>
                            </td>
                            <td className='text-center'>
                                <input type="text" className="form-control price-order" disabled="disabled" name=""
                                    value="30000"/>
                            </td>
                            <td className="text-center total-money">30,000</td>
                            <td className="text-center">
                                <BsBackspace/>
                            </td>
                        </tr>
                        <tr data-id="DĐ">
                            <td className='text-center'>DĐ</td>
                            <td className='text-center'>Đường đen</td>
                            <td className='text-center'>
                                <div className="input-group spinner">
                                    <span className="input-group-btn"><button type="button"
                                        className="btn btn-danger btn-number" data-type="minus"
                                        data-field="quant[DĐ]"><BsDashLg/></button></span>

                                    <input name="quant[DĐ]" className="form-control input-number quantity-product-oders"
                                        value="1" type="text"/>

                                    <span className="input-group-btn"><button type="button"
                                        className="btn btn-success btn-number" data-type="plus"
                                        data-field="quant[DĐ]"><BsPlusLg/> </button></span>
                                </div>
                            </td>
                            <td className='text-center'>
                                <input type="text" className="form-control price-order" disabled="disabled" name=""
                                    value="30000"/>
                            </td>
                            <td className="text-center total-money">30,000</td>
                            <td className="text-center">
                                <BsBackspace/>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>

            <div class="container-fluid">
                    <div class="row content" style={{justifyContent: "center"}}>
                    <Carousel interval={null} prevIcon = {<BsChevronDoubleLeft/>} nextIcon = {<BsChevronDoubleRight/>} >
                        <Carousel.Item interval = {null}>
                        <div class="row product-list">
                            <div class="col-md product-list-content">
                                <ul>
                                    <li>
                                        <a href="#"  title="Lá trà">
                                            <div class="img-product">
                                                <image src=""/>
                                                    <strong>40,000.000</strong>
                                            </div>
                                            <div class="product-info">
                                                <span class="product-name">Lá trà</span><br/>
                                            </div>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#"  title="Lá trà">
                                            <div class="img-product">
                                                <image src=""/>
                                                    <strong>40,000.000</strong>
                                            </div>
                                            <div class="product-info">
                                                <span class="product-name">Lá trà</span><br/>
                                            </div>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#"  title="Lá trà">
                                            <div class="img-product">
                                                <image src=""/>
                                                    <strong>40,000.000</strong>
                                            </div>
                                            <div class="product-info">
                                                <span class="product-name">Lá trà</span><br/>
                                            </div>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#"  title="Lá trà">
                                            <div class="img-product">
                                                <image src=""/>
                                                    <strong>40,000.000</strong>
                                            </div>
                                            <div class="product-info">
                                                <span class="product-name">Lá trà</span><br/>
                                            </div>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#"  title="Lá trà">
                                            <div class="img-product">
                                                <image src=""/>
                                                    <strong>40,000.000</strong>
                                            </div>
                                            <div class="product-info">
                                                <span class="product-name">Lá trà</span><br/>
                                            </div>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#"  title="Lá trà">
                                            <div class="img-product">
                                                <image src=""/>
                                                    <strong>40,000.000</strong>
                                            </div>
                                            <div class="product-info">
                                                <span class="product-name">Lá trà</span><br/>
                                            </div>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#"  title="Lá trà">
                                            <div class="img-product">
                                                <image src=""/>
                                                    <strong>40,000.000</strong>
                                            </div>
                                            <div class="product-info">
                                                <span class="product-name">Lá trà</span><br/>
                                            </div>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#"  title="Lá trà">
                                            <div class="img-product">
                                                <image src=""/>
                                                    <strong>40,000.000</strong>
                                            </div>
                                            <div class="product-info">
                                                <span class="product-name">Lá trà</span><br/>
                                            </div>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#"  title="Lá trà">
                                            <div class="img-product">
                                                <image src=""/>
                                                    <strong>40,000.000</strong>
                                            </div>
                                            <div class="product-info">
                                                <span class="product-name">Lá trà</span><br/>
                                            </div>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#"  title="Lá trà">
                                            <div class="img-product">
                                                <image src=""/>
                                                    <strong>40,000.000</strong>
                                            </div>
                                            <div class="product-info">
                                                <span class="product-name">Lá trà</span><br/>
                                            </div>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#"  title="Lá trà">
                                            <div class="img-product">
                                                <image src=""/>
                                                    <strong>40,000.000</strong>
                                            </div>
                                            <div class="product-info">
                                                <span class="product-name">Lá trà</span><br/>
                                            </div>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#"  title="Lá trà">
                                            <div class="img-product">
                                                <image src=""/>
                                                    <strong>40,000.000</strong>
                                            </div>
                                            <div class="product-info">
                                                <span class="product-name">Lá trà</span><br/>
                                            </div>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#"  title="Lá trà">
                                            <div class="img-product">
                                                <image src=""/>
                                                    <strong>40,000.000</strong>
                                            </div>
                                            <div class="product-info">
                                                <span class="product-name">Lá trà</span><br/>
                                            </div>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#"  title="Lá trà">
                                            <div class="img-product">
                                                <image src=""/>
                                                    <strong>40,000.000</strong>
                                            </div>
                                            <div class="product-info">
                                                <span class="product-name">Lá trà</span><br/>
                                            </div>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#"  title="Lá trà">
                                            <div class="img-product">
                                                <image src=""/>
                                                    <strong>40,000.000</strong>
                                            </div>
                                            <div class="product-info">
                                                <span class="product-name">Lá trà</span><br/>
                                            </div>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#"  title="Lá trà">
                                            <div class="img-product">
                                                <image src=""/>
                                                    <strong>40,000.000</strong>
                                            </div>
                                            <div class="product-info">
                                                <span class="product-name">Lá trà</span><br/>
                                            </div>
                                        </a>
                                    </li><li>
                                        <a href="#"  title="Lá trà">
                                            <div class="img-product">
                                                <image src=""/>
                                                    <strong>40,000.000</strong>
                                            </div>
                                            <div class="product-info">
                                                <span class="product-name">Lá trà</span><br/>
                                            </div>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#"  title="Lá trà">
                                            <div class="img-product">
                                                <image src=""/>
                                                    <strong>40,000.000</strong>
                                            </div>
                                            <div class="product-info">
                                                <span class="product-name">Lá trà</span><br/>
                                            </div>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#"  title="Lá trà">
                                            <div class="img-product">
                                                <image src=""/>
                                                    <strong>40,000.000</strong>
                                            </div>
                                            <div class="product-info">
                                                <span class="product-name">Lá trà</span><br/>
                                            </div>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#"  title="Lá trà">
                                            <div class="img-product">
                                                <image src=""/>
                                                    <strong>40,000.000</strong>
                                            </div>
                                            <div class="product-info">
                                                <span class="product-name">Lá trà</span><br/>
                                            </div>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#"  title="Lá trà">
                                            <div class="img-product">
                                                <image src=""/>
                                                    <strong>40,000.000</strong>
                                            </div>
                                            <div class="product-info">
                                                <span class="product-name">Lá trà</span><br/>
                                            </div>
                                        </a>
                                    </li>    
                                </ul>
                            </div>
                        </div>
                        </Carousel.Item>
                        <Carousel.Item interval = {null}>
                            <img
                            className="d-block w-100"
                            src="holder.js/800x400?text=Second slide&bg=282c34"
                            alt="Second slide"
                            />

                            <Carousel.Caption>
                            <h3>Second slide label</h3>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                            </Carousel.Caption>
                        </Carousel.Item>
                        <Carousel.Item interval = {null}>
                            <img
                            className="d-block w-100"
                            src="holder.js/800x400?text=Third slide&bg=20232a"
                            alt="Third slide"
                            />

                            <Carousel.Caption>
                            <h3>Third slide label</h3>
                            <p>
                                Praesent commodo cursus magna, vel scelerisque nisl consectetur.
                            </p>
                            </Carousel.Caption>
                        </Carousel.Item>
                    </Carousel>
                    </div>
                </div>
        </div>
    )
}

export default LeftBill