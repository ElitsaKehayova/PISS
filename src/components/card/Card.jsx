import React from 'react'; 
import { Panel } from 'react-bootstrap';

export default class CardView extends React.Component {
  constructor(props) {
    super(props)
    
    this.state = {
      name: '',
      mountain: '',
      picture: '',
      latitude: '',
      longitude: '',
      attitude: '',
      structure: '',
      length: '',
      numOfTrcks: '',
      generalInfo: '',
      url: '',
      rating: '',
      exposure: '',
      displacement: '',
      difficultyDownhill: '',
      difficultyClimbing: '',
      region: ''
    }
  }
  render() {
    let data = this.props.data ? this.props.data : [{
      id:1,
      notFound: false,
      picture: 'http://placehold.it/60x60',
      name: 'Example name',
      mountain: 'Example mountain',
      region: 'Example region',
      latitude: '200x300',
      longitude: '123x342',
      attitude: '12342',
      structure: 'slkdso',
      length: '123',
      numOfTrcks: '11'
    },
    {
      id:2,
      notFound: false,
      picture: 'http://placehold.it/60x60',
      name: 'Example name',
      mountain: 'Example mountain',
      region: 'Example region',
      latitude: '200x300',
      longitude: '123x342',
      attitude: '12342',
      structure: 'slkdso',
      length: '123',
      numOfTrcks: '11'
    }];
    let dat = data.map((dats)=><Panel id="collapsible-panel-example-2" key={dats.id}>
					<Panel.Heading>
						<Panel.Title toggle>
              <div className="card">
                <img className="card__picture" src={dats.picture} />             
                <h2 className="card__name"> {dats.name}</h2>
                <dl>
                  <dt>Планина:</dt>
                  <dd>{dats.mountain}</dd>

                  <dt>Регион:</dt>
                  <dd>{dats.region}</dd>
                </dl>
              </div>
						</Panel.Title>
					</Panel.Heading>
					<Panel.Body collapsible>
          <div>
                <dl>
                  <dt> latitude:</dt>
                  <dd>{dats. latitude}</dd>

                  <dt>longitude:</dt>
                  <dd>{dats.longitude}</dd>

                  <dt> attitude:</dt>
                  <dd>{dats.attitude}</dd>

                  <dt> structure:</dt>
                  <dd>{dats.structure}</dd>

                  <dt> length:</dt>
                  <dd>{dats.length}</dd>

                  <dt> numOfTrcks:</dt>
                  <dd>{dats.numOfTrcks}</dd>
                </dl>
               </div> 
              
					</Panel.Body>
				</Panel>);
    
    if (data.notFound === 'Not Found') {
      return <h3 className="card__notfound">Not found. Try again!</h3>
    } else {
      return (
        <div>{dat}</div>
      )
    }
  }
}
