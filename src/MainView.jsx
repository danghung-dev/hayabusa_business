var Carousel = require('react-3d-carousel');
var Ease = require('ease-functions');
var data = require('./data');

var MainView = React.createClass({
    getInitialState: function () {
        return {
            images: this.getImagesFromData(data[0].company),
            href: this.getHrefFromData(data[0].company),
            text: this.getTitleFromData(data[0].company),
            width: 400,
            layout: 'prism',
            ease: 'linear',
            duration: 400
        };
    },
    getCompanyFromId:function(data,id){
        var result = {}
        if(data.length> 0){
            data.map(function(item,index){
                if(item.id === id){
                    result = item.company
                }
            })
        }
        return result
    },
    getImagesFromData:function(data){
        var result = []
        if(data.length> 0){
            data.map(function(item,index){
                result.push(item.image)
            })
        }
        return result
    },
    getHrefFromData:function(data){
        var result = []
        if(data.length> 0){
            data.map(function(item,index){
                result.push(item.href)
            })
        }
        return result
    },
    getTitleFromData:function(data){
        var result = []
        if(data.length> 0){
            data.map(function(item,index){
                result.push(item.title)
            })
        }
        return result
    },
    componentWillMount: function () {
    },
    handleChange:function(event) {
     //   alert(JSON.stringify(companyArray))
      var companyArray= this.getCompanyFromId(data,event.target.value)
     // alert(JSON.stringify(companyArray))
      this.setState(
          {
             images: this.getImagesFromData(companyArray),
             href:this.getHrefFromData(companyArray),
             text: this.getTitleFromData(companyArray),
          }
        );
    },
    render: function () {
        return (
            <div style={{width: '100%'}} >
                <div >
                    <img src="./image/logo/logo_hayabusa.png" alt="1" height="auto" width="200" />    
                    <h1 style={{ width: '100%',display: 'flex',alignContent: 'center', justifyContent:'center' }}>
                        Hệ thống doanh nghiệp Nhật và Việt Nam
                    </h1>     
                </div>
                <div style={{marginTop: 20,width: '100%',display: 'flex',alignContent: 'center', justifyContent:'center'}}>
                    <span style={{marginTop:5}}> Chọn ngành nghề : </span>
                    <select style={{marginLeft: 20, height: 30, width: 500 }}  onChange={this.handleChange}>
                        <option value="0">Chế xuất</option>
                        <option value="1">Nông Nghiệp</option>
                        <option value="2">Công Nghiệp</option>
                        <option value="3">Nuôi bò</option>
                    </select>
                </div>
                <div style={{marginTop: 50, width: '100%',display: 'flex',alignContent: 'center', justifyContent:'center' }}>
                    <Carousel width={this.state.width}
                            images={this.state.images}
                            href={this.state.href}
                            text={this.state.text}
                            ease={this.state.ease}
                            duration={this.state.duration}
                            layout={this.state.layout}/>
                </div>
               
            </div>
        );
    }
});

module.exports = MainView;        