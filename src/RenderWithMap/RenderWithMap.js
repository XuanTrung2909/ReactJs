import React, { Component } from 'react'

export default class RenderWithMap extends Component {


    productList = [
        { id: 1, name: 'iphoneX', price: 1000, img: 'https://picsum.photos/200/200' },
        { id: 2, name: 'iphoneXS', price: 2000, img: 'https://picsum.photos/200/200' },
        { id: 3, name: 'iphoneXS Max', price: 3000, img: 'https://picsum.photos/200/200' }
    ];

    renderProduct = () => {

        // const arrDivProduct = [];

        // for (let i = 0; i < this.productList.length; i++){
        //     //moi lan duyet lay ra 1 object trong mang

        //     let product = this.productList[i];

        //     const jsxDivProduct = <div className="col-4">
        //         <div className="card text-left">
        //             <img src={product.img} alt="alt" className="card-img-top"/>
        //             <div className="card-body">
        //                 <h4 className="card=title">{product.name}</h4>
        //                 <p className="card-text">{product.price}</p>
        //             </div>
        //         </div>
        //     </div>;
        //     arrDivProduct.push(jsxDivProduct);
        // }

        let contentJSX = this.productList.map((product, index) => {
            return <div className="col-4">
                         <div className="card text-left">
                                 <img src={product.img} alt="alt" className="card-img-top" />
                     <div className="card-body">
                                         <h4 className="card=title">{product.name}</h4>
                         <p className="card-text">{product.price}</p>
                     </div>
                 </div>
             </div>;
        })

        return contentJSX;
    }


    renderTableProduct = () =>{
        // return this.productList.map((product,index)=>{
        //     return (
        //         <tr>
        //             <td>{product.id}</td>
        //             <td>{product.name}</td>
        //             <td><img src={product.img} alt="" className="w-10"/></td>
        //             <td>{product.price}</td>
        //         </tr>
        //     )
        // })

        let contentTableJSX = this.productList.map((product, index) => {
            return <tr key={index}>
                <td>{product.id}</td>
                <td>{product.name}</td>
                <td><img src={product.img} alt={product.name}/></td>
                <td>{product.price}</td>
            </tr>
        })
        return contentTableJSX;
    }


    render() {
        return (
            <div className="container">
                <h1 className="text-center display-4">Danh sach cac san pham</h1>
                <div className="row">
                    {this.renderProduct()}
                </div>
                <div className="mt-5">
                    <table class="table">
                        <thead>
                            <tr>
                                <th>id</th>
                                <th>name</th>
                                <th>img</th>
                                <th>price</th>
                            </tr>
                        </thead>
                        <tbody>
                            {this.renderTableProduct()}
                        </tbody>
                    </table>
                </div>
            </div>
        )
    }
}
