import React, { Component } from 'react'

export default class DemoClass extends Component {
    
    //phương thức render sẽ tự kích hoạt khi mình sử dụng thẻ components 
    render() {
        return (
            <div className="container bg-dark p-5 text-light">
                <p className="display-4 pt-2">Title</p>
                <p>Content</p>
                
            </div>
        )
    }
}
