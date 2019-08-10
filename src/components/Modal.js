import Modal, {closeStyle} from 'simple-react-modal'
import React, { Component } from 'react';

export default class ModalInfo extends React.Component{
 
  constructor(props){
    super(props)
    this.state = {
        show:true
    }
  }
  show(){
    this.setState({show: true})
  }
 
  close(){
    this.props.hideInfo()
  }
 
 
  render(){
      let planet = this.props.planet;
    return (
      <div>
        <Modal
            className="modal-class" 
            containerClassName="test"
            closeOnOuterClick={true}
            show={this.state.show}
            onClose={this.close.bind(this)}>
             <div className="modal-dialog">

                    <div className="modal-content">
                        <div className="modal-header">
                            <h4>{planet.name}</h4>
                            <button type="button" className="close" onClick={this.close.bind(this)}>&times;</button>
                        </div>
                        <div className="modal-body">
                           {
                               Object.keys(planet).map(function(key,index) {
                                    return <p key={index}><span className="planet-info-key">{key.replace(/_/g,' ')}</span><span className="planet-info-value" title={planet[key]}>{planet[key]}</span></p>
                                })
                           }
                        </div>
                    </div>

             </div>
        
        </Modal>
      </div>
    )
  }
}