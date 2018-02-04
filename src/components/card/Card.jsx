import React from 'react';
import { Panel, Button } from 'react-bootstrap';
import Map from './../map/map';
import './Card.scss'

export default class CardView extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      showMap: false
    }
  }

  showMap = () => {
    this.setState({ showMap: !this.state.showMap })
  }

  render() {
    if (!this.props.data) {
      return <h3 className="card__notfound">Not found. Try again!</h3>
    } else {
      return (
        <div>
          <Panel id="collapsible-panel-example-2">
            <Panel.Heading>
              <Panel.Title toggle>
                <div className='media place-card-container'>
                  <div className='media-left'>
                    <img className='media-object media place-card-image' src={this.props.data.picture} />
                  </div>
                  <div className='media-body media place-card-content'>
                    <h2 className='media-heading media place-card-name'>{this.props.data.name}</h2>
                    <h4 className='media-heading place-card-description'>Планина: <span className='place-card-description-sm'>{this.props.data.mountain}</span></h4>
                    <h4 className='media-heading place-card-description'>Регион: <span className='place-card-description-sm'>{this.props.data.region}</span></h4>
                  </div>
                </div>
              </Panel.Title>
            </Panel.Heading>
            <Panel.Body collapsible>
              <div>
                <h4 className='media-heading place-card-description'>Спорт: <span className='place-card-description-sm'>{this.props.data.region}</span></h4>
                <h4 className='media-heading place-card-description'>Г.Ш.: <span className='place-card-description-sm'>{this.props.data.latitude}</span></h4>
                <h4 className='media-heading place-card-description'>Г.Д.: <span className='place-card-description-sm'>{this.props.data.attitude}</span></h4>
                <h4 className='media-heading place-card-description'>Сложност на изкачване: <span className='place-card-description-sm'>{this.props.data.mountain}</span></h4>
                <h4 className='media-heading place-card-description'>Сложност на спускане: <span className='place-card-description-sm'>{this.props.data.region}</span></h4>
                <h4 className='media-heading place-card-description'>Денивелация: <span className='place-card-description-sm'>{this.props.data.mountain}</span></h4>
                <h4 className='media-heading place-card-description'>Изложение: <span className='place-card-description-sm'>{this.props.data.region}</span></h4>
                <h4 className='media-heading place-card-description'>Повече информация: <span className='place-card-description-sm'>{this.props.data.region}</span></h4>
              </div>
              <div className='place-card-show-map-button'>
                <Button onClick={this.showMap}>{this.state.showMap ? 'Hide map' : 'Show Map'}</Button>
              </div>
            </Panel.Body>
            {this.state.showMap ? <Map /> : ''}
          </Panel>
        </div>
      )
    }
  }
}
